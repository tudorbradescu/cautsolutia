import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/oras/:slug', name: 'city', component: () => import('./views/CityView.vue') },
    { path: '/categorie/:slug', name: 'category', component: () => import('./views/CategoryView.vue') },
    { path: '/firma/:slug', name: 'business', component: () => import('./views/BusinessView.vue') },
    { path: '/adauga-firma', name: 'add-business', component: () => import('./views/AddBusinessView.vue') },
    { path: '/despre', name: 'about', component: () => import('./views/AboutView.vue') },
    { path: '/contact', name: 'contact', component: () => import('./views/ContactView.vue') },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 70 }
    }
    return { top: 0 }
  }
})

export default router
