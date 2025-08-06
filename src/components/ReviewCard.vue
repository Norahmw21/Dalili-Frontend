<template>
  <div class="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-gray-200 p-6 mb-8 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:scale-[1.02] transform group">
    
    <!-- Header Section -->
    <div class="flex justify-between items-start mb-4">
      <!-- Avatar & User -->
      <div class="flex items-center space-x-4">
        <!-- Avatar -->
<div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-gray-800 font-semibold text-lg shadow-sm">
          {{ getInitials(userName || 'Anonymous') }}
        </div>

        <!-- User Info & Rating -->
        <div>
          <div class="flex items-center space-x-2 mb-1">
            <!-- Stars -->
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

            <!-- Score -->
            <span class="text-xs font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full shadow-sm">
              {{ rating?.toFixed(1) }}
            </span>
          </div>
          <p class="text-sm font-medium text-gray-600 tracking-tight">
            {{ userName || 'Anonymous Patient' }}
          </p>
        </div>
      </div>

      <!-- Date -->
      <div class="text-right">
        <span class="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
          {{ formattedDate }}
        </span>
      </div>
    </div>

    <!-- Comment -->
    <div class="mb-4">
      <blockquote class="text-gray-800 text-base italic tracking-tight bg-gray-50/60 border-l-4 border-blue-200 pl-4 py-3 rounded-md">
        "{{ comment }}"
      </blockquote>
    </div>

    <!-- Doctor Info -->
    <div v-if="doctorName" class="flex items-center justify-between pt-4 border-t border-gray-100">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-400 shadow-inner flex items-center justify-center">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <p class="text-sm font-medium text-gray-500">Doctor</p>
          <p class="text-sm text-gray-800 font-semibold">{{ doctorName }}</p>
        </div>
      </div>

      <div class="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"></path>
        </svg>
        <span>Verified</span>
      </div>
    </div>

    <!-- Footer Interaction -->
    <div class="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div class="flex items-center space-x-4">
        <button class="flex items-center gap-1 text-gray-500 hover:text-green-500 transition duration-200 ease-in-out text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5">
            </path>
          </svg>
          <span>Helpful</span>
        </button>

        <button class="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition duration-200 ease-in-out text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z">
            </path>
          </svg>
          <span>Share</span>
        </button>
      </div>

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
  userName: String,
  doctorName: String
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
