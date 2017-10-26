// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import iView from 'iview';
import 'element-ui/lib/theme-default/index.css'
import '@/assets/iconfont.css'
import '@/assets/font/iconfont1.css'
import 'iview/dist/styles/iview.css';
import router from './router'
import Mock from './mock'
Vue.use(iView);
Mock.init()

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
