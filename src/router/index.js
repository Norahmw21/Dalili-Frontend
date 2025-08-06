import { createRouter, createWebHistory } from 'vue-router'

// **Views (pages)**
import Home from '../views/Landing02.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ReviewsPage from '../views/ReviewForm.vue'

// **Components**
import DoctorsList from '../components/DoctorsList.vue'
import DoctorComparison from '../components/DoctorComparison.vue'
import DoctorProfile from '../components/DoctorProfile.vue'

const routes = [
  // General/Auth pages
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/reviews', name: 'ReviewsPage', component: ReviewsPage },

  // Doctor-related pages
  { path: '/doctorList', name: 'DoctorList', component: DoctorsList },
  { path: '/compare', name: 'DoctorComparison', component: DoctorComparison },
  { path: '/doctor/:id', name: 'DoctorProfile', component: DoctorProfile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
