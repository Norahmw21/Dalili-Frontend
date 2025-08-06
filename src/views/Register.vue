<template>
  <div class="flex flex-col min-h-screen bg-gray-50 font-system text-base antialiased">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Container -->
    <main class="flex-grow flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div class="w-full max-w-7xl">
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[700px] flex flex-col lg:flex-row">
          
          <!-- Left Side - Hero Section -->
          <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            <!-- Subtle Background Elements -->
            <div class="absolute inset-0 opacity-5">
              <div class="absolute top-32 left-32 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
              <div class="absolute bottom-40 right-24 w-48 h-48 bg-emerald-400 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
              <div class="absolute top-2/3 left-16 w-32 h-32 bg-purple-400 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s;"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 flex flex-col justify-center px-16 py-16 space-y-12 w-full">
              <!-- Logo -->
              <div class="flex items-center space-x-3">
                <div class="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span class="text-xl font-semibold text-white">HealthFind</span>
              </div>

              <!-- Main Heading -->
              <div class="space-y-6">
                <h1 class="text-5xl font-bold text-white leading-tight tracking-tight">
                  Find the Perfect<br />
                  <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Healthcare Provider
                  </span>
                </h1>
                <p class="text-xl text-slate-300 leading-relaxed max-w-lg">
                  Connect with trusted doctors and read authentic reviews from real patients to make informed healthcare decisions.
                </p>
              </div>

              <!-- Features -->
              <div class="space-y-4">
                <div class="flex items-center space-x-4 text-slate-200">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-lg">Verified healthcare professionals</span>
                </div>
                <div class="flex items-center space-x-4 text-slate-200">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-lg">Authentic patient reviews</span>
                </div>
                <div class="flex items-center space-x-4 text-slate-200">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-lg">Easy appointment booking</span>
                </div>
              </div>

              <!-- Testimonial -->
              <div class="bg-white/8 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                <div class="flex space-x-1 mb-4">
                  <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p class="text-slate-100 text-lg leading-relaxed mb-6">
                  "HealthFind made finding the right cardiologist effortless. The detailed reviews and easy booking system saved me so much time. Couldn't be happier!"
                </p>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    S
                  </div>
                  <div>
                    <div class="text-white font-semibold text-lg">Sarah Johnson</div>
                    <div class="text-slate-400">Heart Patient</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side - Form Section -->
          <div class="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 lg:px-16">
            <div class="w-full max-w-lg space-y-8">
              
              <!-- Mobile Logo & Header -->
              <div class="text-center lg:hidden">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h1 class="text-2xl font-bold text-slate-900 mb-2">Welcome to HealthFind</h1>
                <p class="text-slate-600">Find your perfect healthcare provider</p>
              </div>

              <!-- Form Header -->
              <div class="text-center space-y-3">
                <h2 class="text-3xl font-bold text-slate-900 tracking-tight">Create Account</h2>
                <p class="text-slate-600 text-lg">Join thousands of satisfied patients</p>
              </div>

              <!-- User Type Toggle -->
              <div class="bg-slate-100 rounded-2xl p-1.5 flex space-x-1">
                <button type="button" 
                  class="flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-200 bg-slate-900 text-white shadow-md">
                  <svg class="w-5 h-5 inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Patient Account
                </button>
                <button @click="router.push('/doctorList')" type="button"
                  class="flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-200 text-slate-700 hover:bg-slate-200">
                  <svg class="w-5 h-5 inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Browse as Guest
                </button>
              </div>

              <!-- Error Alert -->
              <div v-if="error" class="bg-red-50 border border-red-200 rounded-2xl p-4">
                <div class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  <p class="text-red-700 font-medium">{{ error }}</p>
                </div>
              </div>

              <!-- Signup Form -->
              <div v-if="!success">
                <form @submit.prevent="handleSignup" class="space-y-6">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="space-y-2">
                      <label class="text-sm font-semibold text-slate-700">First Name</label>
                      <input 
                        name="firstName" 
                        v-model="form.firstName" 
                        placeholder="John" 
                        required
                        class="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-400"
                      />
                    </div>
                    <div class="space-y-2">
                      <label class="text-sm font-semibold text-slate-700">Last Name</label>
                      <input 
                        name="lastName" 
                        v-model="form.lastName" 
                        placeholder="Doe" 
                        required
                        class="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-400"
                      />
                    </div>
                  </div>
                  
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      v-model="form.email" 
                      placeholder="john@example.com" 
                      required
                      class="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-400"
                    />
                  </div>
                  
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-slate-700">Password</label>
                    <div class="relative">
                      <input 
                        type="password" 
                        v-model="form.password" 
                        placeholder="Create a strong password" 
                        required 
                        minlength="8"
                        class="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-400 pr-14"
                      />
                      <button 
                        type="button"
                        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-200"
                      >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3 pt-2">
                    <input 
                      type="checkbox" 
                      required 
                      class="mt-1 w-5 h-5 text-blue-600 border-slate-300 rounded-lg focus:ring-blue-500 focus:ring-2"
                    />
                    <label class="text-slate-600 leading-relaxed">
                      I agree to the 
                      <a href="#" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                        Terms of Service
                      </a> 
                      and 
                      <a href="#" class="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    :disabled="loading"
                    class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"
                  >
                    <span v-if="loading" class="flex items-center justify-center space-x-2">
                      <svg class="animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Creating Account...</span>
                    </span>
                    <span v-else class="text-lg">Create Account</span>
                  </button>
                </form>
              </div>

              <!-- Success State -->
              <div v-else class="text-center space-y-8 py-8">
                <div class="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                  <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="space-y-3">
                  <h3 class="text-2xl font-bold text-slate-900">Welcome, {{ form.firstName }}! 🎉</h3>
                  <p class="text-slate-600 text-lg">Your account has been successfully created.</p>
                  <p class="text-sm text-slate-500">Redirecting you to browse healthcare providers...</p>
                </div>
              </div>

              <!-- Login Link -->
              <div class="text-center pt-6 border-t border-slate-200">
                <p class="text-slate-600">
                  Already have an account?
                  <router-link 
                    to="/login" 
                    class="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 ml-1"
                  >
                    Sign in
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import API from '../utilities/api'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const router = useRouter()
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const error = ref('')
const loading = ref(false)
const success = ref(false)

const handleSignup = async () => {
  loading.value = true
  error.value = ''

  const payload = {
    name: `${form.value.firstName} ${form.value.lastName}`,
    email: form.value.email,
    password: form.value.password,
    role: 'patient',
  }

  try {
    const res = await API.post('/users', payload)
    if (res.status === 200 || res.status === 201) {
      success.value = true
      setTimeout(() => {
        router.push('/doctorList')
      }, 2500)
    } else {
      error.value = 'Failed to create account. Please try again.'
    }
  } catch (err) {
    console.error(err)
    error.value = 'Registration failed. Please check your information and try again.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.font-system {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>