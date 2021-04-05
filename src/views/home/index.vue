<template>
  <div>

    <div class="title">
<span>全球疫情</span>
      <el-divider></el-divider>
    </div>

    <div>
      <Content></Content>
    </div>
    <div>
      <Test></Test>
    </div>
    <div>
      <div class="bardiv">
        <Bar></Bar>
        <div class="piediv">
          <Pie></Pie>
        </div>
      </div>
    </div>



   <div class="title">
      <span>全球疫情</span>
      <el-divider></el-divider>
    </div>
    <div>
    <Content-2></Content-2>
    </div>
    <div>
    <Test2></Test2>
    </div>
    <div>
      <div class="bardiv">
        <Bar2></Bar2>
        <div class="piediv">
          <Pie2></Pie2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Test from "./components/test.vue";
import Bar from "./components/Bar";
import Pie from "./components/Pie";
import Content2 from './components/Content2.vue';
import Test2 from './components/test2';
import Bar2 from './components/Bar2';
import Pie2 from './components/Pie2';


export default {
  components: {
    Content,
    Test,
    Bar,
    Pie,
    Content2,
    Test2,
    Bar2,
    Pie2
  },
};
</script>

<style scoped>
.bardiv {
  display: flex;
  width: auto;
  margin: 15px 15px 15px 100px;
}
.piediv {
  width: 500px;
  display: flex;
  margin: 50px 15px 15px 300px;
  position: relative;
  /* left: 600px; */
}

.title{
  text-align: left;
  font-size: 25px;
  margin: 50px 25px 25px 60px;
}
</style>
