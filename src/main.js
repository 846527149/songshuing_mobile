// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './view/index'
import router from './router'
import { XButton } from 'vux'
import axios from 'axios'
import 'lib-flexible/flexible.js'
import '@/assets/less/base.less' // global css
Vue.config.productionTip = false
Vue.prototype.$http=axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})
