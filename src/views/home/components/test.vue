<template>
 
  <div style="width: auto;height: 400px" id="main">
  </div>

</template>

<script>
export default {
    name: "page",
    mounted(){
    	// 在通过mounted调用即可
		this.echartsInit()
	},
    methods: {
	    echartsInit() {
			this.$echarts.init(document.getElementById('main')).setOption({
			     xAxis: {
                 type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
             },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
    }]
			})
		}
	    	
    }
  }

</script>

<style>

</style>