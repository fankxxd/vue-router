import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/mainPage'
import Info from '@/components/info'
import Contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
  {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },

    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
    
  ]
})
