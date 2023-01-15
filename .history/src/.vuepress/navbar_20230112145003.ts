import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  { text: '首页', link: '/' , icon: "home"},
  {
    text: "功能测试",
    icon: "edit",
    prefix: "/base/",
    children: [
      {
        text: "理论知识",
        icon: "edit",
        link: "theory/test001.md" 
      },
      {
        text: "常用工具",
        icon: "tool",
        link: "tools/readme.md" 
      },
      {
        text: "Linux基础",
        icon: "linux;",
        link: "tools/readme.md" 
      },
      {
        text: "数据库",
        icon: "mysql;",
        link: "tools/readme.md" 
      },

    ],
  },
  {
    text: "自动化测试",
    icon: "actions",
    prefix: "/auto/",
    children: [
      {
        text: "UI自动化",
        icon: "layout",
        link: "theory/test001.md" 
      },
      {
        text: "接口自动化",
        icon: "api",
        link: "tools/readme.md" 
      },
    ],
  },

  {
    text: "性能测试",
    icon: "load",
    prefix: "/performance/",
    children: [
      {
        text: "性能概念",
        icon: "edit",
        link: "concept/disable.md" 
      },
      {
        text: "Jmeter",
        icon: "tool",
        link: "jmeter/readme.md" 
      },
      {
        text: "LoadRunner",
        icon: "tool",
        link: "loadrunner/page.md" 
      },
      {
        text: "Locust",
        icon: "tool",
        link: "locust/disable.md" 
      },
    ],
  },
  {
    text: "APP测试",
    icon: "mobile",
    prefix: "/app/",
    children: [
      {
        text: "基础",
        icon: "edit",
        link: "concept/disable.md" 
      },
      {
        text: "adb",
        icon: "tool",
        link: "jmeter/readme.md" 
      },
    ],
  },
  { text: '安全测试', link: '/Safety/' ,icon: "shell"},
  { text: '面试', link: '/Interview/' ,icon: "question"},
  { text: '导航', link: '/Interview/' ,icon: "network"},
  { text: '友链', link: '/link/' ,icon: "link"},
  { text: 'vuepress', icon: "vue",
  children: [
    {
      text: "theme-hope",
      icon: "https://pic.testyuan1024.com/thumbnails/8682cb3efd4693ad8333d60bb2899a81.png",
      link: "https://theme-hope.vuejs.press/zh/" 
    },
  ]
  },
 
  {
    text: "其他",
    icon: "emoji",
    prefix: "/other/",
    children: [
      {
        text: "自写组件",
        icon: "module",
        link: "" 
      },
      {
        text: "自用图床",
        icon: "pic",
        link: "https://pic.testyuan1024.com/" 
      },
      {
        text: "站点日记",
        icon: "note",
        link: "note" 
      },
    ],
  },

  // {
  //   text: "其他",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
