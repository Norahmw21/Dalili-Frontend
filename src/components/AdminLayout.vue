<template>
  <NavBar/>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
    <!-- Mobile menu backdrop -->
    <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-40 lg:hidden"
        @click="mobileMenuOpen = false"
    >
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <!-- Sidebar -->
    <aside
        class="fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out lg:translate-x-0"
        :class="mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
    >
      <div
          class="flex h-full flex-col bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50">
        <!-- Header -->
        <div class="flex h-16 items-center justify-between px-6 border-b border-gray-200/50 dark:border-gray-700/50">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-blue-800  rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h1 class="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Admin Panel
            </h1>
          </div>

          <!-- Mobile close button -->
          <button
              @click="mobileMenuOpen = false"
              class="lg:hidden p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-6 py-6 space-y-2">
          <router-link
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 hover:scale-[1.02]"
              :class="isActiveRoute(item.path)
              ? 'bg-blue-800 text-white shadow-lg shadow-blue-500/25' 
              : 'text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-900'"
          >
            <span class="text-lg mr-3" v-html="item.icon"></span>
            <span>{{ item.label }}</span>
            <div
                v-if="isActiveRoute(item.path)"
                class="ml-auto w-2 h-2 bg-white/80 rounded-full animate-pulse"
            ></div>
          </router-link>
        </nav>

        <!-- Footer -->
        <div class="p-6 border-t border-gray-200/50 dark:border-gray-700/50">
          <div class="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
            <div class="w-8 h-8 bg-gradient-to-br from-black to-black rounded-full flex items-center justify-center">
              <span class="text-white text-sm font-medium">A</span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 dark:text-white truncate">Admin User</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="lg:pl-72">
      <!-- Top bar -->
      <header
          class="sticky top-0 z-30 flex h-16 items-center justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 px-6">
        <!-- Mobile menu button -->
        <button
            @click="mobileMenuOpen = true"
            class="lg:hidden p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- Breadcrumb -->
        <div class="hidden lg:flex items-center space-x-2 text-sm">
          <span class="text-gray-500 dark:text-gray-400">Dashboard</span>
          <svg class="w-4 h-4 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <span class="text-gray-900 dark:text-white font-medium">{{ currentPageTitle }}</span>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-3">
          <!-- Search -->
          <div class="hidden md:block relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
            <input
                type="text"
                placeholder="Search..."
                class="w-64 pl-10 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
          </div>


        </div>
      </header>

      <!-- Page Content -->
      <main class="p-6 lg:p-8">
        <div class="max-w-7xl mx-auto">
          <div class="animate-fadeIn">
            <router-view/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {getCurrentUser} from '../utilities/auth'
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";

const route = useRoute()
const router = useRouter()
const mobileMenuOpen = ref(false)
const isDark = ref(false)

const navigationItems = [
  {
    path: '/admin/hospitals',
    label: 'Hospitals',
    icon: '🏥'
  },
  {
    path: '/admin/doctors',
    label: 'Doctors',
    icon: '👨‍⚕️'
  },
  {
    path: '/admin/reviews',
    label: 'Reviews',
    icon: '📝'
  }
]

const currentPageTitle = computed(() => {
  const currentItem = navigationItems.find(item => item.path === route.path)
  return currentItem?.label || 'Dashboard'
})

const isActiveRoute = (path) => {
  return route.path === path
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('darkMode', isDark.value.toString())
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode !== null) {
    isDark.value = savedDarkMode === 'true'
    document.documentElement.classList.toggle('dark', isDark.value)
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  const user = getCurrentUser()
  if (!user || user.user?.role !== 'admin') {
    router.push('/doctorlist')
  }
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.7);
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(75, 85, 99, 0.5);
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: rgba(75, 85, 99, 0.7);
}
</style>
