import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Example1 from '../components/Example1.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/example1',
    name: 'example1',
    component: Example1
  }
  ]
})
