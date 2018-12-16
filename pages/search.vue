<template>
  <!--//一个vue组件就是路由-->
  <div class="">
    Page is search
    <ul>
      <li
        v-for="(item,idx) in $store.state.navbar.app"
        :key = "idx">{{ item }}</li>
        <!--eslink 的坑 使用:key 和v-for需要换行!!-->
    </ul>
  </div>
</template>

<script>
  import axios from'axios'

  export default {
    layout:"search",
    data(){
      return{
        list:[]
      }
    },
    async asyncData(){
      // async处理组件数据
      let { status,data:{list}}=await axios.get('http://localhost:3000/city/list')
      if (status === 200){
        return {
          list
        }
      }
    }
    // async fetch(){
    //   // fetch主要处理vuex相关的数据 提交vuex状态
    //   let { status,data:{list}}=await axios.get('http://localhost:3000/city/list')
    //   if (status ===200){
    //     return {
    //       list
    //     }
    //   }
    // }
    // async mounted() {
    //   let self=this;
    //   let {status, data: {list}} = await axios.get('/city/list')
    //   // 在服务器端渲染不执行这个过程 要开启ssr在浏览器上渲染
    //   if (status === 200){
    //     self.list =list
    //   }
    // }
  }
</script>
