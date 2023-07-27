import SignUpLogin from '@components/auth/SignUpLogin.vue'
import HomePage from '@components/HomePage.vue'

const routes = [
  {path: '/', component: HomePage},
  { path: '/login', component: SignUpLogin },
]

export default routes
