import { createRouter, createWebHistory } from 'vue-router'
import MainPages from '@/pages/MainPages'
import CheckList from '@/pages/CheckList'

const routes = [
  {
    path: '/',
    component: MainPages
  },
	{
    path: '/CheckList',
    component: CheckList
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
