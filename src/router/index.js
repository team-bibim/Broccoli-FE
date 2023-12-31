import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WriteView from '../views/routine-write.vue'
import ShareView from '../views/routine-share.vue'
import MainView from '../views/main.vue'
import MyRoutineView from '../views/my-routine.vue'
import SettingsView from '../views/settings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/write',
    name: 'write',
    component: WriteView
  },
  {
    path: '/share',
    name: 'share',
    component: ShareView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/routine',
    name: 'routine',
    component: MyRoutineView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
