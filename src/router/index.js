import { createRouter, createWebHistory } from 'vue-router';
import DoctorsList from '../components/DoctorsList.vue';
import DoctorComparison from '../components/DoctorComparison.vue';
import DoctorProfile from '../components/DoctorProfile.vue';

const routes = [
    {
        path: '/doctorList',
        name: 'DoctorList',
        component: DoctorsList,
    },
    {
        path: '/compare',
        name: 'DoctorComparison',
        component: DoctorComparison
    },
    {
        path: '/doctor/:id',
        name: 'DoctorProfile',
        component: DoctorProfile
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;