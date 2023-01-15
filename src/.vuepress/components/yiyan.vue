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
    wen() {
      https: axios
        .get("https://api.oick.cn/yiyan/api.php")
        .then((res) => {
          // 成功的回调
          this.apidata=res.data
          
        })
        .catch((err) => {
          // 失败的回调
          alert("调用失败，今天休息！");
        });
    },
  },

  created() {
    this.wen();
  },
};
</script>
<style scoped>
</style>
  