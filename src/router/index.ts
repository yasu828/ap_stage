import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contents',
    name: 'Contents',
    component: () => import('../views/TargetContents.vue')
  },
  {
    path: '/inter',
    name: 'Inter',
    component: () => import('../views/intersectionHome.vue')
  },
  {
    path: '/intersection-right',
    name: 'intersectionRight',
    component: () => import('../components/intersection/intersectionRight.vue')
  },
  {
    path: '/intersection-left',
    name: 'intersectionLeft',
    component: () => import('../components/intersection/intersectionLeft.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/first',
    name: 'first',
    component: () => import('../components/intersection/first.vue'),
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
