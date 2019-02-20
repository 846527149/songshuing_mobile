import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import about from '@/view/about'
import news from '@/view/news'
import goods from '@/view/goods'
import contact from '@/view/contact'

Vue.use(Router)

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      meta: {
        title: '精品松树'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        title: '新闻动态'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
      meta: {
        title: '联系我们'
      }
    }
  ]
})
