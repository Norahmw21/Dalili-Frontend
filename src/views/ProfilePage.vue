<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="w-72 bg-white border-r shadow-sm flex flex-col">
      <!-- Logo Section -->
      <div class="p-6 border-b">
        <div class="flex items-center">
          <div class="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
            <span class="text-white font-bold text-lg">+</span>
          </div>
          <div class="text-2xl font-bold text-gray-800">Health</div>
        </div>
        <p class="text-sm text-gray-500 mt-2">Patient Dashboard</p>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-6">
        <div class="space-y-3">
          <button 
            @click="activeTab = 'settings'" 
            :class="tabClass('settings')"
            class="w-full flex items-center px-4 py-3 text-left rounded-xl font-medium transition-all duration-200"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Account Settings
          </button>
          
          <button 
            @click="activeTab = 'favorites'" 
            :class="tabClass('favorites')"
            class="w-full flex items-center px-4 py-3 text-left rounded-xl font-medium transition-all duration-200"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            Favorite Doctors
            <span v-if="favoriteDoctors.length > 0" class="ml-auto bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
              {{ favoriteDoctors.length }}
            </span>
          </button>
          
          <button 
            @click="activeTab = 'reviews'" 
            :class="tabClass('reviews')"
            class="w-full flex items-center px-4 py-3 text-left rounded-xl font-medium transition-all duration-200"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            My Reviews
            <span v-if="reviews.length > 0" class="ml-auto bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
              {{ reviews.length }}
            </span>
          </button>
        </div>
      </nav>

      <!-- User Profile & Logout -->
      <div class="p-6 border-t bg-gray-50">
        <div class="flex items-center mb-4">
          <div class="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
            <span class="text-white font-semibold text-sm">{{ getUserInitials }}</span>
          </div>
          <div>
            <p class="font-semibold text-gray-800 text-sm">{{ user.name || 'User' }}</p>
            <p class="text-xs text-gray-500">{{ user.email }}</p>
          </div>
        </div>
        <button 
          @click="logout" 
          class="w-full bg-red-500 text-white py-3 px-4 rounded-xl hover:bg-red-600 transition-colors font-medium flex items-center justify-center"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Logout
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto">
      <!-- Header -->
      <header class="bg-white border-b px-8 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-800">{{ getTabTitle }}</h1>
            <p class="text-gray-600 mt-1">{{ getTabSubtitle }}</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <p class="text-sm text-gray-500">Welcome back,</p>
              <p class="font-semibold text-gray-800">{{ user.name || 'User' }}</p>
            </div>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <div class="p-8">
        <!-- Account Settings -->
        <div v-if="activeTab === 'settings'">
          <div class="max-w-2xl">
            <div class="bg-white shadow-sm rounded-2xl overflow-hidden">
              <div class="bg-teal-500 px-8 py-6">
                <h3 class="text-2xl font-bold text-white">ACCOUNT SETTINGS</h3>
                <p class="text-teal-100 mt-1">Update your personal information</p>
              </div>
              
              <form @submit.prevent="updateUserInfo" class="p-8 space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      v-model="user.name" 
                      type="text" 
                      placeholder="Enter your full name" 
                      class="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      v-model="user.email" 
                      type="email" 
                      placeholder="Enter your email" 
                      class="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <input 
                    v-model="user.password" 
                    type="password" 
                    placeholder="Enter new password" 
                    class="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition-colors"
                  />
                  <p class="text-xs text-gray-500 mt-1">Leave blank to keep current password</p>
                </div>
                
                <button 
                  type="submit" 
                  class="bg-teal-500 text-white px-8 py-4 rounded-xl hover:bg-teal-600 transition-colors font-semibold flex items-center"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Favorite Doctors -->
        <div v-if="activeTab === 'favorites'">
          <div v-if="favoriteDoctors.length === 0" class="text-center py-16">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">No Favorite Doctors Yet</h3>
            <p class="text-gray-600 mb-6">Start adding doctors to your favorites to see them here.</p>
            <button class="bg-teal-500 text-white px-6 py-3 rounded-xl hover:bg-teal-600 transition-colors font-semibold">
              Find Doctors
            </button>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="doctor in favoriteDoctors" 
              :key="doctor.id" 
              class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              <div class="p-6 text-center">
                <div class="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    v-if="doctor.photoUrl" 
                    :src="doctor.photoUrl" 
                    alt="Doctor" 
                    class="w-18 h-18 rounded-full object-cover" 
                  />
                  <span v-else class="text-white font-bold text-lg">Dr</span>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-1">{{ doctor.name }}</h3>
                <p class="text-sm text-teal-600 font-medium mb-3">{{ doctor.specialty }}</p>
                <div class="flex justify-center items-center space-x-1 text-yellow-400 mb-4">
                  <span v-for="i in 5" :key="i">
                    <svg class="w-4 h-4" :class="i <= Math.round(doctor.averageRating || 0) ? 'fill-current' : 'fill-gray-200'" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </span>
                </div>
                <button class="w-full bg-teal-50 text-teal-600 py-2 px-4 rounded-xl hover:bg-teal-100 transition-colors font-medium">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- My Reviews -->
        <div v-if="activeTab === 'reviews'">
          <div v-if="reviews.length === 0" class="text-center py-16">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">No Reviews Yet</h3>
            <p class="text-gray-600 mb-6">Share your experience with doctors to help other patients.</p>
            <button class="bg-teal-500 text-white px-6 py-3 rounded-xl hover:bg-teal-600 transition-colors font-semibold">
              Write a Review
            </button>
          </div>

          <div v-else class="space-y-6">
            <div 
              v-for="review in reviews" 
              :key="review.id" 
              class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="text-lg font-bold text-gray-800">{{ review.doctorName }}</h3>
                    <div class="flex items-center space-x-1 text-yellow-400 mt-1">
                      <span v-for="i in 5" :key="i">
                        <svg class="w-4 h-4" :class="i <= review.overallRating ? 'fill-current' : 'fill-gray-200'" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </span>
                      <span class="text-gray-600 text-sm ml-2">{{ review.overallRating }}/5</span>
                    </div>
                  </div>
                  <span class="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    {{ formatDate(review.createdAt) }}
                  </span>
                </div>
                
                <p class="text-gray-700 leading-relaxed">{{ review.comment }}</p>
                
                <div class="mt-4 pt-4 border-t flex justify-between items-center">
                  <div class="flex space-x-4 text-sm text-gray-500">
                    <button class="hover:text-teal-600 transition-colors">Edit</button>
                    <button class="hover:text-red-600 transition-colors">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const baseUrl = 'http://localhost:8080'
const route = useRoute()
const router = useRouter()

const userId = route.params.userId || localStorage.getItem('userId')
const activeTab = ref('settings')
const user = ref({ name: '', email: '', password: '' })
const favoriteDoctors = ref([])
const reviews = ref([])

if (!userId) {
  alert('User ID not found. Please log in again.')
  router.push('/login')
}

// Computed Titles
const getTabTitle = computed(() => {
  switch (activeTab.value) {
    case 'settings': return 'Account Settings'
    case 'favorites': return 'Favorite Doctors'
    case 'reviews': return 'My Reviews'
    default: return ''
  }
})

const getTabSubtitle = computed(() => {
  switch (activeTab.value) {
    case 'settings': return 'Manage your account information and preferences'
    case 'favorites': return 'View and manage your favorite healthcare providers'
    case 'reviews': return 'Your feedback and ratings for doctors'
    default: return ''
  }
})

const getUserInitials = computed(() => {
  if (!user.value.name) return 'U'
  return user.value.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const tabClass = (tab) => {
  return activeTab.value === tab
    ? 'bg-teal-500 text-white shadow-lg'
    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
}

// API Calls
const loadUser = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/users/${userId}`)
    user.value = res.data
  } catch (error) {
    console.error('Error loading user:', error)
  }
}

const updateUserInfo = async () => {
  try {
    await axios.put(`${baseUrl}/api/users/${userId}`, user.value)
    alert('User information updated successfully!')
  } catch (error) {
    console.error('Error updating user:', error)
    alert('Error updating user information.')
  }
}

const loadFavorites = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/favorites/user/${userId}`)
    const favoriteIds = res.data.map(fav => fav.doctorId)
    const doctorPromises = favoriteIds.map(id =>
      axios.get(`${baseUrl}/doctors/${id}`).then(res => res.data)
    )
    favoriteDoctors.value = await Promise.all(doctorPromises)
  } catch (error) {
    console.error('Error loading favorites:', error)
  }
}

const loadReviews = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/reviews/user/${userId}`)
    reviews.value = res.data
  } catch (error) {
    console.error('Error loading reviews:', error)
  }
}

// Utilities
const formatDate = (iso) => {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('userId')
  router.push('/login')
}

// On Mount
onMounted(() => {
  loadUser()
  loadFavorites()
  loadReviews()
})
</script>


<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>