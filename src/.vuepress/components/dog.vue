<template>
  <div>
    <h2>{{ apidata }}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "dog",
  data() {
    return {
      apidata: "",
    };
  },
  watch: {},
  computed: {},
  methods: {
    dog() {
      https: axios
        .get("https://api.oick.cn/dog/api.php")
        .then((res) => {
          // 成功的回调
          this.apidata = res.data;
        })
        .catch((err) => {
          // 失败的回调
          alert("今天不舔了");
        });
    },
  },

  created() {
    this.dog();
  },
};
</script>



<style scoped>

</style>
