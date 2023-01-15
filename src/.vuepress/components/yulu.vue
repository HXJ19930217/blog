<template>
    <div>
      <h2>{{ apidata }}</h2>
      <div></div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        apidata: "",
      };
    },
    watch: {},
    computed: {},
  
    methods: {
      yulu() {
        https: axios
          .get("https://api.oick.cn/yulu/api.php")
          .then((res) => {
            // 成功的回调
            this.apidata=res.data
          })
          .catch((err) => {
            // 失败的回调
            alert("今天休息！");
          });
      },
    },
  
    created() {
      this.yulu();
    },
  };
  </script>
  <style scoped>
  </style>
    