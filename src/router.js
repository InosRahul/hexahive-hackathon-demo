import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUp from "@/components/faculty/SignUp"
import Login from '@/components/faculty/Login'

Vue.use(Router)

export default new Router({
  routes:[
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
    
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }

  ]
})