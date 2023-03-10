import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://testyuan1024.com",

  author: {
    name: "测试猿全栈知识体系",
    url: "https://testyuan1024.com",
  },

  iconAssets: "iconfont",

  logo: "/logo.png", //站点的图标，显示在导航栏上，在.vuepress/public 文件夹中
  // logoDark:'',   //深色模式下显示这个logo
  
  docsRepo:"",         // 文档仓库地址，默认同主题选项中的 repo
  docsDir:"",         //文档在仓库中的目录，默认为根目录
  docsBranch: "",     //文档存放的分值，默认为 "main"
  
  darkmode: "switch",  // 深色模式配置 在深色模式，浅色模式和自动之间切换 (默认)
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },  //主题色
  fullscreen: true,  //是否全屏
  

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"], //页面信息默认项

  blog: {
    medias: {
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "517614037@qq.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      QQ: "",
      Wechat: "",
      Zhihu: "",
      
    },
    
  },

  locales: {
    "/": {
      // navbar
      navbar: Navbar,

      // sidebar
      sidebar: Sidebar,

      footer: '',

      // displayFooter: true,

      blog: {
        description: "个人测试知识总结",
        intro: "/intro.html",
        avatar: "/avatar.png",   // 用户头像
        sidebarDisplay: "mobile",
        articlePerPage: 10,//每页的文章数量
      },

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },

  },

  // 加密页面
  encrypt: {
    config: {
      "/python/strawberry.html": ["1234"],
    },
  },
   // 加密页面的提示文字
   encryptLocales: {
    placeholder: "👉微信搜‘测试猿XXXX’回复‘密码’获取口令",
    //密码错误提示
    errorHint: "是不是没有关注，输错了吧🙊",
  },

  // 插件
  plugins: {
    // blog: true,
    
    blog:{
      excerptLength: 0,  //不产生摘要
    },

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
       provider: "Waline",
       serverURL: "https://waline.testyuan1024.com",
       copyright: false,  // 禁止显示页脚版权信息
       reaction: true,   //启用表情互动功能
       search:false   // 禁用搜索
    
    },

    // Disable features you don’t want here
    mdEnhance: {
      // align: true,
      // attrs: true,
      // chart: true,
      // codetabs: true,
      // container: true,
      // demo: true,
      // echarts: true,
      // figure: true,
      // flowchart: true,
      // gfm: true,
      // imgLazyload: true,
      // imgSize: true,
      // include: true,
      // katex: true,
      // mark: true,
      // mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    //markdown组件
    components: {
      // 你想使用的组件
      components: [
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "Catalog",
        "CodePen",
        "PDF",
        "StackBlitz",
        "VideoPlayer",
        "YouTube",
        "SiteInfo"
      ],
    },

    


    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },

 // 页脚
//  displayFooter: true,  // 每个页面都显示页脚
  footer: ''

});
