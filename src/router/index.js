import Vue from 'vue'
import Router from 'vue-router'
import com_menu from '@/components/com_menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'com_menu',
      component: com_menu
    }
  ]
})
