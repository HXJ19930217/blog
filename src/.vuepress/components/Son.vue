<template>
    <div style="margin: 10px;border: 2px solid red">
      我是子组件
      <div style="margin: 5px;border: 2px solid gold">
        父组件传值接收区：{{fatherMessage}}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    fatherMessage?: string,
  }
  defineProps<Props>()
  
  </script>
  