import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.use(VueResource)
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
