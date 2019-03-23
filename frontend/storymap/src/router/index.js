import Vue from 'vue'
import Router from 'vue-router'
import showmap from '../components/showmap.vue'
import maplist from '../components/maplist.vue'
import login from '../components/login.vue'
// import {dash} from 'views/'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/components/showmap',
    name: 'showmap',
    component: showmap
  },
  {
    path: '/components/maplist',
    name: 'maplist',
    component: maplist
  }

]
const router = new Router({
  routes: routes
})
export default router
