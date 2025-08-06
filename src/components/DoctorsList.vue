<template>
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
            severity="info"
            class="w-full md:w-auto"
            @click="searchDoctors"
        />
      </div>

      <!-- Error Message -->
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
              :key="`${doctor.doctorId}-${doctor.hospitalId}`"
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


                  <p  class=" text-sm text-gray-500 mt-1" v-if="doctor.distance">
                    {{ doctor.distance.toFixed(2) }} km away
                  </p>


                <Button class="mt-4" label="Details" severity="info"/>

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

<script>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// PrimeVue Components
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import ProgressSpinner from 'primevue/progressspinner';

export default {
  components: {
    InputText,
    Select,
    Button,
    Tag,
    ProgressSpinner
  },
  setup() {

    // Reactive data
    const doctors = ref([]);
    const specialties = ref([]);
    const loading = ref(false);
    const filters = ref({
      name: '',
      specialty: null,
      hospitalId: null
    });

    const userLatLng = ref(null);


    // Error handling
    const errorMessage = ref('');
    const mapError = ref('');
    const highlightedDoctor = ref(null);

    // Map references
    const map = ref(null);
    const markers = ref([]);

    // Initialize map
    const initMap = () => {
      try {
        map.value = L.map('map').setView([0, 0], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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

        // Add new markers
        const validDoctors = doctors.value.filter(doctor =>
            doctor.latitude && doctor.longitude &&
            !isNaN(doctor.latitude) && !isNaN(doctor.longitude)
        );

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

        // Adjust map view to show all markers
        if (markers.value.length > 0) {
          const group = new L.featureGroup(markers.value);
          map.value.fitBounds(group.getBounds());
        }
      } catch (e) {
        console.error('Map update error:', e);
        mapError.value = 'Error updating map markers';
      }
    };

    // Highlight marker when doctor card is clicked
    const highlightMarker = (doctor) => {
      highlightedDoctor.value = doctor;

      if (!doctor.latitude || !doctor.longitude ||
          isNaN(doctor.latitude) || isNaN(doctor.longitude)) {
        return;
      }

      try {
        const targetMarker = markers.value.find(marker =>
            marker.getLatLng().lat === doctor.latitude &&
            marker.getLatLng().lng === doctor.longitude
        );

        if (targetMarker) {
          targetMarker.openPopup();
          map.value.flyTo(targetMarker.getLatLng(), 15);
        }
      } catch (e) {
        console.error('Marker highlight error:', e);
      }
    };

    // Fetch specialties
    const fetchSpecialties = async () => {
      try {
        const response = await axios.get('/doctors/specialties');
        specialties.value = response.data;
      } catch (error) {
        console.error('Error fetching specialties:', error);
        errorMessage.value = 'Failed to load specialties. Please try again later.';
      }
    };

    // Search doctors
    const searchDoctors = async () => {
      try {
        loading.value = true;
        errorMessage.value = '';
        highlightedDoctor.value = null;

        // Build params without nulls or undefineds
        const rawParams = {
          name: filters.value.name,
          specialty: filters.value.specialty,
          hospitalId: filters.value.hospitalId
        };

        const params = Object.fromEntries(
            Object.entries(rawParams).filter(([_, v]) => v !== null && v !== undefined && v !== '')
        );

        const response = await axios.get('/doctors/search-with-hospital', {
          params,
          paramsSerializer: (params) => {
            const searchParams = new URLSearchParams();
            Object.keys(params).forEach((key) => {
              if (params[key] != null && params[key] !== '') {
                searchParams.append(key, params[key]);
              }
            });
            return searchParams.toString();
          },
        });

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

    const showUserLocation = (userLatLng) => {
      const userMarker = L.marker([userLatLng.lat, userLatLng.lng], {
        icon: L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        })
      }).addTo(map.value).bindPopup("You are here").openPopup();

      //center map
      map.value.setView([userLatLng.lat, userLatLng.lng], 12);
    };

    const getDistanceKm = (lat1, lon1, lat2, lon2) => {
      const toRad = (value) => (value * Math.PI) / 180;
      const R = 6371; // Earth's radius in km

      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      return R * c;
    };

    //nearby doctors
    const nearbyDoctors = ref([]);

    const findNearbyDoctors = () => {
      if (!userLatLng.value) return;

      // Calculate and attach distance to each doctor
      doctors.value.forEach((doctor) => {
        doctor.distance = getDistanceKm(
            userLatLng.value.lat,
            userLatLng.value.lng,
            doctor.latitude,
            doctor.longitude
        );
      });

      // Sort doctors by distance (closest first)
      doctors.value.sort((a, b) => a.distance - b.distance);
    };


    // Initialize component
    onMounted(async () => {
      initMap();
      fetchSpecialties();

      navigator.geolocation.getCurrentPosition(
          async (position) => {
            userLatLng.value = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            showUserLocation(userLatLng.value);
            await searchDoctors();
            findNearbyDoctors(); // now you can sort
          },
          async (error) => {
            console.error('Geolocation error:', error.message);
            mapError.value = 'Unable to get your location.';
            await searchDoctors(); // fallback without sorting
          }
      );
    });

    return {
      doctors,
      specialties,
      loading,
      filters,
      errorMessage,
      mapError,
      highlightedDoctor,
      searchDoctors,
      highlightMarker
    };
  }
};
</script>

<style>

#map {
  z-index: 0;
}
</style>