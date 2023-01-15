<template>
  <div>
    <!-- <div class="huoduan_hide_box">
      <img
        class="wxpic"
        align="right"
        src="https://www.linuxprobe.com/imgs/weixin/15.png"
        width="150"
        height="150"
        alt="刘遄"
      />
      <p></p>
      <p>
        <span style="font-size: 18px"
          >为打击盗链困扰，本站已启用公众号验证。此处内容已被隐藏，请输入验证码查看→</span
        >
      </p>

      <form style="margin: 10px 0">
        <p>
          <span class="yzts" style="font-size: 18px; float: left"
            >验证码：</span
          >

          <input
            class="huoduan_verifycode"
            v-model="input"
            placeholder="请输入验证码"
          />

          <button calss="verifybtn" value="提交查看" />
        </p>
      </form>

      <div style="clear: left"></div>
      <p style="color: blue">
        请关注微信公众号【吾爱资源分享】，发送“验证码”获取
      </p>
    </div> -->

    <div>
      <el-row>
        <el-button :icon="Search" circle />
        <el-button circle />
        <el-button type="success" :icon="Check" circle />主要按钮
        <el-button type="info" :icon="Message" circle />成功按钮
        <el-button type="warning" :icon="Star" circle />警告按钮
        <el-button type="danger" :icon="Delete" circle />危险按钮
      </el-row>
      <el-input v-model="input" placeholder="Please input" />
      <!-- <el-icon><avatar /></el-icon> -->
      <!-- <el-config-provider :size="size" :z-index="zIndex">
        <app />
      </el-config-provider> -->
    </div>
  </div>
</template>
  
<script>
// import { ElButton, ElIcon, ElConfigProvider, ElSwitch } from "element-plus";
import "element-plus/dist/index.css";
import ElButton from "element-plus";

export default {
  components: { ElButton, },
  data() {
    return {};
  },
  watch: {},
  computed: {},

  methods: {
    yulu() {},
  },

  created() {},
};
</script>
<style scoped>
.huoduan_hide_box {
  /* border: 1px dashed #f60;
  padding: 10px;
  margin: 10px 0;
  line-height: 200%;
  color: #f00; */
  /* background-color: #fff4ff; */
  /* overflow: hidden;
  clear: both; */
}

.wxpic {
  /* width: 150px;
  height: 150px;
  margin-left: 20px;
  display: inline;
  border: none; */
}

.huoduan_verifycode {
  /* border: none;
  float: left;
  width: 80px;
  height: 32px;
  line-height: 30px;
  padding: 0 5px;
  border: 1px solid #ff6600;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px; */
}

.verifybtn {
  /* border: none;
  float: left;
  width: 280px;
  height: 50px;
  line-height: 32px;
  padding: 0 5px;
  background-color: #f60;
  text-align: center;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  border-radius: 0px;*/
}
</style>
    