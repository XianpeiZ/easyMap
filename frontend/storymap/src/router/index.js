import Vue from 'vue'
import Router from 'vue-router'
import helloworld from '@/components/helloworld'
// import NewContact from '@/components/NewContact'
import dashBoard from '@/views/dash/dashBoard'
import test from '@/components/test'
import maplist from '@/components/maplist'
// import {dash} from 'views/'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      hidden: true,
      // redirect (to) {
      //   return '/helloworld'
      // }
      component: helloworld
    },
    {
      path: '/dash/dashBoard',
      name: '看板',
      hidden: true,
      component: dashBoard
    },
    {
      path: '/components/test',
      name: 'test',
      hidden: true,
      component: test
    },
    {
      path: '/components/maplist',
      name: 'maplist',
      hidden: true,
      component: maplist
    }
  ]
})
