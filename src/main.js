// src/main.js
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import './style.css'
import Aura from '@primeuix/themes/aura';
// import router from './router';


const app = createApp(App);
// app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});

app.mount('#app');
