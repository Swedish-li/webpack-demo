<template>
  <div class="content">
    <table>
      <tr>
        <td>First Name:</td>
        <td><input
          v-model="firstName"
          type="text"></td>
      </tr>
      <tr>
        <td>Last Name:</td>
        <td><input
          v-model="lastName"
          type="text"></td>
      </tr>

    </table>
    <h3>Full Name:{{ fullName }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Example1',
  data () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style>
.content {
  border: 1px solid blue;
}
</style>
