import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/render',
      name: 'render',
      component:resolve => require(['@/pages/render'],resolve),
    },
    {
    	path: '/vuex',
    	component:resolve => require(['@/pages/vuex'],resolve),
    },
    {
      path: '/trans',
      component:resolve => require(['@/pages/transition'],resolve),
    },
     {
      path: '/router/:id',
      component:resolve => require(['@/pages/router'],resolve),
      children: [
          {
            path:'one',
            component:resolve => require(['@/components/Hello'],resolve),
          }
      ]
    }
  ]
})
