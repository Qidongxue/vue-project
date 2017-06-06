import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import mall_listView from '@/components/mall_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/mall_list',
      component: mall_listView
    }
  ]
})
