import { ElButton, ElSelect, ElTable, ElTableColumn } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const components = [ElButton, ElSelect, ElTable, ElTableColumn]

export default (app) => {
  app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
  components.forEach((component) => {
    // app.component(component.name, component)
    app.use(component)
  })
}
