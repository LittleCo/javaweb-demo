import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./views/Home.vue')
const Login = () => import('./views/Login.vue')
const Task = () => import('./views/Task.vue')
const Exam = () => import('./views/Exam.vue')


const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
    },
  {
    path: '/task',
    name: 'Task',
    component: Task
    },
    {
      path: '/exam',
      name: 'Exam',
      component: Exam
  }
]
})

export default router
