import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/talk',
    name: 'Talk',
    component: () => import('../views/bababa.vue')
  },
  {
    path: '/contents',
    name: 'Contents',
    component: () => import('../views/TargetContents.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/first',
    name: 'first',
    component: () => import('../views/first.vue'),
    children: [
      {
        // /user/:id/profile がマッチした時に
        // UserProfile は User の <router-view> 内部で描画されます
        path: 'first_child',
        component: () => import('../components/ex/first_child.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
