<template>
  <div>
    <div>
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities.list"
          :key="index"
          :color='activity.color'
          :hollow='activity.hollow'
          :timestamp="activity.timestamp"
          placement="top"
        >
          <el-card>
            <h3>{{ activity.title }}</h3>
        <p>{{ activity.content }}</p>
            
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
 
<script lang="ts" setup>
import { ElTimeline, ElCard, ElTimelineItem } from "element-plus";
import "element-plus/dist/index.css";
import {defineProps} from 'vue' 

const activities = defineProps({
  list:Array,
})


// const activities = [
//   {
//     content: "Custom icon",
//     timestamp: "2018-04-12 20:46",
//     color: "red",
//   },
//   {
//     content: "Custom color",
//     timestamp: "2018-04-03 20:46",
//     color: "#0bbd87",
//   },
//   {
//     content: "Custom size",
//     timestamp: "2018-04-03 20:46",
//   },
//   {
//     content: "Custom hollow",
//     timestamp: "2018-04-03 20:46",
//     hollow: true,
//   },
//   {
//     content: "Default node",
//     timestamp: "2018-04-03 20:46",
//   },
// ];

</script>


