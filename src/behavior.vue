<template>
<div>
<el-input v-model="input" placeholder="检索日期" :style="{width: '200px'}"></el-input>
<el-button @click="getDataToBar('http://localhost:8080/usertime/findtime',input,'上线时间统计','time')">查询</el-button>
<div id="time" style="width: 1600px;height: 400px;position:absolute;top:100px;left:20px"></div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  data(){
    return{
      input:""
    }  
  },
  methods: {
        getDataToBar(url,date,title,element_id){
      var self = this;
      this.$ajax({
        method:'get',
        url:url,
        responseType:'json',
        params:{
          date:date
        }
      }
      ).then(
        function(res){
          console.log(res);
      self.drawline(res.data.xvalue,res.data.yvalue,title,element_id)
      
}
      )
.catch(function(err){
console.log(err);
})
    },
           drawline(x,y,title,element_id){
                   let myChart = this.$echarts.init(document.getElementById("time"))
        // 绘制图表
        myChart.setOption({
          title: { 
            text: title,
            
          },
          xAxis: {
          data:x
        },
        yAxis: {},
        series: [{
          type: 'bar',
          data: y,
          itemStyle: {
					normal: {
					  label: {
					    show: true, //开启显示
					    position: 'top', //在上方显示
					    textStyle: { //数值样式
					      color: 'black',
								fontSize: 16
									}
					}
						}
          }
        }
        ]
        });           
       },
}

}
</script>