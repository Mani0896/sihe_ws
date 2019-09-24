import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contactus',
      name: 'Contactus',
      component: () => import('./components/Contactus.vue')
    },
    {
      path: '/package',
      name: 'Package',
      component: () => import('./components/Package.vue')
    },
    {
      path: '/Package_vijayanagar',
      name: 'Vijayanagar Experience',
      component: () => import('./components/Package_vijayanagar.vue')
    },
    {
      path: '/Package_Deccan',
      name: 'Deccan Dilbaug',
      component: () => import('./components/Package_Deccan.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/About.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('./components/payment.vue')
    }
  ]
})
