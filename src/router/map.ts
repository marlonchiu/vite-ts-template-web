const routesMap = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
    name: 'Home'
  }
]

export default routesMap
