
<template>
    <div>
      <el-switch
        v-model="value"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        size="large"
        active-text="显示答案"
        inactive-text="隐藏答案"
        @change="change()"
      />
  
      <h1>我是问题一</h1>
      <div v-show="showButton">我是答案一</div>
      <h1>我是问题二</h1>
      <div v-show="showButton">我是答案二</div>
      <h1>我是问题三</h1>
      <div v-show="showButton">我是答案三</div>
    </div>
  </template>
  
  
  <script>
  import { ElButton, ElSwitch } from "element-plus";  // 按需导入
  import "element-plus/dist/index.css";
  
  export default {
    components: { ElButton, ElSwitch },
    data() {
      return {
        value: false,
        showButton: false, //不显示
      };
    },
  
    methods: {
      change() {
        // console.log('showButton修改前',this.showButton)
        // console.log('value修改前',this.value)
        this.showButton = !this.showButton;
  
        // console.log('showButton修改后',this.showButton)
        // console.log('value修改后',this.value)
      },
    },
  
    mounted() {},
    created() {},
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
   
  
  
  
  
     
  
     