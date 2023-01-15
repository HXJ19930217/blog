<template>
    <div>
      <h2>正文：{{ hitokoto }}</h2>
      <h2>作者：{{ from_who }}</h2>
      <h2>出处：{{  from }}</h2>
      <div></div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        from:'',  //出处
        from_who:'',  //作者
        hitokoto:'',  //正文
      };
    },
   
    watch: {},
    computed: {},
    methods: {
      yiyan() {
        https: axios
          .get("https://v1.hitokoto.cn")
          .then((res) => {
            // 成功的回调
            
            // console.log(res.data)
            this.from=res.data.from
            this.from_who=res.data.from_who
            this.hitokoto=res.data.hitokoto
          })
          .catch((err) => {
            // 失败的回调
            alert("今天休息！");
          });
      },
    },
  
    created() {
      this.yiyan();
    },
    mounted(){
      
    }
  };
  </script>
  <style scoped>
  </style>
    