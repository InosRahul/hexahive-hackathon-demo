import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import SignUp from "@/components/faculty/SignUp"
import Login from '@/components/faculty/Login'
import AddData from '@/components/AddData'
import ViewData from '@/components/ViewData'
import ViewChart from '@/components/ViewChart'

Vue.use(Router)

export default new Router({
  routes:[
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
    
   
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
      path: '/data',
      name: 'AddData',
      component: AddData
    },
    {
      path: '/viewdata',
      name: 'ViewData',
      component: ViewData
    },
    {
      path: '/chart',
      name: 'ViewChart',
      component: ViewChart
    }

  ]
})