import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// VueFire
import { VueFire, VueFireAuth } from 'vuefire'

import { firebaseApp } from './firebase.js'

const vuetify = createVuetify({
  components,
  directives,
})

App.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})
createApp(App).use(vuetify).mount('#app')
