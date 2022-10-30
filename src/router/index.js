import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import SignIn from '@/components/SignIn.vue'
=======
import SignIn from '@/view/RegisterLogIn.vue'
>>>>>>> e4ee66fcbfcba5c62ec2056612fb3889802d9f3f
import HomePage from '@/view/HomePage.vue'
import AboutUs from '@/components/AboutUs.vue'
import LatestPhotograph from '@/view/LatestPhotograph.vue'



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