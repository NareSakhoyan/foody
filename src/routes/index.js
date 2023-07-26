import SignUpLogin from '@components/auth/SignUpLogin.vue'
import Homepage from '@components/Homepage.vue'

const routes = [
  {path: '/', component: Homepage},
  { path: '/login', component: SignUpLogin },
]

export default routes
