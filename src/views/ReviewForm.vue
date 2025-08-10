<template>
  <div>
    <Navbar/>

    <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div class="w-full max-w-lg">
        <!-- Header -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Leave a Review</h2>
          <p class="text-gray-600">Share your experience with Dr. Smith</p>
        </div>

        <!-- Rating Form -->
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <!-- Star Rating Section -->
          <div class="text-center mb-8">
            <div class="flex justify-center items-center mb-4">
              <button
                  v-for="star in 5"
                  :key="star"
                  @click="setRating(star)"
                  class="mx-1 p-2 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-100"
                  :class="star <= review.overall_rating ? 'text-blue-500 hover:text-blue-600' : 'text-gray-300 hover:text-gray-400'"
              >
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </button>
            </div>

            <!-- Rating Feedback -->
            <div class="mb-6">
              <p v-if="review.overall_rating === 0" class="text-gray-500 text-sm">Click to rate your experience</p>
              <div v-else class="space-y-1">
                <p class="text-2xl font-bold text-blue-600">{{ getRatingText() }}</p>
                <p class="text-sm text-gray-500">{{ review.overall_rating }}/5 stars</p>
              </div>
            </div>
          </div>

          <!-- Feedback Categories -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-4 text-center">What can we improve?</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              <button
                  v-for="category in feedbackCategories"
                  :key="category"
                  @click="selectCategory(category)"
                  class="px-4 py-2 rounded-xl border transition-all duration-200 text-sm font-medium"
                  :class="selectedCategory === category
                ? 'bg-blue-500 border-blue-500 text-white shadow-md transform scale-105' 
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300'"
              >
                {{ category }}
              </button>
            </div>
          </div>

          <!-- Comment Section -->
          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-700 mb-3">
              Additional Comments
              <span class="text-gray-400 font-normal">(optional)</span>
            </label>
            <div class="relative">
            <textarea
                v-model="review.comment"
                rows="4"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:border-blue-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500 resize-none"
                placeholder="Tell us more about your experience..."
                maxlength="500"
            ></textarea>
              <div class="absolute bottom-3 right-3 text-xs text-gray-400">
                {{ review.comment.length }}/500
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <button
              @click="submitReview"
              :disabled="loading || review.overall_rating === 0"
              class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl shadow-sm hover:shadow-md disabled:shadow-none transform hover:-translate-y-0.5 disabled:translate-y-0 transition-all duration-200 disabled:cursor-not-allowed"
          >
          <span v-if="loading" class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting Review...
          </span>
            <span v-else class="flex items-center justify-center">
            Submit Review
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </span>
          </button>

          <!-- Privacy Note -->
          <p class="text-xs text-gray-500 text-center mt-4 leading-relaxed">
            Your review will be published anonymously and help other patients make informed decisions.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import Navbar from '../components/Navbar.vue'

const route = useRoute()
const router = useRouter()
const doctorId = route.params.doctorId
const userData = JSON.parse(localStorage.getItem('user') || '{}')
const userId = userData?.user?.id
console.log("Extracted userId from localStorage:", userId)

const review = ref({
  overall_rating: 0,
  comment: ''
})


const loading = ref(false)
const selectedCategory = ref('')

const feedbackCategories = [
  'Wait Time',
  'Communication',
  'Cleanliness',
  'Staff Courtesy',
  'Appointment',
  'Facilities'
]

const ratingTexts = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very Good',
  5: 'Excellent'
}

const setRating = (value) => {
  review.value.overall_rating = value
}

const getRatingText = () => {
  return ratingTexts[review.value.overall_rating] || ''
}

const selectCategory = (category) => {
  selectedCategory.value = category

  const currentComment = review.value.comment.toLowerCase()
  const categoryLower = category.toLowerCase()

  if (!currentComment.includes(categoryLower)) {
    if (review.value.comment.trim()) {
      review.value.comment += ` - ${category}: `
    } else {
      review.value.comment = `${category}: `
    }
  }
}

import axios from 'axios';

const submitReview = async () => {
  if (!review.value.overall_rating) {
    alert('Please select a rating')
    return
  }

  loading.value = true

  try {
    const reviewData = {
      doctorId: parseInt(doctorId),
      userId: parseInt(userId),
      rating: review.value.overall_rating,
      comment: review.value.comment
    }
    console.log("Sending Review Data:", reviewData);

    const token = localStorage.getItem('token')

    if (!token) {
      alert('You must be logged in to submit a review.')
      router.push('/login')
      return
    }

    await axios.post('/api/reviews', reviewData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });




    alert('Review submitted successfully!')
    router.push(`/doctor/${doctorId}`)
  } catch (err) {
    alert(err.response?.data?.message || err.message)
    console.error('Review submission error:', err)
  } finally {
    loading.value = false
  }
}


</script>

