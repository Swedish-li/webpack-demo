<template>
  <div id="app">
    <div class="header">
      <h1>{{ msg }}</h1>
      <hr>
      <ul class="nav navbar-nav">
        <li><router-link to="/">简介</router-link></li>
        <li><router-link to="/example1">示例1</router-link></li>
      </ul>
      <hr>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

<style>
.header{
  text-align: center;
}
h1{
  color: blue;
}
ul{
  list-style: none;
}
</style>
