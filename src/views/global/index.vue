<template>
<div>
<div class="Globalmap"><Globalmap></Globalmap></div>
<div class="title">
      <span>全球疫情</span>
      <el-divider></el-divider>
    </div>
<div class="Content"> <Content></Content></div>

<div class="title">
      <span>新闻资讯</span>
      <el-divider></el-divider>
    </div>
 <div>
   <Rightarticle :listdata="datas"></Rightarticle>
 </div>

 </div>


</template>

<script>
import Globalmap from './components/Globalmap.vue'
import Content from './components/Content.vue';
import Rightarticle from './components/Rightarticles.vue';

import {getNewsdata} from "../../api/news"
import {getHerodata} from "../../api/hero"

export default {
    components:{
        Globalmap,
        Content,
        Rightarticle
    },
     data(){
         return {
              datas:[],
              hero:[],
         }
     },
      created(){
         getNewsdata().then(res =>{
            //   console.log(res.data);
              this.datas=res.data;
         });
         getHerodata().then(res =>{
              console.log(res);

             this.hero=res.data;
         })

     //     console.log(this.result);
    }
}
</script>

<style scoped>
.Content{
  position: relative;
  margin:20px 20px 20px 50px; 
 
}
.title{
  text-align: left;
  font-size: 25px;
  margin: 50px 25px 25px 60px;
}
</style>