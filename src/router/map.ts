const routesMap = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    name: 'Home'
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue'),
    name: 'User'
  }
]

export default routesMap
