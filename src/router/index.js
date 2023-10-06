import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import MovieDetail from '../views/MovieDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
     path: '/',
     name: 'Home',
     component: Home 
    },
    {
      path: '/movies/:id',
      name: 'Movie Detail',
      component: MovieDetail
    },

  ]
})

export default router
