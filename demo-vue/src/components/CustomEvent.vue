<template>
  <div>
    <h3>Customer Events -- 组件自定义事件</h3>
    <my-component
      :init-count="8"
      @my-event="showCount"/>
    <h5>Click Count: {{ clickCount }}</h5>
  </div>
</template>

<script>
import MyComponent from './MyComponent'

export default {
  name: 'CustomEvent',
  components: {
    MyComponent
  },
  data () {
    return {
      clickCount: 0
    }
  },
  methods: {
    // 不应该使用箭头函数来定义 method 函数
    showCount: function (count) {
      this.clickCount = count
    }
  }
}
</script>

<style>
</style>
