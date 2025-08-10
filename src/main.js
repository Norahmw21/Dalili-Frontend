// src/main.js
import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import './style.css';
import router from './router/index';
import axios from 'axios';

// Font Awesome imports
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faUser, faEnvelope, faLock, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {getCurrentUser, isTokenExpired} from '../src/utilities/auth';

const currentUser = getCurrentUser();
if (currentUser && currentUser.token) {
    if (isTokenExpired(currentUser.token)) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/login';
    } else {
        axios.defaults.headers.common['Authorization'] = `Bearer ${currentUser.token}`;
    }
}


// Add icons to the library
library.add(faUser, faEnvelope, faLock, faArrowRight);

// Configure Axios globally
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';


// Create the Vue app
const app = createApp(App);

// Use PrimeVue with Aura theme
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});

// Register Font Awesome globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);

// Assign axios globally
app.config.globalProperties.$axios = axios;

// Mount the app
app.mount('#app');