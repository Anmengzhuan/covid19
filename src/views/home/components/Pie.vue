<template>
 <div style="width: 500px; height: 400px" id="pie" >

 </div>
</template>

<script>
export default {
name: "page",
  mounted() {
    // 在通过mounted调用即可
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      this.$echarts.init(document.getElementById("pie")).setOption({
       title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
  
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            // center : [ '45%', '60%' ],
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
      });
    },
  },
}
</script>

<style>
 
</style>