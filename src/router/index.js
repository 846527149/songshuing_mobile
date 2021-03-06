import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import about from '@/view/about'
import news from '@/view/news'
import goods from '@/view/goods'
import goodspj from '@/view/goodspj'
import goods_detail from '@/view/goods_detail'
import contact from '@/view/contact'
import news_detail from '@/view/news_detail'

Vue.use(Router)
var COMMON_TITLE="景海园林-油松_黑松_盆景_景观松+全国最大造型松基地"
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
        title: COMMON_TITLE
      }
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      meta: {
        title: '精品松树--'+COMMON_TITLE
      }
    },
    {
      path: '/goodspj',
      name: 'goodspj',
      component: goodspj,
      meta: {
        title: '精品盆景--'+COMMON_TITLE
      }
    },
    {
      path: '/goods_detail',
      name: 'goods_detail',
      component: goods_detail,
      meta: {
        title: '景松展示--'+COMMON_TITLE
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '关于我们--'+COMMON_TITLE
      }
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        title: '新闻动态--'+COMMON_TITLE
      }
    },
    {
      path: '/news_detail',
      name: 'news_detail',
      component: news_detail,
      meta: {
        title: '新闻展示--'+COMMON_TITLE
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
      meta: {
        title: '联系我们--'+COMMON_TITLE
      }
    },
    {
      path: '*',
      component: index,
      meta: {
        title: COMMON_TITLE
      }
    }
  ]
})
