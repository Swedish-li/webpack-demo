import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: resolve => require(['../components/Home.vue'], resolve)
  }, {
    path: '/example1',
    name: 'example1',
    component: resolve => require(['../components/Example1.vue'], resolve)
  }
  ]
})
