<template>
<div id="city" class="city">
<swiper></swiper>
<right :herodata="hero"></right>
<Newslist :listdata="datas"></Newslist>
</div>
 
</template>

<script>

import {getNewsdata} from "../../api/news"
import {getHerodata} from "../../api/hero"
import Swiper from './components/swiper.vue'

import Newslist from './components/newslist.vue'
import Right from './components/right.vue'

export default {
    
    components:{
        Swiper,
        Newslist,
        Right
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

<style>
    /* .city{
        background-color: rgb(247, 239, 132); 
       background-color: black;
    } */
</style>