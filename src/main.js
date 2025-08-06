import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import './style.css'
import router from './router/Index'
import Aura from '@primeuix/themes/aura'
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

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faEnvelope, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons'

// Add the icons to the library once
library.add(faUser, faEnvelope, faLock, faArrowRight)

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = axios;

app.mount('#app');
