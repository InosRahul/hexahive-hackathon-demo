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
import home from '@/views/home'
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