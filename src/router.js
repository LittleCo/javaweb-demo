import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('./views/Home.vue')
const Login = () => import('./views/Login.vue')
const Task = () => import('./views/Task.vue')
const Exam = () => import('./views/Exam.vue')
const Event = () => import('./views/Event.vue')
const Notice = () => import('./views/Notice.vue')
const Document = () => import('./views/Document.vue')
const Chat = () => import('./views/Chat.vue')
const Profile = () => import('./views/Profile.vue')


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
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    }, {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/document',
      name: 'Document',
      component: Document
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
]
})

export default router
