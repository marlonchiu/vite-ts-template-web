const routesMap = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    name: 'Home'
  }
]

export default routesMap
