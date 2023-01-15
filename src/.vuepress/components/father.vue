<template>
	<div class="fa">
	  <div style="margin: 10px;">我是父组件</div>
	  <Son :fatherMessage="fatherMessage"></Son>
	</div>
  </template>
  
  <script setup lang="ts">
  import Son from './Son.vue'
  import {ref} from "vue";
  
  const fatherMessage = ref<String>("我是父组件传过来的值")
  
  </script>
  
  <style scoped>
  .fa{
	border: 3px solid cornflowerblue;
	width: 400px;
	text-align: center;
  }
  </style>
  
  