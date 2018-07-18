<template>
  <div id="app">
    <div class="header">
      <h1>{{ msg }}</h1>
      <hr>
      <ul class="nav navbar-nav">
        <li><router-link to="/">目录</router-link></li>
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
      msg: 'Welcome to Vue!'
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
