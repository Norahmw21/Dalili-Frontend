
<template>

  <section class="bg-white min-h-screen">
    <!-- Navbar -->
    <Navbar/>

    <!-- Hero Section -->
    <div class="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
  <!-- Hero Section -->
<div class="flex flex-col items-center justify-center text-center px-8 py-20 max-w-4xl mx-auto">
  <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
    YOUR <span class="text-black">HEALTH</span><br />
    <span class="text-teal-500 text-3xl sm:text-4xl">OUR PRIORITY</span>
  </h1>

  <p class="text-gray-600 mb-8 max-w-xl text-lg">
    WELCOME TO <span class="font-bold text-gray-800">DALILI</span> — Your Trusted Companion For Finding The Right Doctor.
  </p>

  <button
    @click="$router.push('/login')"
    class="bg-teal-500 hover:bg-teal-600 text-white px-10 py-3 rounded-full font-semibold text-lg transition duration-300 shadow-lg"
  >
    Get Started →
  </button>
 


      </div>
<!-- 
      <div class="lg:w-1/2 mt-10 lg:mt-0 relative">
        <div class="relative">
          <div class="absolute inset-0 bg-teal-400 rounded-full w-80 h-80 mx-auto opacity-20"></div>
          <div class="relative z-10 w-full max-w-sm mx-auto h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-500">Doctor Image</span>
          </div>
        </div>
      </div> -->
    </div>

   

<!-- Our Services Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-12">
          OUR <span class="text-teal-500">SERVICES</span>
        </h2>

        <div class="grid gap-8 md:grid-cols-3">
          <!-- Service Cards -->
          <div v-for="(service, index) in services" :key="index"
            class="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center">
            <!-- Icon in green circle -->
            <div class="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-5">
              <img :src="service.icon" alt="icon" class="w-8 h-8 object-contain" />
            </div>

            <h3 class="text-teal-600 font-bold text-lg mb-1">{{ service.title }}</h3>
            <h4 class="text-gray-800 font-semibold mb-2 text-md">{{ service.subtitle }}</h4>
            <p class="text-gray-600 text-sm">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>


<!-- Why Choose Us Section -->
<section class="py-20 bg-gradient-to-b from-white to-gray-50">
  <div class="max-w-7xl mx-auto px-8">
 <!-- Why Choose Us Section -->
<div class="flex flex-col lg:flex-row items-center justify-center gap-16 px-8 py-20 max-w-6xl mx-auto text-center lg:text-left">
  
  <!-- Left Content -->
  <div class="lg:w-2/3">
    <h2 class="text-4xl font-bold text-gray-800 leading-tight mb-4">
      WHY <span class="text-teal-500">CHOOSE US</span>
    </h2>

    <p class="text-gray-600 text-lg mb-10 max-w-2xl mx-auto lg:mx-0">
      We make finding trusted doctors and reviewing your experiences simple, secure, and helpful for everyone.
    </p>

    <ul class="space-y-6">
      <li class="flex items-start justify-center lg:justify-start">
        <div class="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 shadow-md">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1..." clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="text-gray-800 font-medium text-base">Verified Patient Reviews</span>
      </li>

      <li class="flex items-start justify-center lg:justify-start">
        <div class="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 shadow-md">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1..." clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="text-gray-800 font-medium text-base">Easy Doctor Search & Filtering</span>
      </li>

      <li class="flex items-start justify-center lg:justify-start">
        <div class="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 shadow-md">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1..." clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="text-gray-800 font-medium text-base">Secure Profile Management</span>
      </li>

      <li class="flex items-start justify-center lg:justify-start">
        <div class="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 shadow-md">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1..." clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="text-gray-800 font-medium text-base">Save & Favorite Trusted Doctors</span>
      </li>

      <li class="flex items-start justify-center lg:justify-start">
        <div class="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-4 shadow-md">
          <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1..." clip-rule="evenodd"/>
          </svg>
        </div>
        <span class="text-gray-800 font-medium text-base">Multilingual Interface for Local Users</span>
      </li>
    </ul>
  </div>
 


      <!-- Right Graphic -->
      <!-- <div class="lg:w-1/2 relative">
        <div class="relative">
          <div class="absolute inset-0 bg-teal-400 rounded-full w-80 h-80 mx-auto opacity-20"></div>

          <div class="relative z-10 w-full max-w-sm mx-auto rounded-full h-80 bg-gray-100 flex items-center justify-center shadow-inner">
            <span class="text-gray-500 text-center px-4">Patient-first Platform</span>
          </div>

          <div class="absolute top-4 right-4 bg-teal-500 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center font-bold text-sm shadow-lg">
            100%<br />Verified
          </div>
        </div>
      </div> -->

    </div>
  </div>
</section>
<!-- Top Doctors Section -->
<section class="py-20 bg-white relative overflow-hidden">
  <!-- World map background -->
  <div
    class="absolute inset-0 bg-center bg-no-repeat opacity-25 pointer-events-none"
    style="background-image: url('/src/assets/world-map.png'); background-size: 600px;"
  ></div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
    <!-- Title -->
    <h2 class="text-4xl font-bold text-gray-800 mb-14">
      TOP <span class="text-teal-500">DOCTORS</span>
    </h2>

    <!-- Doctors Grid -->
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="doctor in topDoctors"
        :key="doctor.id"
        class="flex flex-col items-center justify-center"
      >
        <!-- Doctor Image & Rating Badge -->
        <div class="relative w-24 h-24 mb-3">
          <img
            :src="doctor.photoUrl || defaultImage"
            alt="Doctor photo"
            class="w-24 h-24 rounded-full object-cover border-4 border-teal-500 shadow"
          />
          <div
            class="absolute -top-2 -right-2 bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1"
          >
            ★ {{ doctor.averageRating?.toFixed(1) || 'N/A' }}
          </div>
        </div>

        <!-- Doctor Name -->
        <h3 class="text-md font-semibold text-gray-800 mb-1">
          {{ doctor.name }}
        </h3>

        <!-- Stars -->
        <div class="flex justify-center items-center text-yellow-400 mb-1">
          <span v-for="i in 5" :key="i">
            <i :class="i <= Math.round(doctor.averageRating || 0) ? 'fas fa-star' : 'far fa-star'"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="py-20 bg-gray-50">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-gray-800 mb-10">
      CONTACT <span class="text-teal-500">US</span>
    </h2>

    <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
      We’d love to hear from you. Whether you have a question, feedback, or a suggestion — just drop us a message!
    </p>

    <form class="space-y-6 max-w-xl mx-auto text-left">
      <div class="flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Your Name"
          class="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          class="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
        />
      </div>

      <input
        type="tel"
        placeholder="Phone Number"
        class="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
      />

      <textarea
        placeholder="Your Message"
        rows="5"
        class="w-full p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-teal-500 resize-none"
      ></textarea>

      <div class="text-center">
        <button
          type="submit"
          class="bg-teal-500 hover:bg-teal-600 text-white px-10 py-3 rounded-full font-semibold transition"
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
  </div>
</section>


    <!-- Footer -->
    <Footer/>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
// import ChatBot from '../components/ChatBot.vue'

const topDoctors = ref([])
const defaultImage = '/src/assets/default-doctor.png'

const services = [
  {
    title: 'DOCTOR SEARCH',
    subtitle: 'Find Doctors Easily',
    description: 'Search by specialty, location, or rating to find the right doctor for your needs.',
    icon: '/src/assets/search-icon.png'
  },
  {
    title: 'REVIEWS',
    subtitle: 'Real Patient Feedback',
    description: 'Read authentic patient reviews and experiences to choose confidently.',
    icon: '/src/assets/review-icon.png'
  },
  {
    title: 'FAVORITES',
    subtitle: 'Save Preferred Doctors',
    description: 'Bookmark your favorite doctors for quick access and future appointments.',
    icon: '/src/assets/favorite-icon.png'
  },
  {
    title: 'PROFILE',
    subtitle: 'Secure Profile Control',
    description: 'Manage your information, password, and preferences easily.',
    icon: '/src/assets/profile-icon.png'
  },
  {
    title: 'DOCTOR INFO',
    subtitle: 'Verified Profiles',
    description: 'Explore credentials, specialties, contact details, and more.',
    icon: '/src/assets/info-icon.png'
  },
  {
    title: 'COMING SOON',
    subtitle: 'Appointment Booking',
    description: 'Soon you’ll be able to book appointments directly from the app.',
    icon: '/src/assets/calendar-icon.png'
  }
]

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
