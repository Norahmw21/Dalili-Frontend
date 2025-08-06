<template>
  <div class="min-h-screen flex items-stretch bg-gray-100 font-sans text-sm">
    <!-- Main Container for padding -->
    <div class="container mx-auto ml-8 mr-8 my-6 px-4 lg:px-8 rounded-3xl overflow-hidden shadow-xl bg-gray-50 flex flex-col lg:flex-row min-h-[85vh]">
      
      <!-- Left Side -->
      <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden rounded-3xl">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div class="absolute bottom-32 right-16 w-24 h-24 bg-emerald-500 rounded-full blur-2xl"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center px-12 xl:px-16 py-10">
          <!-- Logo -->
          <div class="mb-16">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          <!-- Text Content -->
          <div class="mb-12">
            <h1 class="text-3xl xl:text-4xl font-bold mb-4 leading-tight">
              Find the Best<br />
              Healthcare Providers
            </h1>
            <p class="text-base text-gray-300 leading-relaxed">
              Connect with trusted doctors and read authentic reviews from real patients to make informed healthcare decisions.
            </p>
          </div>

          <!-- Testimonial -->
          <div class="space-y-8">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p class="mb-4 leading-relaxed">
                "This platform helped me find an amazing cardiologist. The reviews were detailed and honest, making my decision so much easier. Highly recommend!"
              </p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div class="ml-4">
                  <div class="font-semibold">Sarah Johnson</div>
                  <div class="text-gray-400 text-xs">Patient</div>
                </div>
              </div>
            </div>

            <!-- Pagination Dots -->
            <div class="flex space-x-2">
              <div class="w-2 h-2 bg-white rounded-full"></div>
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 px-4 py-10 rounded-3xl">
        <div class="w-full max-w-md">
          <!-- Mobile Logo -->
          <div class="lg:hidden text-center mb-8">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          <!-- Header -->
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Create an account</h2>
            <p class="text-gray-600">Join our community of patients and healthcare providers</p>
          </div>

          <!-- User Type Toggle -->
          <div class="flex mb-8 bg-gray-100 rounded-xl p-1">
            <button type="button"
              class="flex-1 py-3 px-4 rounded-lg font-medium text-xs transition-all duration-200 bg-gray-900 text-white shadow-sm">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Patient
            </button>
            <!-- <button type="button"
              class="flex-1 py-3 px-4 rounded-lg font-medium text-xs transition-all duration-200 text-gray-600 hover:text-gray-900 hover:bg-white">
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Doctor
            </button> -->
          </div>

          <!-- Error (conditionally rendered) -->
          <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
            {{ error }}
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSignup" class="space-y-5">
            <div class="grid grid-cols-2 gap-4">
              <input name="firstName" v-model="form.firstName" placeholder="First Name"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500" required />
              <input name="lastName" v-model="form.lastName" placeholder="Last Name"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500" required />
            </div>
            <input type="email" name="email" v-model="form.email" placeholder="E-mail"
              class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500" required />
            <div class="relative">
              <input type="password" name="password" v-model="form.password" placeholder="Password"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 pr-12"
                required minlength="8" />
              <button type="button"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>

            <!-- Privacy Policy -->
            <div class="flex items-start space-x-3">
              <input type="checkbox" class="mt-1 w-4 h-4 text-gray-900 border-gray-300 rounded" required />
              <label class="text-gray-600 leading-relaxed text-xs">
                I accept the <a href="#" class="text-gray-900 font-medium hover:underline">Privacy Policy</a>
              </label>
            </div>

            <!-- Submit -->
            <button type="submit" :disabled="loading"
              class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 rounded-xl shadow-sm hover:shadow-md transform transition-all duration-200">
              <span v-if="loading">Creating Account...</span>
              <span v-else>Create an Account</span>
            </button>
          </form>

          <!-- Login Link -->
          <div class="text-center mt-6 text-xs text-gray-600">
            Already have an account?
            <router-link to="/login" class="text-gray-900 font-semibold hover:underline ml-1">
              Log in
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import API from '../utilities/api'

const router = useRouter()
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
})

const error = ref('')
const loading = ref(false)

const handleSignup = async () => {
  loading.value = true
  error.value = ''  // reset error

  const payload = {
    name: `${form.value.firstName} ${form.value.lastName}`,   
    email: form.value.email,
    password: form.value.password,
    role: 'patient',
  }

  try {
    const res = await API.post('/users', payload)

    if (res.status === 200 || res.status === 201) {
      alert('Account created successfully!')
      router.push('/')
    } else {
      error.value = 'Failed to register. Please try again.'
    }
  } catch (err) {
    console.error(err)
    error.value = 'Registration failed. Please check your inputs or try again later.'
  } finally {
    loading.value = false
  }
}
</script>
