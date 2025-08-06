<template>
  <Navbar/>
  <div class="flex flex-col h-screen">
    <!-- Search and Filters -->
    <div class="p-4">
      <div class="flex flex-col md:flex-row gap-4 items-end">
        <div class="flex-1 min-w-[200px]">
          <label class="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
          <InputText
              v-model="filters.name"
              placeholder="Search by name"
              class="w-full"
              @keyup.enter="searchDoctors"
          />
        </div>

        <div class="flex-1 min-w-[200px]">
          <label class="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
          <Select
              v-model="filters.specialty"
              :options="specialties"
              placeholder="Select Specialty"
              class="w-full"
              :showClear="true"
              filter
          />
        </div>

        <Button
            label="Search"
            icon="pi pi-search"
            class=" w-full md:w-auto !bg-blue-500 !border-blue-500 hover:!bg-blue-600 hover:!border-blue-600 !text-white"
            @click="searchDoctors"
        />

        <Button
            label="Compare"
            icon="pi pi-list-check"
            class=" w-full md:w-auto !bg-blue-500 !border-blue-500 hover:!bg-blue-600 hover:!border-blue-600 !text-white"

            :disabled="selectedDoctors.length < 2"
            @click="compareDoctors"
        />

      </div>
      <div v-if="errorMessage" class="mt-3 p-3 bg-red-100 text-red-700 rounded-md">
        <i class="pi pi-exclamation-triangle mr-2"></i>{{ errorMessage }}
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col md:flex-row flex-1 overflow-hidden">

      <!-- Doctor List -->
      <div class="w-full md:w-1/2 overflow-y-auto p-4">
        <div v-if="loading" class="flex justify-center items-center h-full">
          <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
                           animationDuration=".5s"/>
        </div>

        <div v-else-if="doctors.length === 0" class="text-center py-8">
          <p class="text-gray-500">No doctors found</p>
        </div>

        <div v-else>
          <div
              v-for="doctor in doctors"
              :key="`${doctor.id}-${doctor.id}`"
              class="mb-6 p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
              :class="{ 'bg-blue-50': highlightedDoctor === doctor }"
              @click="highlightMarker(doctor)"
          >
            <div class="flex items-start gap-4">
              <img
                  v-if="doctor.photoUrl"
                  :src="doctor.photoUrl"
                  class="w-16 h-16 rounded-full object-cover"
                  alt="Doctor photo"
              />
              <div>
                <h3 class="text-xl font-semibold">{{ doctor.doctorName }}</h3>
                <p class="text-blue-600 font-medium">{{ doctor.specialty }}</p>
                <p class="text-gray-600 mt-2">
                  <i class="pi pi-building mr-2"></i>{{ doctor.hospitalName }}
                </p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <Tag :value="`${doctor.yearsOfExperience} years experience`" severity="info"/>
                  <Tag :value="doctor.contactPhone" icon="pi pi-phone" severity="primary"/>
                  <Tag :value="doctor.contactEmail" icon="pi pi-envelope"/>
                </div>

                <p class="text-gray-600 mt-2" v-if="doctor.distance">
                  <i class="pi pi-map-marker mr-2"></i>{{ doctor.distance.toFixed(2) }} km away
                </p>

                <div class="flex items-center gap-2 mb-2">
                  <input
                      type="checkbox"
                      :checked="selectedDoctors.includes(doctor.doctorId)"
                      @change="toggleDoctor(doctor.doctorId)"
                  />
                  <label class="text-sm text-gray-500">Compare</label>
                </div>

                <div class="mt-4 flex gap-3">
                  <Button class="!bg-blue-500 !border-blue-500 hover:!bg-blue-600 hover:!border-blue-600 !text-white" label="Details" @click.stop="goToDoctorProfile(doctor.doctorId)"/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Container -->
      <div class="w-full md:w-1/2 h-[400px] md:h-auto relative">
        <div v-if="mapError" class="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div class="text-center p-4">
            <i class="pi pi-map-marker text-4xl text-gray-400 mb-3"></i>
            <p class="text-gray-500">Could not load map</p>
            <p class="text-gray-400 text-sm mt-2">{{ mapError }}</p>
          </div>
        </div>
        <div id="map" class="h-full w-full"></div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {useRouter} from 'vue-router';

const router = useRouter();

import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import ProgressSpinner from 'primevue/progressspinner';
import Navbar from './Navbar.vue';

// Reactive states
const doctors = ref([]);
const specialties = ref([]);
const loading = ref(false);
const filters = ref({
  name: '',
  specialty: null,
  hospitalId: null
});
const errorMessage = ref('');
const mapError = ref('');
const highlightedDoctor = ref(null);

const map = ref(null);
const markers = ref([]);

const userLatLng = ref(null);

// For comparison feature
const comparisonList = ref([]);

const selectedDoctors = ref([]);
// Initialize map with default country view
const initMap = () => {
  try {
    // Saudi Arabia
    const defaultLatLng = [23.8859, 45.0792];
    map.value = L.map('map',{minZoom: 2}).setView(defaultLatLng, 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map.value);
  } catch (e) {
    console.error('Map initialization error:', e);
    mapError.value = 'Failed to initialize map. Please check your internet connection.';
  }
};

// Update markers on map
const updateMapMarkers = () => {
  try {
    // Clear existing markers
    markers.value.forEach(marker => marker.remove());
    markers.value = [];

    const validDoctors = doctors.value.filter(d => d.latitude && d.longitude && !isNaN(d.latitude) && !isNaN(d.longitude));

    if (validDoctors.length === 0) {
      mapError.value = 'No valid location data available';
      return;
    }

    mapError.value = '';

    validDoctors.forEach(doctor => {
      const marker = L.marker([doctor.latitude, doctor.longitude])
          .addTo(map.value)
          .bindPopup(`<b>${doctor.doctorName}</b><br>${doctor.hospitalName}`);

      markers.value.push(marker);
    });

    if (markers.value.length > 0) {
      const group = new L.featureGroup(markers.value);
      map.value.fitBounds(group.getBounds());
    }
  } catch (e) {
    console.error('Map update error:', e);
    mapError.value = 'Error updating map markers';
  }
};

// Highlight marker and zoom on selected doctor
const highlightMarker = (doctor) => {
  highlightedDoctor.value = doctor;

  if (!doctor.latitude || !doctor.longitude || isNaN(doctor.latitude) || isNaN(doctor.longitude)) {
    return;
  }

  try {
    const targetMarker = markers.value.find(marker =>
        marker.getLatLng().lat === doctor.latitude && marker.getLatLng().lng === doctor.longitude
    );

    if (targetMarker) {
      targetMarker.openPopup();
      map.value.flyTo(targetMarker.getLatLng(), 15);
    }
  } catch (e) {
    console.error('Marker highlight error:', e);
  }
};

// Show user location on map
const showUserLocation = (pos) => {
  const userMarker = L.marker([pos.lat, pos.lng], {
    icon: L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    })
  }).addTo(map.value).bindPopup("You are here").openPopup();

  map.value.setView([pos.lat, pos.lng], 12);
};

// Calculate distance between two coords (km)
const getDistanceKm = (lat1, lon1, lat2, lon2) => {
  const toRad = v => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Sort doctors by distance to user
const findNearbyDoctors = () => {
  if (!userLatLng.value) return;
  doctors.value.forEach(doc => {
    doc.distance = getDistanceKm(userLatLng.value.lat, userLatLng.value.lng, doc.latitude, doc.longitude);
  });
  doctors.value.sort((a, b) => a.distance - b.distance);
};

// Fetch specialties from backend
const fetchSpecialties = async () => {
  try {
    const response = await axios.get('/doctors/specialties');
    specialties.value = response.data;
  } catch (error) {
    console.error('Error fetching specialties:', error);
    errorMessage.value = 'Failed to load specialties. Please try again later.';
  }
};

// Search doctors with filters
const searchDoctors = async () => {
  try {
    loading.value = true;
    errorMessage.value = '';
    highlightedDoctor.value = null;

    const rawParams = {
      name: filters.value?.name ?? filters.name,
      specialty: filters.value?.specialty ?? filters.specialty,
      hospitalId: filters.value?.hospitalId ?? filters.hospitalId
    };

    const params = Object.fromEntries(
        Object.entries(rawParams).filter(([_, v]) => v !== null && v !== undefined && v !== '')
    );

    const response = await axios.get('/doctors/search-with-hospital', {params});

    if (response.status === 200) {
      doctors.value = response.data.map(d => ({
        ...d,
        latitude: parseFloat(d.latitude),
        longitude: parseFloat(d.longitude)
      })).filter(d => !isNaN(d.latitude) && !isNaN(d.longitude));

      updateMapMarkers();
    } else {
      errorMessage.value = response.data?.message || 'No results found';
    }
  } catch (error) {
    console.error('Search error:', error);
    if (error.response?.data?.message) {
      errorMessage.value = `Server error: ${error.response.data.message}`;
    } else {
      errorMessage.value = 'Failed to fetch doctors.';
    }
  } finally {
    loading.value = false;
  }
};

// Navigate to doctor profile page
const goToDoctorProfile = (doctorId) => {
  router.push({name: 'DoctorProfile', params: {id: doctorId}});
}


// Comparison feature functions here
function toggleDoctor(doctorId) {
  const idx = selectedDoctors.value.indexOf(doctorId);
  if (idx !== -1) {
    selectedDoctors.value.splice(idx, 1);
  } else {
    if (selectedDoctors.value.length < 3) {
      selectedDoctors.value.push(doctorId);
    }
  }
}

function compareDoctors() {
  if (selectedDoctors.value.length < 2) {
    errorMessage.value = "Select at least 2 doctors to compare.";
    return;
  }
  router.push({
    path: '/compare',
    query: {ids: selectedDoctors.value.join(',')}
  });
}

// Lifecycle hook
onMounted(() => {
  initMap();
  fetchSpecialties();

  navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLatLng.value = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        showUserLocation(userLatLng.value);
        searchDoctors().then(findNearbyDoctors);
      },
      (err) => {
        console.error('Geolocation error:', err.message);
        mapError.value = 'Unable to get your location.';
        searchDoctors();
      }
  );
});
</script>

<style>
#map {
  z-index: 0;
}
</style>
