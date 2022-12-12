import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../App.vue'
import HomeView from '../views/Homeviw.vue'
import ListinoDucatiView from "../views/Listino-Ducati.vue";
import MarcheView from "../views/Marche.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'home',
          component: MarcheView,
        },
        {
          path: '/listino-Ducati',
          name: 'listino-Ducati',
          component: ListinoDucatiView,
        },

      ],
      
    },
  ]
})

export default router
