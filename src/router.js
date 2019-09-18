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
      component: () => import(/* webpackChunkName: "about" */ './components/Package.vue')
    },
    {
      path: '/Package_vijayanagar',
      name: 'Vijayanagar Experience',
      component: () => import(/* webpackChunkName: "about" */ './components/Package_vijayanagar.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/About.vue')
    }
  ]
})
