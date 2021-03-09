import { createRouter, createWebHashHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import routesMap from './map'

const routerHistory = createWebHashHistory()
const routes: Array<RouteRecordRaw> = routesMap

const router = createRouter({
  history: routerHistory,
  /** eslint-disable-next-line */
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router
