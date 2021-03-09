import { createRouter, createWebHashHistory, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import routesMap from './map'

const routes: Array<RouteRecordRaw> = routesMap

const router = createRouter({
  history: createWebHashHistory(),
  /** tslint-disable-next-line */
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router
