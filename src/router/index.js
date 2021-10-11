import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Noticias',
    component: Home
  },
  {
    path: '/platos_carta',
    name: 'Platos_carta',
    component: () => import(/* webpackChunkName: "about" */ '../views/Platos_carta.vue')
  },
  {
    path: '/platos_dia',
    name: 'Platos_dia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Platos_dia.vue')
  },
  {
    path: '/bebidas',
    name: 'Bebidas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bebidas.vue')
  },
  {
    path: '/reservaciones',
    name: 'Reservaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reservaciones.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  }
  ,
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedidos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
