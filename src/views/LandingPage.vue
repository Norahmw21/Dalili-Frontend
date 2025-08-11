<template>
  <section class="bg-blue-50 min-h-screen">
    <!-- Navbar -->
    <nav class="flex justify-between items-center p-6 bg-white shadow-md">
      <div class="text-2xl font-bold text-blue-700">Dalili</div>
      <ul class="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#">Find Doctors</a></li>
        <li><a href="#">Get The App</a></li>
      </ul>
      <div>
        <button class="text-blue-600 font-semibold mr-4">Sign In</button>
        <button class="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="flex flex-col lg:flex-row items-center justify-between px-20 py-10 max-w-7xl mx-auto">
      <div class="lg:w-1/2 text-center lg:text-left">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          WELCOME TO DALILI <span class="text-blue-600">Your Trusted Companion For Finding The Right Doctor.</span>
        </h1><br/><br/>
        <div class="flex gap-2 items-center">
          <button class="bg-blue-600 text-white px-4 py-2 rounded">Let's Start</button>
        </div>
      </div>

<div class="lg:w-1/2 mt-10 lg:mt-0">
  <img src="/src/assets/doctor.png" alt="Doctor" class="w-full max-w-xl mx-auto" />
</div>

    </div>

    <!-- Features Section-->
    <section class="py-16 bg-gray-50 text-center">
    <h2 class="text-3xl font-bold text-blue-700 mb-10">Why Choose <span class="text-black">DALILI?</span></h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
      <!-- Feature 1 -->
      <div class="bg-white p-6 rounded shadow hover:shadow-md transition">
        <div class="text-4xl mb-4">🧑‍⚕️</div>
        <h3 class="text-lg font-semibold mb-2">Verified Doctors</h3>
        <p class="text-sm text-gray-600">
          All doctors listed are verified with credentials, experience, and affiliations.
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="bg-white p-6 rounded shadow hover:shadow-md transition">
        <div class="text-4xl mb-4">🌟</div>
        <h3 class="text-lg font-semibold mb-2">Real Patient Reviews</h3>
        <p class="text-sm text-gray-600">
          Read honest reviews and ratings from other patients like you.
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="bg-white p-6 rounded shadow hover:shadow-md transition">
        <div class="text-4xl mb-4">🔎</div>
        <h3 class="text-lg font-semibold mb-2">Advanced Doctor Search</h3>
        <p class="text-sm text-gray-600">
          Find doctors by name, specialty, location, or condition easily.
        </p>
      </div>

      <!-- Feature 4 -->
      <div class="bg-white p-6 rounded shadow hover:shadow-md transition">
        <div class="text-4xl mb-4">❤️</div>
        <h3 class="text-lg font-semibold mb-2">Save Favorite Doctors</h3>
        <p class="text-sm text-gray-600">
          Bookmark your trusted doctors for quick future access.
        </p>
      </div>
    </div>
  </section>


<!-- Footer -->
<footer class="bg-white py-6 text-center text-sm text-gray-500">
  © 2025 Dalili. All rights reserved.
</footer>
</section>
</template>
