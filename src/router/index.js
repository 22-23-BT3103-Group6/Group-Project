import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/components/SignIn.vue'
import HomePage from '@/views/HomePage.vue'
import AboutUs from '@/components/AboutUs.vue'
import LatestPhotograph from '@/views/LatestPhotograph.vue'



const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },

  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  }
  ,
  {
    path: '/latest',
    name: 'LatestPhotograph',
    component: LatestPhotograph
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router