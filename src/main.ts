import { createApp } from 'vue'
import router from './router'
import store from './store'
import elementPlus from './libs/element'
import App from './App.vue'
import './styles/index.scss'

const app = createApp(App)
if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true
}

elementPlus(app)
app.use(router)
app.use(store)
app.mount('#app')
