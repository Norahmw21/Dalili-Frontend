<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Profile Header Card -->
      <Card class="mb-8 shadow-xl">
        <template #content>
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Profile Photo & Basic Info -->
            <div class="flex flex-col items-center lg:items-start lg:w-1/3">
              <div class="relative mb-6">
                <img
                    v-if="doctor?.photoUrl"
                    :src="doctor.photoUrl"
                    class="w-40 h-40 rounded-full shadow-xl border-4 border-white object-cover"
                    alt="Doctor Photo"
                />
                <div v-else class="w-40 h-40 rounded-full shadow-xl border-4 border-white bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <i class="pi pi-user text-6xl text-blue-500"></i>
                </div>
              </div>

              <div class="text-center lg:text-left">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ doctor?.name }}</h1>
                <Badge :value="doctor?.specialty" class="mb-3 text-lg px-4 py-2" severity="info" />
                <div class="flex items-center justify-center lg:justify-start gap-2 text-gray-600 mb-6">
                  <i class="pi pi-clock text-blue-500"></i>
                  <span class="font-medium">{{ doctor?.yearsOfExperience }} years of experience</span>
                </div>
              </div>

              <!-- Contact Information -->
              <div class="w-full space-y-4">
                <h3 class="font-semibold text-lg text-gray-800 text-center lg:text-left">Contact Information</h3>
                <div class="space-y-3">
                  <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <i class="pi pi-phone text-white"></i>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">Phone</p>
                      <p class="font-medium text-gray-900">{{ doctor?.contactPhone }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <i class="pi pi-envelope text-white"></i>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">Email</p>
                      <p class="font-medium text-gray-900 break-all">{{ doctor?.contactEmail }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main Content -->
            <div class="flex-1 space-y-8">
              <!-- About Section -->
              <div>
                <h2 class="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
                  <i class="pi pi-info-circle text-blue-500"></i>
                  About Dr. {{ doctor?.name?.split(' ').slice(-1)[0] }}
                </h2>
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{ doctor?.bio }}</p>
                </div>
              </div>

              <!-- Professional Experience -->
              <div v-if="doctor?.experience">
                <h2 class="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-4">
                  <i class="pi pi-briefcase text-green-500"></i>
                  Professional Experience
                </h2>
                <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                  <p class="text-gray-700 leading-relaxed whitespace-pre-line">{{ doctor?.experience }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Reviews Section -->
      <Card class="shadow-xl">
        <template #content>
          <div>
            <h2 class="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
              <i class="pi pi-star text-yellow-500"></i>
              Patient Reviews
            </h2>

            <!-- Loading State -->
            <div v-if="reviewsLoading" class="flex items-center justify-center py-12">
              <div class="text-center">
                <ProgressSpinner class="mb-4" />
                <p class="text-gray-600">Loading patient reviews...</p>
              </div>
            </div>

            <!-- Empty State -->
            <div v-else-if="reviews?.length === 0" class="text-center py-12">
              <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="pi pi-comment text-3xl text-gray-400"></i>
              </div>
              <h3 class="text-lg font-semibold text-gray-700 mb-2">No Reviews Yet</h3>
              <p class="text-gray-500">Be the first to leave a review for this doctor.</p>
            </div>

            <!-- Reviews List -->
            <div v-else class="space-y-4">
              <!-- Overall Rating Summary = -->
              <div v-if="reviews.length > 0" class="bg-yellow-50 p-6 rounded-xl border border-yellow-100 mb-6">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-1">Overall Rating</h3>
                    <p class="text-gray-600">Based on {{ reviews.length }} {{ reviews.length === 1 ? 'review' : 'reviews' }}</p>
                  </div>
                  <div class="text-right">
                    <div class="text-3xl font-bold text-gray-900 mb-1">
                      {{ (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) }}
                    </div>
                    <div class="flex items-center gap-1">
                      <i
                          v-for="star in 5"
                          :key="star"
                          class="text-lg"
                          :class="star <= Math.round(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) ? 'pi pi-star-fill text-yellow-400' : 'pi pi-star text-gray-300'"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Individual Reviews -->
              <div class="grid gap-4 md:grid-cols-2">
                <Card
                    v-for="review in reviews"
                    :key="review.id"
                    class="hover:shadow-md transition-shadow duration-200"
                >
                  <template #content>
                    <div class="space-y-3">
                      <!-- Rating Stars -->
                      <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                          <div class="flex items-center gap-1">
                            <i
                                v-for="star in 5"
                                :key="star"
                                class="text-lg"
                                :class="star <= review.overallRating ? 'pi pi-star-fill text-yellow-400' : 'pi pi-star text-gray-300'"
                            ></i>
                          </div>
                          <span class="font-semibold text-gray-700">{{ review.overallRating }}.0</span>

                        </div>
                        <div class="text-sm text-gray-500">
                          {{ review.userName }}
                        </div>
                      </div>

                      <!-- Review Comment -->
                      <div class="bg-gray-50 p-4 rounded-lg">
                        <p class="text-gray-700 leading-relaxed">{{ review.comment }}</p>
                      </div>

                      <!-- Review Date (if available) -->
                      <div v-if="review.createdAt" class="text-xs text-gray-400">
                        {{ new Date(review.createdAt).toLocaleDateString() }}
                      </div>
                    </div>
                  </template>
                </Card>

              </div>
            </div>
          </div>
        </template>
      </Card>

      <Card class="mt-6 mb-8 shadow-xl">
        <template #content>
          <div>
            <h2 class="flex items-center gap-3 text-xl font-bold text-gray-900 mb-3">
              <i class="pi pi-map-marker text-red-500"></i>
              Location
            </h2>
            <div class="w-full flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div
                    v-if="doctor?.latitude && doctor?.longitude"
                    class="rounded-xl overflow-hidden"
                    style="min-height: 220px; height: 220px;"
                >
                  <div id="doctor-map" class="w-full h-full rounded-xl"></div>
                </div>
                <div v-else class="bg-gray-100 p-6 rounded-xl text-gray-500 text-center">
                  <i class="pi pi-map-marker text-3xl mb-2"></i>
                  <div>No location data available for this doctor.</div>
                </div>
              </div>

              <div v-if="doctor?.hospitalName" class="flex items-center">
                <div>
                  <div class="font-semibold text-gray-700 mb-2">Hospital</div>
                  <div class="text-lg text-blue-900">{{ doctor.hospitalName }}</div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'
import Badge from 'primevue/badge'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const route = useRoute()
const doctorId = route.params.id

const doctor = ref(null)
const reviews = ref([])
const reviewsLoading = ref(false)

const hospitalLocation = ref(null)
const map = ref(null);
const marker = ref(null);

const initDoctorMap = () => {
  if (!doctor.value?.latitude || !doctor.value?.longitude) return;

  nextTick(() => {
    if (map.value && map.value.remove) {
      map.value.remove();
      map.value = null;
    }

    const mapContainer = document.getElementById('doctor-map');
    if (!mapContainer) return;

    mapContainer.innerHTML = '';
    map.value = L.map(mapContainer).setView(
        [doctor.value.latitude, doctor.value.longitude],
        15
    );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map.value);

    // Marker
    marker.value = L.marker([doctor.value.latitude, doctor.value.longitude])
        .addTo(map.value)
        .bindPopup(
            `<b>${doctor.value.name}</b><br>${doctor.value.hospitalName ?? ''}`
        );

    marker.value.openPopup();
  });
};


// When doctor data loaded, initialize the map
watch(
    () => doctor.value,
    (newVal) => {
      if (newVal && newVal.latitude && newVal.longitude) {
        nextTick(() => {
          initDoctorMap();
        });
      }
    }
);
const fetchHospitalLocation = async () => {
  if (!doctor.value?.name) return
  try {
    const { data } = await axios.get('/doctors/search-with-hospital', {
      params: { name: doctor.value.name }
    })

    if (Array.isArray(data) && data.length > 0) {

      const found = data.find(d => d.doctorId === doctor.value.id) || data[0]
      hospitalLocation.value = found

      doctor.value.latitude = Number(found.latitude)
      doctor.value.longitude = Number(found.longitude)
      doctor.value.hospitalName = found.hospitalName
    }
  } catch (e) {
    hospitalLocation.value = null
  }
}

const fetchDoctor = async () => {
  try {
    const { data } = await axios.get(`/doctors/${doctorId}`)
    doctor.value = data
  } catch (e) {
    doctor.value = null
  }
}

const fetchReviews = async () => {
  reviewsLoading.value = true
  try {
    const { data } = await axios.get(`/api/reviews/doctor/${doctorId}`)
    reviews.value = data
  } catch (e) {
    reviews.value = []
  } finally {
    reviewsLoading.value = false
  }
}

onMounted(async () => {
  await fetchDoctor()
  await fetchHospitalLocation()
  fetchReviews()
})

</script>
<style scoped>
@import 'leaflet/dist/leaflet.css';

#doctor-map {
  width: 100%;
  height: 220px;
  border-radius: 1rem;
  z-index: 1;
}

</style>