---
title: 时间线demo
author: 
icon: comment
---

<timelines :list="[
{
  content: '事件1...............',
  timestamp: '2018-04-12 ',
  color: 'red',
},
{
  content: '事件2.................',
  timestamp: '2018-04-15 ',
  color: 'blue',
},
{
  content: '事件3.................',
  timestamp: '2018-04-16 ',
  color: 'yellow',
}
]"/>


<script setup lang="ts">
import timelines from "@timelines";
</script>

