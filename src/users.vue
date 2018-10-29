<template>

<div>
<div>
<div id="edu" style="width: 400px;height: 400px;position:absolute;top:100px;left:20px"></div>
</div>
<div>
<div id="province" style="width: 400px;height: 400px;position:absolute;top:100px;left:420px"></div>
</div>
<div>
<div id="job" style="width: 400px;height: 400px;position:absolute;top:100px;left:820px"></div>
</div>
<div>
<div id="gender" style="width: 400px;height: 400px;position:absolute;top:500px;left:20px"></div>
</div>
<div>
<div id="isCity" style="width: 400px;height: 400px;position:absolute;top:500px;left:420px"></div>
</div>
</div>


</template>

<script>
import echarts from 'echarts'
export default {
  name: 'App',
  created(){
    this.getProvince();
    this.getEdu();
    this.getJob();
    this.getisCity();
    this.getGender();
  },
  mounted(){
  },

  methods: {
           drawPie(id,data,title){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 title:{
                      text:title
                 },
                 series: [
                   {
                     name:'访问来源',
                     type:'pie',
                     radius:'55%',
                     avoidLabelOverlap: false,
                     data:data
                    
                   }
                 ]
               })
            },
  submitForm() {
    this.$ajax({
      method: 'get',
      url: 'http://localhost:8080/users',
      responsetype:'json'
      }).then(
        function(res){
          console.log(res);
        }
      )  
},
  getEdu(){
    var self=this;
    this.$ajax({
      method:'get',
      url:'http://localhost:8080/usertime/alldate',
      responsetype:'json'
    }).then(
      function(res){
        console.log(res);
        self.drawPie('edu',res.data,'学历')
      }
    )
  },
  getJob(){
     var self=this;
    this.$ajax({
      method:'get',
      url:'http://localhost:8080/users/job',
      responsetype:'json'
    }).then(
      function(res){
        console.log(res);
        self.drawPie('job',res.data,'工作')
      }
    )
  },
  getProvince(){
     var self=this;
    this.$ajax({
      method:'get',
      url:'http://localhost:8080/users/province',
      responsetype:'json'
    }).then(
      function(res){
        console.log(res);
        self.drawPie('province',res.data,'省份')
      }
    )
  },
  getisCity(){
     var self=this;
    this.$ajax({
      method:'get',
      url:'http://localhost:8080/users/isCity',
      responsetype:'json'
    }).then(
      function(res){
        console.log(res);
        self.drawPie('isCity',res.data,'城市归属')
      }
    )
  },
    getGender(){
       var self=this;
    this.$ajax({
      method:'get',
      url:'http://localhost:8080/users/gender',
      responsetype:'json'
    }).then(
      function(res){
        console.log(res);
        self.drawPie('gender',res.data,'性别')
      }
    )
  }
}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>