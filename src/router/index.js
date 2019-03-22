import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import projects from '@/components/projects'
import about from '@/components/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
// to add:
// services page where i talk devops, cybersec, webdev, retropie
// blog about what im working on
