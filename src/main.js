import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as icons from 'vuetify/iconsets/mdi'
import { createRouter, createWebHistory } from 'vue-router'

import { firebaseApp } from './firebase.js'
import routes from './routes'

const vuetify = createVuetify({
  components,
  directives,
  icons
})

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes
})

const app = createApp(App)
app.use(router)

// Now the app has started!
console.log(firebaseApp)

app.use(vuetify)
app.mount('#app')
