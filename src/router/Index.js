import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
 import ReviewsPage from '../views/ReviewForm.vue'

import Home from '../views/Home.vue' // or any component you want at /

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/reviews', component: ReviewsPage },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router