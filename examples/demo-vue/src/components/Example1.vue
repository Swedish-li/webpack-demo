<template>
	<div class="content">
		<table>
			<tr>
				<td>First Name:</td>
				<td><input type="text" v-model="firstName"></td>
			</tr>
			<tr>
				<td>Last Name:</td>
				<td><input type="text" v-model="lastName"></td>
			</tr>
				
		</table>
		<h3>Full Name:{{fullName}}</h3>
	</div>
</template>

<script>
export default {
  name: 'example1',
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
	.content{
		border: 1px solid blue;
	}
</style>