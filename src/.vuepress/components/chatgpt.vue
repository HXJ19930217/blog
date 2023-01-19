
<template>
    <div>
        点击发送
      <button @click="sendFn()">发送请求</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      async sendPostRequest() {
        try {
          const response = await axios.post('https://cc-api.sbaliyun.com/v1/completions', {
            prompt: "GXtOe0Ezfez/6BDBVu8IYHmI1YGRNqRiFkcj/ABuhXjgCzbh2WAUZxdOUTA8HE9G"
          });
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      },

      sendFn(){
       axios({
           url: "https://cc-api.sbaliyun.com/v1/completions",
           method: "POST",
           data: {
            prompt: "GXtOe0Ezfez/6BDBVu8IYHmI1YGRNqRiFkcj/ABuhXjgCzbh2WAUZxdOUTA8HE9G",
            
           }
           
       }).then((res)=>{
           console.log(res.data);
       })
    }

    }
  }
  </script>
  