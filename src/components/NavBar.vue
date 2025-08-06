<template>
  <nav class="bg-white border-b border-gray-200 px-6 md:px-12 py-4 flex justify-between items-center">
    <!-- Logo -->
    <router-link to="/" class="flex items-center space-x-3">
      <img src="../assets/logo.png" alt="DocReviews Logo" class="w-10 h-10 rounded-full" />
      <span class="text-xl font-semibold text-gray-900 tracking-tight">DocReviews</span>
    </router-link>

    <!-- Nav Links -->
    <ul class="hidden md:flex space-x-8 text-sm text-gray-700 font-medium">
      <li><router-link to="/" class="hover:text-black transition">Home</router-link></li>
      <li><router-link to="#" class="hover:text-black transition">About</router-link></li>
      <li><router-link to="#" class="hover:text-black transition">Find a Doctor</router-link></li>
      <li><router-link to="#" class="hover:text-black transition">Apps</router-link></li>
      <li><router-link to="#" class="hover:text-black transition">Contact</router-link></li>
    </ul>

    <!-- User Section -->
    <div class="flex items-center space-x-4 text-sm">
      <!-- If logged in -->
      <template v-if="user">
        <span class="text-gray-600">Welcome, {{ user.name }}</span>
        <button
          @click="logout"
          class="px-4 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition duration-200"
        >
          Logout
        </button>
      </template>

      <!-- If NOT logged in -->
      <template v-else>
        <router-link
          to="/login"
          class="text-gray-700 hover:text-black transition"
        >
          Login
        </router-link>
        <router-link
          to="/register"
          class="px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Register
        </router-link>
      </template>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const user = ref(null)
const router = useRouter()

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }
})

const logout = () => {
  localStorage.removeItem('user')
  user.value = null
  router.push('/')
}
</script>
