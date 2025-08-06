<template>
  <div class="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-8">
    <!-- Profile Photo & Main Info -->
    <div class="flex flex-col items-center md:items-start md:w-1/3">
      <img
          v-if="doctor"
          :src="doctor.photoUrl"
          class="w-32 h-32 rounded-full shadow-md border border-gray-200 object-cover"
          alt="Doctor Photo"
      />
      <div class="mt-4 text-center md:text-left">
        <h1 class="text-2xl font-bold text-gray-800">{{ doctor?.name }}</h1>
        <div class="text-blue-600 font-semibold mb-1">{{ doctor?.specialty }}</div>
        <div class="text-sm text-gray-500">{{ doctor?.yearsOfExperience }} years experience</div>
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <div class="flex items-center gap-2 text-gray-600">
          <i class="pi pi-phone"></i>
          <span>{{ doctor?.contactPhone }}</span>
        </div>
        <div class="flex items-center gap-2 text-gray-600">
          <i class="pi pi-envelope"></i>
          <span>{{ doctor?.contactEmail }}</span>
        </div>
      </div>
    </div>

    <!-- Bio, Experience, Reviews -->
    <div class="flex-1 flex flex-col gap-6">
      <div>
        <h2 class="font-semibold text-lg mb-1 text-gray-800">About</h2>
        <p class="text-gray-700 whitespace-pre-line">{{ doctor?.bio }}</p>
      </div>
      <div>
        <h2 class="font-semibold text-lg mb-1 text-gray-800">Professional Experience</h2>
        <p class="text-gray-700 whitespace-pre-line">{{ doctor?.experience }}</p>
      </div>
      <div>
        <h2 class="font-semibold text-lg mb-2 text-gray-800">Patient Reviews</h2>
        <div v-if="reviewsLoading" class="flex items-center gap-2 text-blue-500">
          <ProgressSpinner style="width: 24px; height: 24px" strokeWidth="6" />
          <span>Loading reviews...</span>
        </div>
        <div v-else-if="reviews?.length === 0" class="text-gray-400">
          No reviews yet.
        </div>
        <div v-else class="space-y-3">
          <div
              v-for="review in reviews"
              :key="review.id"
              class="p-3 bg-gray-50 rounded-lg border"
          >
            <div class="flex items-center gap-2 mb-1">
              <span class="font-semibold text-sm text-gray-700">Rating:</span>
              <Tag :value="review.rating" severity="info" />
            </div>
            <div class="text-gray-700">{{ review.comment }}</div>
            <div class="text-xs text-gray-400 mt-1">by User #{{ review.userId }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import ProgressSpinner from 'primevue/progressspinner'
import Tag from 'primevue/tag'

const route = useRoute()
const doctorId = route.params.id

const doctor = ref(null)
const reviews = ref([])
const reviewsLoading = ref(false)

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

onMounted(() => {
  fetchDoctor()
  fetchReviews()
})
</script>
