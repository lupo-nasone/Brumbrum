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
          name: 'marche',
          component: MarcheView,
        },
        {
          path: '/listino-Ducati',
          name: 'listino-Ducati',
          component: ListinoDucatiView,
        },
        {
          path: '/listino-Yamaha',
          name: 'listino-Yamaha',
          component: MarcheView, // Temporaneo - rimanda alla home
        },
        {
          path: '/listino-Kawasaki',
          name: 'listino-Kawasaki',
          component: MarcheView, // Temporaneo - rimanda alla home
        },
        {
          path: '/listino-Keeway',
          name: 'listino-Keeway',
          component: MarcheView, // Temporaneo - rimanda alla home
        },
        {
          path: '/listino-Wottan',
          name: 'listino-Wottan',
          component: MarcheView, // Temporaneo - rimanda alla home
        },
      ],
      
    },
  ]
})

export default router
