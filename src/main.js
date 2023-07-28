import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as icons from 'vuetify/iconsets/mdi'

import { firebaseApp } from './firebase.js'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons
})

const app = createApp(App)
app.use(router)
app.use(vuetify)

// Now the app has started!
console.log('firebaseApp: ', firebaseApp)

app.mount('#app')
