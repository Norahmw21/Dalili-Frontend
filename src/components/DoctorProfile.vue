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
                <div v-else
                     class="w-40 h-40 rounded-full shadow-xl border-4 border-white bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <i class="pi pi-user text-6xl text-blue-500"></i>
                </div>
              </div>

              <div class="text-center lg:text-left">
                <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ doctor?.name }}</h1>
                <Badge :value="doctor?.specialty" class="mb-3 text-lg px-4 py-2" severity="info"/>
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
            <div class="grid gap-4 md:grid-cols-2">
            </div>

            <!-- Loading State -->
            <div v-if="reviewsLoading" class="flex items-center justify-center py-12">
              <div class="text-center">
                <ProgressSpinner class="mb-4"/>
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
                    <p class="text-gray-600">Based on {{ reviews.length }}
                      {{ reviews.length === 1 ? 'review' : 'reviews' }}</p>
                  </div>
                  <div class="text-right">
                    <div class="text-3xl font-bold text-gray-900 mb-1">
                      {{ averageRating }}
                    </div>
                    <div class="flex items-center gap-1">
                      <i
                          v-for="star in 5"
                          :key="star"
                          class="text-lg"
                          :class="star <= Math.round(averageRating) ? 'pi pi-star-fill text-yellow-400' : 'pi pi-star text-gray-300'"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Individual Reviews -->
              <div class="grid gap-4 md:grid-cols-2">
                <ReviewCard
                    v-for="review in reviews"
                    :key="review.id"
                    :rating="review.overallRating"
                    :comment="review.comment"
                    :createdAt="review.createdAt"
                    :userName="review.userName"
                    :doctorName="doctor?.name"
                />
              </div>

            </div>

            <!--  add review button-->
            <div class="flex justify-end mb-6">
              <button
                  @click="goToAddReview"
                  class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow font-semibold transition"
              >
                <i class="pi pi-plus mr-2"></i>
                Add Review
              </button>
            </div>


          </div>


        </template>

      </Card>

    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'
import Badge from 'primevue/badge'
import ReviewCard from './ReviewCard.vue'
import ReviewForm from "../views/ReviewForm.vue";


const route = useRoute()
const doctorId = route.params.id
const showAddReview = ref(false)
const doctor = ref(null)
const reviews = ref([])
const reviewsLoading = ref(false)

//review form
const router = useRouter()
const userId = JSON.parse(localStorage.getItem('user') || '{}')?.user_id
const goToAddReview = () => {
  router.push({
    name: 'ReviewForm',
    params: {id: doctorId},
    query: {userId}
  })
}

const fetchDoctor = async () => {
  try {
    const {data} = await axios.get(`/doctors/${doctorId}`)
    doctor.value = data
  } catch (e) {
    doctor.value = null
  }
}
const averageRating = computed(() => {
  if (!reviews.value.length) return '0.0'
  const ratings = reviews.value.map(r => Number(r.rating ?? r.overallRating)).filter(r => !isNaN(r))
  if (!ratings.length) return '0.0'
  return (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1)
})

const fetchReviews = async () => {
  reviewsLoading.value = true
  try {
    const {data} = await axios.get(`/api/reviews/doctor/${doctorId}`)
    reviews.value = data
    console.log('Fetched reviews:', data)
  } catch (e) {
    reviews.value = []
  } finally {
    reviewsLoading.value = false
  }
}

onMounted(async () => {
  await fetchDoctor()
  fetchReviews()
})

</script>
