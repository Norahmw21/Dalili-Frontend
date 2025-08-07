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
                  Welcome Back to<br />
                  <span class="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Your Health Journey
                  </span>
                </h1>
                <p class="text-xl text-slate-300 leading-relaxed max-w-lg">
                  Access your account to continue finding trusted healthcare providers and managing your medical reviews.
                </p>
              </div>

              <!-- Features -->
              <div class="space-y-6">
                <div class="flex items-center space-x-4 text-slate-200">
                  <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">Verified Reviews</h3>
                    <p class="text-slate-400">Read authentic patient experiences</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4 text-slate-200">
                  <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">Smart Search</h3>
                    <p class="text-slate-400">Find doctors by specialty and location</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4 text-slate-200">
                  <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-lg">Secure Platform</h3>
                    <p class="text-slate-400">Your data is protected and private</p>
                  </div>
                </div>
              </div>

              <!-- Stats Section -->
              <div class="bg-white/8 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                <div class="grid grid-cols-3 gap-6">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-1">50K+</div>
                    <div class="text-slate-400 text-sm">Happy Patients</div>
                  </div>
                  <div class="text-center border-l border-r border-white/20">
                    <div class="text-3xl font-bold text-white mb-1">2.5K+</div>
                    <div class="text-slate-400 text-sm">Doctors Listed</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-white mb-1">98%</div>
                    <div class="text-slate-400 text-sm">Satisfaction Rate</div>
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
                <h1 class="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
                <p class="text-slate-600">Sign in to your HealthFind account</p>
              </div>

              <!-- Back Button (Mobile) -->
              <div class="lg:hidden">
                <router-link 
                  to="/" 
                  class="inline-flex items-center text-slate-400 hover:text-slate-600 transition-colors duration-200 group"
                >
                  <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  <span class="font-medium">Back</span>
                </router-link>
              </div>

              <!-- Form Header -->
              <div class="text-center space-y-3">
                <h2 class="text-3xl font-bold text-slate-900 tracking-tight">Hello Again!</h2>
                <p class="text-slate-600 text-lg">Please enter your credentials to access your account</p>
              </div>

              <!-- User Type Toggle -->
              <div class="bg-slate-100 rounded-2xl p-1.5 flex space-x-1">
                <button type="button" 
                  class="flex-1 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-200 bg-slate-900 text-white shadow-md">
                  <svg class="w-5 h-5 inline mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Patient Login
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
                  <svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  <p class="text-red-700 font-medium">{{ error }}</p>
                </div>
              </div>

              <!-- Login Form -->
              <form @submit.prevent="handleLogin" class="space-y-6">
                <div class="space-y-2">
                  <label class="text-sm font-semibold text-slate-700">Email Address</label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-slate-400 group-focus-within:text-slate-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      v-model="email"
                      placeholder="Enter your email address"
                      required
                      class="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-semibold text-slate-700">Password</label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-slate-400 group-focus-within:text-slate-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <input
                      type="password"
                      v-model="password"
                      placeholder="Enter your password"
                      required
                      class="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-400"
                    />
                  </div>
                </div>

                <!-- Forgot Password -->
                <div class="flex justify-end">
                  <button type="button" class="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200">
                    Forgot your password?
                  </button>
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
                    <span>Signing In...</span>
                  </span>
                  <span v-else class="flex items-center justify-center space-x-2 text-lg">
                    <span>Sign In</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </button>
              </form>

              <!-- Sign up Link -->
              <div class="text-center pt-6 border-t border-slate-200">
                <p class="text-slate-600">
                  Don't have an account?
                  <router-link 
                    to="/register" 
                    class="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 ml-1"
                  >
                    Sign up for free
                  </router-link>
                </p>
              </div>

              <!-- Terms -->
              <div class="text-center">
                <p class="text-xs text-slate-500 leading-relaxed max-w-md mx-auto">
                  By signing in you agree to our
                  <button class="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 mx-1">
                    Terms of Service
                  </button>
                  and acknowledge our
                  <button class="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 mx-1">
                    Privacy Policy
                  </button>
                  applies to you.
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
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const router = useRouter()

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  if (!email.value || !password.value) {
    error.value = 'Please enter both email and password'
    loading.value = false
    return
  }

  try {
    const response = await fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || 'Login failed')

    if (data) {
      // ✅ Save to localStorage
      if (typeof Storage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('token', data.token)
      }

      // ✅ Redirect based on role
      if (data.role === 'admin') {
        router.push('/doctors')
      } else {
        router.push('/doctorlist')
      }
    }
  } catch (err) {
    error.value = err.message || 'Login failed. Please check your credentials and try again.'
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