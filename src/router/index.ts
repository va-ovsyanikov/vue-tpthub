import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../components/v-product.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
