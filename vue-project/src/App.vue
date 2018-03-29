<template>
  <div id="app"> 
  	<div @click='handleClick'>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
  	return {
  		message: 'hello world'
  	}
  },
  methods: {
  	handleClick() {
  		this.message = 'bye world'
  	}
  }
}
</script>

<style>
	#app{
		color: red;
	}
</style>
