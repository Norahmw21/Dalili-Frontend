<template>
  <div class="bg-white rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-100/50 p-6 mb-6 hover:shadow-xl hover:shadow-gray-100/60 transition-all duration-300 group">
    <!-- Header Section -->
    <div class="flex justify-between items-start mb-4">
      <!-- Left: Rating and User Info -->
      <div class="flex items-center space-x-4">
        <!-- Avatar -->
        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md">
          {{ getInitials(userName || 'Anonymous') }}
        </div>

        <!-- Rating and User -->
        <div>
          <div class="flex items-center space-x-2 mb-1">
            <!-- Star Rating -->
            <div class="flex gap-0.5">
              <svg 
                v-for="n in 5" 
                :key="n"
                class="w-5 h-5 transition-colors duration-200"
                :class="n <= Math.round(rating) ? 'text-amber-400' : 'text-gray-200'"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <!-- Rating Score -->
            <span class="text-sm font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
              {{ rating?.toFixed(1) }}
            </span>
          </div>

          <!-- User Name -->
          <p class="text-sm font-medium text-gray-600">
            {{ userName || 'Anonymous Patient' }}
          </p>
        </div>
      </div>

      <!-- Right: Date -->
      <div class="text-right">
        <span class="text-sm text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
          {{ formattedDate }}
        </span>
      </div>
    </div>

    <!-- Comment Section -->
    <div class="mb-4">
      <blockquote class="text-gray-700 leading-relaxed text-base border-l-4 border-blue-100 pl-4 bg-gray-50/50 py-3 rounded-r-lg">
        "{{ comment }}"
      </blockquote>
    </div>

    <!-- Doctor Info (if applicable) -->
    <div v-if="doctorName" class="flex items-center justify-between pt-4 border-t border-gray-100">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-600">Doctor</p>
          <p class="text-sm text-gray-800 font-semibold">{{ doctorName }}</p>
        </div>
      </div>

      <!-- Verified Badge -->
      <div class="flex items-center space-x-1 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium">
        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <span>Verified</span>
      </div>
    </div>

    <!-- Interaction Footer -->
    <div class="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <!-- Helpful Actions -->
      <div class="flex items-center space-x-4">
        <button class="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors duration-200 text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
          </svg>
          <span>Helpful</span>
        </button>

        <button class="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors duration-200 text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
          </svg>
          <span>Share</span>
        </button>
      </div>

      <!-- Review Category Tag -->
      <div class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
        Patient Review
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: Number,
  comment: String,
  createdAt: String,
  userName: String,   // review submitted by
  doctorName: String  // review about (optional)
})

const formattedDate = computed(() => {
  const date = new Date(props.createdAt)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
})

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
</script>
