---
sidebar: false  # 禁用侧边栏
title: 站点日记
date: 2023-01-01
author: 
icon: note
category:
  - 日记
tag:
  - 日记
comment: true
pageview: true        # 浏览量统计
---
::: tip
本页面主要记录本站的一些重要的历史时刻
:::

<timelines :list="[
{
  title:'网站上线',
  content: '本站点在本地打包成静态文件，上传到服务器，通过宝塔面板搭建成功',
  timestamp: '2023-01-01 ',
  color: 'red',
},
{
  title:'公安备案通过',
  content: '2023年1月4日晚提交的公安备案申请，1月6日审核通过，速度非常快。  川公网安备备案号： 51012202001386号',
  timestamp: '2023-01-06 ',
  color: 'orange',
},
{
  title:'',
  content: '待完善......',
  timestamp: 'XXXX ',
  color: 'yellow',
}
]"/>


<script setup lang="ts">
import timelines from "@timelines";


</script>
