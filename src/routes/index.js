// router.js
import { createRouter, createWebHistory } from 'vue-router'

import App from '../../src/App.vue'
import AuthorPage from '../pages/book-author/AuthorPage.vue'
import UserProfile from '../pages/profile/UserProfile.vue'

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '/author', component: AuthorPage },
      { path: '/profile', component: UserProfile }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
