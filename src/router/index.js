import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import second from '@/components/second'
import hikes from '@/components/hikes'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/second',
      name: 'second',
      component: second
    },
    {
      path: '/hikes',
      name: 'hikes',
      component: hikes
    }
  ]
})
