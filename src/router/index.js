import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/landingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/joao.simoes/', name: 'HomeView', component: HomeView,
    },

  ],
})

export default router
