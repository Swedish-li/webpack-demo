import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router, // es6写法
  render: h => h(App) // h为createElement的别名
})
