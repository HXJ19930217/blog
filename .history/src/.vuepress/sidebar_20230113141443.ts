import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "",
    // {
    //   text: "统一页面",
    //   icon: "creative",
    //   prefix: "theroy/",  //会添加到每个 item 链接地址之前
    //   collapsible: true,  //  设置分组是否可以折叠，默认值是 false,
    //   children: "structure",  //通过文件结构自动生成
    // },
  ],
  "/base/": [
    {
      text: "基础知识",
      icon: "guide",
      prefix: "theory/",   //会添加到每个 item 链接地址之前
      collapsible: true,  //  设置分组是否可以折叠，默认值是 false,
      children: "structure",  //通过文件结构自动生成
    },
    {
      text: "测试工具",
      icon: "markdown",
      prefix: "tools/",
      collapsible: true,  //  设置分组是否可以折叠，默认值是 false,
      children: "structure",  //通过文件结构自动生成
    },
  ],
  // "/python/": "structure",

  "/performance/": [
    {
      text: "基础理论",
      icon: "tip",
      prefix: "copcept/",
      children: "structure",
    },
    {
      text: "JMeter",
      icon: "markdown",
      prefix: "Jmeter/",
      collapsible: true,  //  设置分组是否可以折叠，默认值是 false,
      children: "structure",  //通过文件结构自动生成
    },
    {
      text: "Locust",
      icon: "markdown",
      prefix: "Locust/",
      collapsible: true,  //  设置分组是否可以折叠，默认值是 false,
      children: "structure",  //通过文件结构自动生成
    },
  ],

    // 获取“other”目录下的文章
  "/other/": "structure",

});




