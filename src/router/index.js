import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Areas from '../views/Areas.vue'
import Requests from '../views/Requests.vue'
import Schedule from '../views/Schedule.vue'
import Menu from '../views/Menu.vue'
import DList from '../views/DList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login    
  },
  {
    path: '/register',
    name: 'Register',
    component: Register    
  },
  {
    path: '/areas',
    name: 'Areas',
    component: Areas    
  },
  {
    path: '/requests',
    name: 'Requests',
    component: Requests    
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu    
  },
  {
    path: '/dlist',
    name: 'DList',
    component: DList    
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule    
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
