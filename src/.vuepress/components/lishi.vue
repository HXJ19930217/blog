<template>
  <!-- 表身 -->
  <tbody>
    <th>时间</th>
    <th>事件</th>
    <tr v-for="item in tableData" :key="item.id">
      <td>{{ item.date }}</td>
      <td>{{ item.title }}</td>
    </tr>
  </tbody>
</template>

<script >
import axios from "axios";
export default {
  data() {
    return {
      apidata: "",
      tableData: [],
    };
  },
  watch: {},
  computed: {},

  methods: {
    lishi() {
      https: axios
        .get("https://api.oick.cn/lishi/api.php")
        .then((res) => {
          this.tableData = res.data.result;
          // console.log(res.data)

        })
        .catch((err) => {
          // 失败的回调
          alert("数据获取失败！");
        });
    },
  },

  created() {
    this.lishi();
  },
};
</script>
  <style scoped>
</style>
    