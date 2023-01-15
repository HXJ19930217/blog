// 站点的基本配置文件
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { getDirname, path } from "@vuepress/utils"; 
import { copyrightPlugin } from "vuepress-plugin-copyright2";   //在复制时添加版权信息
const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
  base: "/",
  lang: "zh-CN",   // 网站语言，默认为中文
  title: "",   // 网站标题
  description: "测试猿全栈知识体系",  // 网站描述
  theme,   //默认blog主题   
  shouldPrefetch: false,  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度

  plugins: [
    // 本地化搜索
    searchPlugin({
      // placeholder: '搜索',
      // 排除首页
      isSearchable: (page) => page.path !== '/',
      
    }),

    copyrightPlugin({
      // 插件选项
      author: "测试猿全栈知识体系",
      canonical: "https://testyuan1024.com",
      triggerWords: 20,
      global: true,
    }),


    
  ],

  // 组件创建别名
  alias: {
    "@dog": path.resolve(__dirname, "components/dog.vue"),
    "@yiyan": path.resolve(__dirname, "components/yiyan.vue"),
    "@yulu": path.resolve(__dirname, "components/yulu.vue"),
    "@lishi": path.resolve(__dirname, "components/lishi.vue"),
    "@show": path.resolve(__dirname, "components/show.vue"),
    "@yzm": path.resolve(__dirname, "components/yzm.vue"),
    "@wenzi": path.resolve(__dirname, "components/wenzi.vue"),
    "@timelines": path.resolve(__dirname, "components/timelines.vue"),
    "@father": path.resolve(__dirname, "components/father.vue"),

  },
  
});
