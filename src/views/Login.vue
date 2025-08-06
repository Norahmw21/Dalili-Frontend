<template>
  <div class="min-h-screen flex">
        <div class="container mx-auto ml-8 mr-8 my-6 px-4 lg:px-8 rounded-3xl overflow-hidden shadow-xl bg-gray-50 flex flex-col lg:flex-row min-h-[85vh]">

    <!-- Left Side - Dark Section with Content -->
      <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden rounded-3xl">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-32 right-16 w-24 h-24 bg-emerald-500 rounded-full blur-2xl"></div>
      </div>
      
      <div class="relative z-10 flex flex-col justify-center px-12 xl:px-16">
        <!-- Logo -->
        <div class="mb-16">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
        </div>

        <!-- Main Content -->
        <div class="mb-12">
          <h1 class="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Welcome Back to<br>
            Your Health Journey
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed">
            Access your account to continue finding trusted healthcare 
            providers and managing your medical reviews.
          </p>
        </div>

        <!-- Feature Highlights -->
        <div class="space-y-6">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Verified Reviews</h3>
              <p class="text-gray-400">Read authentic patient experiences</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Smart Search</h3>
              <p class="text-gray-400">Find doctors by specialty and location</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-lg">Secure Platform</h3>
              <p class="text-gray-400">Your data is protected and private</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side - Login Form --> 
      <div class="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 px-4 py-10 rounded-3xl">
        
      <div class="w-full max-w-md">
        <!-- Mobile Logo (visible only on mobile) -->
        <div class="lg:hidden text-center mb-8">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
        </div>

        <!-- Back Button (Mobile) -->
        <div class="lg:hidden mb-6">
          <router-link 
            to="/" 
            class="inline-flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200 group"
          >
            <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back
          </router-link>
        </div>

        <!-- Header -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-2">Hello!</h2>
          
          <p class="text-gray-600">Please enter your Email and Password below <br class="hidden sm:block" />to have access to your account</p>
        </div>
       <!-- User Type Toggle -->
<div class="flex mb-8 bg-gray-100 rounded-xl p-1 gap-2">
  <!-- Patient Button -->
  <button type="button"
    class="flex-1 py-3 px-4 rounded-lg font-medium text-xs transition-all duration-200 bg-gray-900 text-white shadow-sm">
    <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
    Patient
  </button>

  <!-- Continue as Guest Button -->
  <button
    type="button"
    @click="router.push('/')"
    class="flex-1 py-3 px-4 rounded-lg font-medium text-xs transition-all duration-200 bg-white text-gray-700 hover:bg-gray-200 border border-gray-300 shadow-sm"
  >
    <svg class="w-4 h-4 inline mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M15 19l-7-7 7-7" />
    </svg>
    Continue as Guest
  </button>
</div>

        <!-- Error Message -->
        <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            {{ error }}
          </div>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email -->
          <div class="space-y-2">
            <label class="block text-sm font-semibold text-gray-700">
              Email
              <span class="text-red-500 ml-1">*</span>
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400 group-focus-within:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
              </div>
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl bg-white focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
          </div>

          <!-- Password -->
          <div class="space-y-2">
            <label class="block text-sm font-semibold text-gray-700">
              Password
              <span class="text-red-500 ml-1">*</span>
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400 group-focus-within:text-gray-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <input
                type="password"
                v-model="password"
                placeholder="Enter your password"
                class="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl bg-white focus:border-gray-400 focus:ring-4 focus:ring-gray-100 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500"
                required
              />
            </div>
          </div>

          <!-- Forgot Password -->
          <div class="text-right">
            <button type="button" class="text-sm text-gray-500 hover:text-gray-700 hover:underline transition-colors duration-200">
              Forget your password?
            </button>
          </div>

          <!-- Sign up link -->
          <div class="text-center py-2">
            <p class="text-sm text-gray-600">
              Don't have an Account?
              <router-link
                to="/register"
                class="text-gray-900 font-semibold hover:underline transition-colors duration-200 ml-1"
              >
                Sign up
              </router-link>
            </p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl shadow-sm hover:shadow-md disabled:shadow-none transform hover:-translate-y-0.5 disabled:translate-y-0 transition-all duration-200 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
            <span v-else class="flex items-center justify-center">
              Login
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </button>
        </form>

        <!-- Terms -->
        <div class="mt-8 pt-6 border-t border-gray-100">
          <p class="text-xs text-gray-500 text-center leading-relaxed">
            By logging in you agree to our
            <button class="text-gray-700 hover:underline font-medium transition-colors duration-200 mx-1">
              Terms of Service
            </button>
            and acknowledge our
            <button class="text-gray-700 hover:underline font-medium transition-colors duration-200 mx-1">
              Privacy Policy
            </button>
            applies to you.
          </p>
        </div>
      </div>
    </div>
        </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const loginSuccess = ref(false)
const router = useRouter()

watch(loginSuccess, (value) => {
  if (value) router.push('/')
})

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
      localStorage.setItem('user', JSON.stringify(data))
      loginSuccess.value = true
    }
  } catch (err) {
    error.value = err.message || 'Login failed. Please check your credentials.'
  } finally {
    loading.value = false
  }
}
</script>

