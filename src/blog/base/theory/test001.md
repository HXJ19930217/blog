---
pageInfo:      # 控制页面信息 默认ture显示
sidebar:       # 控制侧边栏：默认ture显示
navbar:     # 控制导航栏：默认ture显示
title: 测试内容展示
date: 2023-01-18
author: 
icon: icon-supervise  
category:    #分类
  - 日记
tag:         #标签
  - 日记
comment: true
pageview:        # 浏览量统计，仅Waline 可用，默认ture
toc:          #控制右侧的标题列表显示：默认ture显示
isOriginal: true   #控制原创标签显示：true显示
footer: 本页面的页脚  # 可以覆盖全局配置页脚，设置false局部禁用
copyright: 本页面版本    # 可以覆盖全局配置的版权信息

---
<!-- 这是摘要内容 -->



# 我是理论001
内容页
<!-- more 33333333333333-->
<AudioPlayer
  src="/assets/assets/sample.mp3"
  title="A Sample Audio"
  poster="/logo.svg"
/>

# 一级标题
## 二级标题001
内容内容内容
内容
### 三级标题001
内容内容内容
内容
## 二级标题002
内容内容内容
内容
### 三级标题002
内容内容内容
内容

<p>
  This is <a href="http://example.com/" title="Title"> an example</a> inline
  link.
</p>

<p><a href="http://example.net/">This link</a> has no title attribute.</p>


```java 
import type { UserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";

export const config: UserConfig = {
  title: "你好， VuePress",

  theme: defaultTheme({
    logo: "https://vuejs.org/images/logo.png",
  }),
};
```
