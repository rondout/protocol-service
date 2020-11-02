import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import "@/assets/css/main.css"
import '@/assets/font/font.css' // 引入自定义全局字体样式表
import '@/assets/icon/iconfont.css'
import "@/service/axios"
import nav from "@/assets/json/nav.js"
import i18n from "@/i18n/index"
import moment from "moment"
import less from "less"

// window.less = 'less'

Vue.config.productionTip = false

Vue.use(Antd)

Vue.prototype.$nav = nav
Vue.prototype.$moment = moment

export default new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
