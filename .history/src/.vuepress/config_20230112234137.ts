// 站点的基本配置文件
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { getDirname, path } from "@vuepress/utils"; 
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",   // 网站语言，默认为中文
  title: "",   // 网站标题
  description: "测试猿全栈知识体系",  // 网站描述
  theme,   //默认blog主题   
  shouldPrefetch: false,  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度

  plugins: [

    

    // algolia 全文搜索：没设置爬虫的话，需删除 docsearchPlugin 区块以使用节点搜索
    // docsearchPlugin({
    //   appId: "LDBQGQC8Q9",
    //   apiKey: "5c3a7145aeba231c3b85b742d24fc24f",
    //   indexName: "mrhope",
    //   locales: {
    //     "/": {
    //       placeholder: "请输入搜索的内容",
    //       translations: {
    //         button: {
    //           buttonText: "搜索",
    //           buttonAriaLabel: "搜索",
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: "清除查询条件",
    //             resetButtonAriaLabel: "清除查询条件",
    //             cancelButtonText: "取消",
    //             cancelButtonAriaLabel: "取消",
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "搜索历史",
    //             noRecentSearchesText: "没有搜索历史",
    //             saveRecentSearchButtonTitle: "保存至搜索历史",
    //             removeRecentSearchButtonTitle: "从搜索历史中移除",
    //             favoriteSearchesTitle: "收藏",
    //             removeFavoriteSearchButtonTitle: "从收藏中移除",
    //           },
    //           errorScreen: {
    //             titleText: "无法获取结果",
    //             helpText: "你可能需要检查你的网络连接",
    //           },
    //           footer: {
    //             selectText: "选择",
    //             navigateText: "切换",
    //             closeText: "关闭",
    //             searchByText: "搜索提供者",
    //           },
    //           noResultsScreen: {
    //             noResultsText: "无法找到相关结果",
    //             suggestedQueryText: "你可以尝试查询",
    //             reportMissingResultsText: "你认为该查询应该有结果？",
    //             reportMissingResultsLinkText: "点击反馈",
    //           },
    //         },
    //       },
    //     },
    //   },
    // }),

    // 搜索
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
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
