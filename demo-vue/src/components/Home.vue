<template>
  <div>
    <h2>Vue示例</h2>

    <div>
      <img
        :src="avatar"
        alt="リトルウィッチアカデミア"
        class="avatar">
    </div>
    <ol>
      <li>计算属性</li>
    </ol>

  </div>
</template>

<script>
import avatar from '../assets/avatar.png'

export default {
  name: 'Home',
  data () {
    return {
      avatar: avatar
    }
  }
}
</script>

<style>
  .avatar{
    width: 213.5px;
    height: 210.5px;
    border-radius: 50%
  }
</style>
