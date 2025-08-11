import {createRouter, createWebHistory} from 'vue-router'

//  components
import DoctorManagement from '../components/DoctorMangment.vue'
import HospitalManagement from '../components/HospitalManagement.vue'
import ReviewsMangment from '../components/ReviewsMangment.vue'
import About from '../components/About.vue'
import {getCurrentUser, isTokenExpired} from '../utilities/auth';

import AdminLayout from '../components/AdminLayout.vue'

// Views (pages)
import Home from '../views/Landing02.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ReviewsPage from '../views/ReviewForm.vue'
import ProfilePage from "../views/ProfilePage.vue"
// Components
import DoctorsList from '../components/DoctorsList.vue'
import DoctorComparison from '../components/DoctorComparison.vue'
import DoctorProfile from '../components/DoctorProfile.vue'

const routes = [
    // General/Auth pages
    {path: '/', name: 'Home', component: Home},
    {path: '/login', name: 'Login', component: Login},
    {
        path: '/profile/:userId',
        name: 'ProfilePage',
        component: ProfilePage
    },
    {path: '/register', name: 'Register', component: Register},
    {
        path: '/review/:doctorId',
        name: 'ReviewsPage',
        component: ReviewsPage
    }
    ,
    // Doctor-related pages
    {path: '/about', name: 'About', component: About},
    {path: '/doctorList', name: 'DoctorList', component: DoctorsList},
    {path: '/compare', name: 'DoctorComparison', component: DoctorComparison},
    {path: '/doctor/:id', name: 'DoctorProfile', component: DoctorProfile},
    {
        path: '/admin',
        component: AdminLayout,
        meta: {requiresAuth: true, requiresAdmin: true},
        children: [
            {
                path: 'doctors',
                name: 'Doctors',
                component: DoctorManagement
            },
            {
                path: 'hospitals',
                name: 'Hospitals',
                component: HospitalManagement
            },
            {
                path: 'reviews',
                name: 'Reviews',
                component: ReviewsMangment
            }
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const currentUser = getCurrentUser();
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

    // Check for expired token
    if (currentUser && isTokenExpired(currentUser.token)) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        return next('/login');
    }

    // Route doesn't require authentication
    if (!requiresAuth) return next();

    // No user logged in but route requires auth
    if (!currentUser) return next('/login');

    // Route requires admin but user isn't admin
    if (requiresAdmin && currentUser.user.role !== 'admin') {
        return next('/doctorlist');
    }

    // All checks passed
    next();
});
export default router
