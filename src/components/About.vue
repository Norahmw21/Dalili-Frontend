<script setup lang="ts">
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <NavBar/>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About DALILI </h1>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Connecting patients with trusted healthcare providers through authentic reviews and comprehensive doctor profiles.
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p class="text-gray-600 mb-6">
              To empower patients with transparent information about healthcare providers, helping them make informed decisions about their medical care.
            </p>
            <p class="text-gray-600">
              We believe everyone deserves access to reliable information when choosing a doctor or specialist.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md">
            <img
                src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg"
                 alt="Medical team discussing"
                class="w-full h-auto rounded-lg"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose DALILI </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-xl">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Verified Reviews</h3>
            <p class="text-gray-600">
              All reviews are authenticated to ensure they come from real patients with genuine experiences.
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-xl">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Comprehensive Search</h3>
            <p class="text-gray-600">
              Find doctors by specialty, location, insurance accepted, and patient ratings.
            </p>
          </div>

          <div class="bg-gray-50 p-6 rounded-xl">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Secure Platform</h3>
            <p class="text-gray-600">
              Your privacy and data security are our top priorities.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
  <Footer/>
</template>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom animation for hover effects */
.feature-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

/* Responsive typography */
@media (max-width: 640px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
}
</style>