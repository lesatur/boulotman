import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Requirement from '../views/Requirement.vue'
import AllServices from '../views/AllServices.vue'
import StepByStep2 from '../views/StepByStep2.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
   
  },
  {
    path: '/categories/:id',
    name: 'categories',
    component: Services,
    params: true,
    children:[
      
    ]
   
  },
  {
    path: '/services',
    name: 'services',
    component: AllServices,
   
  },

  {
    path: '/step',
    name: 'step',
    component: Requirement,
    params: true,
   
  },

  {
    path: '/service/:id',
    name: 'service',
    component: Requirement,
    params:true
   
  },
  {
    path: '/requirements',
    name: 'requirements',
    component: StepByStep2,
    params:true
   
  },
  {
    path: '/contact',
    name: 'autour',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/categories',
    name: 'categorie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "categories" */ '../views/Categorie.vue')
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '*',
    name: 'notfound',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
 mode: 'history',
  routes
})

export default router
