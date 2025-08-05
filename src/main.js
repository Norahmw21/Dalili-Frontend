// src/main.js
import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import App from './App.vue';
import './style.css'
import axios from 'axios';

// Configure Axios globally
axios.defaults.baseURL = 'http://localhost:8080'; // Your backend URL
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';


import Aura from '@primeuix/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});


app.config.globalProperties.$axios = axios;

app.mount('#app');
