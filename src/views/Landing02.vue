
<template>
  <section class="bg-white min-h-screen">
    <!-- Navbar -->
    <nav class="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div class="flex items-center">
        <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
          <span class="text-white font-bold text-sm">+</span>
        </div>
        <div class="text-2xl font-bold text-gray-800">Dalili</div>
      </div>
      <ul class="flex space-x-8 text-gray-600 font-medium">
        <li><a href="#" class="hover:text-teal-500">Home</a></li>
        <li><a href="#" class="hover:text-teal-500">About Us</a></li>
        <li><a href="#" class="hover:text-teal-500">Find a doctor</a></li>
        <li><a href="#" class="hover:text-teal-500">Apps</a></li>
        <li><a href="#" class="hover:text-teal-500">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <div class="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
      <div class="lg:w-1/2 text-left">

        <h1 class="text-5xl font-bold text-gray-800 mb-6 leading-tight">
          YOUR
          <span class="text-black">HEALTH</span><br/>
          <span class="text-teal-500 text-3xl">OUR PRIORITY</span>
        </h1>
        
        <p class="text-gray-600 mb-8 max-w-md">
          WELCOME TO DALILI Your Trusted Companion For Finding The Right Doctor.
        </p>
        
       <button @click="router.push('/login')" class="bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition">
  Get Started →
</button>

      </div>

      <div class="lg:w-1/2 mt-10 lg:mt-0 relative">
        <div class="relative">
          <div class="absolute inset-0 bg-teal-400 rounded-full w-80 h-80 mx-auto opacity-20"></div>
          <div class="relative z-10 w-full max-w-sm mx-auto h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-500">Doctor Image</span>
          </div>
        </div>
      </div>
    </div>

   

<!-- Service Cards -->
<div class="grid md:grid-cols-3 gap-9">
     
  <!-- Doctor Search -->
  <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
    <div class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
       <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
    </div>
    <h3 class="font-bold text-teal-500 mb-2">DOCTOR SEARCH</h3>
    <h4 class="font-semibold mb-3">Find Doctors Easily</h4>
    <p class="text-gray-600 text-sm">Search by specialty, location, or rating to find the right doctor for your needs.</p>
  </div>

  <!-- Reviews -->
  <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
    <div class="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
       <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
    </div>
    <h3 class="font-bold text-teal-500 mb-2">REVIEWS</h3>
    <h4 class="font-semibold mb-3">Real Patient Feedback</h4>
    <p class="text-gray-600 text-sm">Read authentic patient reviews and experiences to choose confidently.</p>
  </div>

  <!-- Favorite Doctors -->
  <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
    <div class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
       <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
    </div>
    <h3 class="font-bold text-teal-500 mb-2">FAVORITES</h3>
    <h4 class="font-semibold mb-3">Save Preferred Doctors</h4>
    <p class="text-gray-600 text-sm">Bookmark your favorite doctors for quick access and future appointments.</p>
  </div>

  <!-- Profile Management -->
  <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
    <div class="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
       <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
    </div>
    <h3 class="font-bold text-teal-500 mb-2">PROFILE</h3>
    <h4 class="font-semibold mb-3">Secure Profile Control</h4>
    <p class="text-gray-600 text-sm">Manage your personal information, password, and medical preferences with ease.</p>
  </div>

  <!-- Doctor Info -->
  <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
    <div class="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
       <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
    </div>
    <h3 class="font-bold text-teal-500 mb-2">DOCTOR INFO</h3>
    <h4 class="font-semibold mb-3">Verified Profiles</h4>
    <p class="text-gray-600 text-sm">Explore detailed doctor credentials, specialties, contact details, and more.</p>
  </div>

  <!-- Future Features -->
  <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center">
    <div class="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
       <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
    </div>
    <h3 class="font-bold text-teal-500 mb-2">COMING SOON</h3>
    <h4 class="font-semibold mb-3">Appointment Booking</h4>
    <p class="text-gray-600 text-sm">Soon you'll be able to book appointments directly from the app.</p>
  </div>
</div>


<!-- Why Choose Us Section -->
<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-8">
    <div class="flex flex-col lg:flex-row items-center gap-12">
      
      <!-- Left Side -->
      <div class="lg:w-1/2">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">WHY</h2>
        <span class="text-3xl font-bold text-teal-500">CHOOSE US</span>
        
        <p class="text-gray-600 mt-6 mb-8">
          We make finding trusted doctors and reviewing your experiences simple, secure, and helpful for everyone.
        </p>

        <div class="space-y-4">
          <div class="flex items-center">
            <div class="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-800">Verified Patient Reviews</span>
          </div>

          <div class="flex items-center">
            <div class="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-800">Easy Doctor Search & Filtering</span>
          </div>

          <div class="flex items-center">
            <div class="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-800">Secure Profile Management</span>
          </div>

          <div class="flex items-center">
            <div class="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-800">Save & Favorite Trusted Doctors</span>
          </div>

          <div class="flex items-center">
            <div class="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <span class="font-semibold text-gray-800">Multilingual Interface for Local Users</span>
          </div>
        </div>
      </div>

      <!-- Right Side Graphic -->
      <div class="lg:w-1/2 relative">
        <div class="relative">
          <div class="absolute inset-0 bg-teal-400 rounded-full w-80 h-80 mx-auto opacity-20"></div>
          <div class="relative z-10 w-full max-w-sm mx-auto rounded-full h-80 bg-gray-200 flex items-center justify-center">
            <span class="text-gray-500">Patient-first Platform</span>
          </div>
          <div class="absolute top-4 right-4 bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm text-center">
            100%<br />Verified
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    <!-- Top a Doctor Section -->
      <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-800 mb-10">
        TOP <span class="text-teal-500">DOCTORS</span>
      </h2>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="doctor in topDoctors"
          :key="doctor.id"
          class="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
        >
          <img
            :src="doctor.photoUrl || defaultImage"
            alt="Doctor photo"
            class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 class="text-lg font-semibold text-gray-800">
            {{ doctor.name }}
          </h3>
          <p class="text-sm text-gray-600 mb-2">
            {{ doctor.specialty }}
          </p>
          <div class="flex justify-center items-center space-x-1 text-yellow-400 mb-1">
            <span v-for="i in 5" :key="i">
              <i :class="i <= Math.round(doctor.averageRating || 0) ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
          </div>
          <p class="text-sm text-gray-600">
            {{ doctor.averageRating?.toFixed(1) || 'N/A' }} / 5.0
          </p>
        </div>
      </div>
    </div>
  </section>
    <!-- Contact Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">CONTACT <span class="text-teal-500">US</span></h2>
        
        <div class="bg-teal-500 text-white p-6 rounded-full mb-8 max-w-2xl mx-auto">
          <p class="text-sm">
            blablabalalbalbabala
          </p>
        </div>

        <form class="space-y-6 max-w-lg mx-auto">
          <div class="relative">
            <input type="text" placeholder="Name" class="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500" />
            <span class="absolute right-4 top-4 text-gray-400">+</span>
          </div>
          
          <div class="relative">
            <input type="email" placeholder="Email" class="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500" />
            <span class="absolute right-4 top-4 text-gray-400">+</span>
          </div>
          
          <div class="relative">
            <input type="tel" placeholder="Phone" class="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500" />
            <span class="absolute right-4 top-4 text-gray-400">+</span>
          </div>
          
          <div class="relative">
            <textarea placeholder="Message" rows="4" class="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 resize-none"></textarea>
            <span class="absolute right-4 top-4 text-gray-400">+</span>
          </div>
          
          <button type="submit" class="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
            SEND
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white py-8">          
        <div class="mt-8 pt-8 border-t text-center text-gray-500 text-sm">
          © 2025 Dalili. All rights reserved.
        </div>
    </footer>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const topDoctors = ref([])
const defaultImage = '/src/assets/default-doctor.png'

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/doctors/top')

    if (Array.isArray(response.data)) {
      topDoctors.value = response.data
        .filter(d => typeof d.averageRating === 'number')
        .sort((a, b) => b.averageRating - a.averageRating)
        .slice(0, 4)
    } else {
      console.warn('Unexpected response format:', response.data)
      topDoctors.value = []
    }
  } catch (error) {
    console.error('Error fetching top doctors:', error)
  }
})
</script>
