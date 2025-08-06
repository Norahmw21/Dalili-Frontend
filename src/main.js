import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import './style.css'
import router from './router/Index'
import Aura from '@primeuix/themes/aura'

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
