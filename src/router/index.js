import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import about from '@/view/about'
import news from '@/view/news'
import goods from '@/view/goods'
import goods_detail from '@/view/goods_detail'
import contact from '@/view/contact'
import news_detail from '@/view/news_detail'

Vue.use(Router)

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
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
      path: '/goods_detail',
      name: 'goods_detail',
      component: goods_detail,
      meta: {
        title: '景松展示'
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
      path: '/news_detail',
      name: 'news_detail',
      component: news_detail,
      meta: {
        title: '新闻展示'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
      meta: {
        title: '联系我们'
      }
    },
    {
      path: '*',
      component: index,
      meta: {
        title: '景海园林'
      }
    }
  ]
})
