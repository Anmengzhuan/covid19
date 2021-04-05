<template>
  <div>
    <div>
      <Chinamap></Chinamap>
      <!-- <chinamap></chinamap> -->
    </div>
    <div class="title">
      <span>全国疫情</span>
      <el-divider></el-divider>
    </div>
    <div class="Content">
      <Content :countdata="totalinchina"></Content>
    </div>

    <div class="title">
      <span>新闻资讯</span>
      <el-divider></el-divider>
    </div>
    <div>
      <Rightarticle :listdata="datas.list"></Rightarticle>
    </div>
  </div>
</template>

<script>
import Chinamap from "./components/Chinamaps.vue";
import Content from "./components/Content.vue";
import Rightarticle from "./components/Rightarticles.vue";

import { getTotalInChinadata } from "../../api/totalinchina";
import { getNewsdata } from "../../api/news";
import { getHerodata } from "../../api/hero";

export default {
  components: { Chinamap, Content, Rightarticle },
  data() {
    return {
      datas: {
        page: 0,
        list: [],
      },
      hero: [],
      totalinchina: [],
    };
  },
  created() {
    getNewsdata().then((res) => {
      //   console.log(res.data);
      this.datas.list = res.data;
    });
    getHerodata().then((res) => {
      // console.log(res);

      this.hero = res.data;
    });
    getTotalInChinadata().then((res) => {
      console.log(res);
      this.totalinchina = res.data;
    });

    //     console.log(this.result);
  },
};
</script>

<style scoped>
.Content {
  position: relative;
  margin: 20px 20px 20px 50px;
}
.title {
  text-align: left;
  font-size: 25px;
  margin: 50px 25px 25px 60px;
}
</style>