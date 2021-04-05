<template>
<div class="right">
    <div class="name">
        抗疫英雄
          <el-divider></el-divider>
        
    </div>
    <div class="heroitems" v-for="(item,index) in herodata" :key="index">
          {{item.tilte}}
         <span class="herospan">{{item.herocity}}</span> 
      </div>
</div>
  
</template>

<script>
export default {
     props: {
        herodata:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .right{
        float: right;
        width: 400px;
        
    }
    .name{
        /* width: 400px;
        border-bottom: #600808 1px solid;
        line-height: 0px;
        height: 40px;
        padding: 0px;
        margin: 40px 10px  30px;
        color: rgb(247, 146, 14); */
         text-align: left;
        font-size: 25px;
        margin: 50px 25px 25px 20px;
    }
    .heroitems{
        height: 50px;
        padding: 10px;
        color: #999999;
        font-size: 20px;
        margin: 20px;
    }
    .herospan{
        line-height: 50px;
        height: 50px;
        float: right;
    }

    .heroitems:hover{
        color:burlywood
    }
</style>