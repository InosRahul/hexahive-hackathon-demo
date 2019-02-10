import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import SignUpTeacher from "@/components/faculty/SignUpTeacher"
import LoginTeacher from '@/components/faculty/LoginTeacher'
import LoginStudent from '@/components/faculty/LoginStudent'
import AddData from '@/components/AddData'
import ViewData from '@/components/ViewData'
import ViewChart from '@/components/ViewChart'
import SignUpStudent from '@/components/SignUpStudent'
import TeacherHome from '@/components/TeacherHome'
import StudentHome from '@/components/StudentHome'
import dotnetavg from '@/components/subjects/dotnetavg'
import ajavg from '@/components/subjects/ajavg'
import wtavg from '@/components/subjects/wtavg'
import home from '@/views/home'
import aj1 from '@/components/subjects/aj/aj1'
import aj2 from '@/components/subjects/aj/aj2'
import aj3 from '@/components/subjects/aj/aj3'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes:[
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    
    {
      path: '/home',
      name: 'home',
      component: home
    },
      {
        path: '/signupteacher',
        name: 'SignUpTeacher',
        component: SignUpTeacher
      },
      {
        path: '/dotnetavg',
        name: 'dotnetavg',
        component: dotnetavg
      },
      {
        path: '/ajavg',
        name: 'ajavg',
        component: ajavg
      },
      {
        path: '/wtavg',
        name: 'wtavg',
        component: wtavg
      },
      {
        path: '/aj1',
        name: 'aj1',
        component: aj1
      },
      {
        path: '/aj2',
        name: 'aj2',
        component: aj2
      },
      {
        path: '/aj3',
        name: 'aj3',
        component: aj3
      },
      {
        path: '/signupstudent',
        name: 'SignUpStudent',
        component: SignUpStudent

      },
      {
        path: '/loginstudent',
        name: 'LoginStudent',
        component: LoginStudent
      },
      {
        path: '/loginteacher',
        name: 'LoginTeacher',
        component: LoginTeacher
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
    },
    {
      path: '/teacherhome',
      name: 'TeacherHome',
      component: TeacherHome,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/studenthome',
      name: 'StudentHome',
      component: StudentHome,
      meta:{
        requiresAuth: true
      }
    }

  ]
});
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('home');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;