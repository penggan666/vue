<template>
<div class="deit">
    <div class="crumbs">
      <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="cantainer">
                    <el-table style="width: 100%;"
                    :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    >
                        <el-table-column type="index" width="100"align="center">    
                        </el-table-column>
                        <el-table-column label="用户id" prop="id" width="200"align="center">    
                        </el-table-column>
                        <el-table-column label="性别" prop="gender" width="120"align="center">    
                        </el-table-column>
                        <el-table-column label="生日" prop="birthday" width="120"align="center">    
                        </el-table-column>
                        <el-table-column label="教育程度" prop="edu" width="120"align="center">    
                        </el-table-column>
                        <el-table-column label="工作" prop="job" width="120"align="center">    
                        </el-table-column>  
                        <el-table-column label="省份" prop="province" width="120" align="center">    
                        </el-table-column>  
                        <el-table-column label="城市" prop="city" width="120"align="center">    
                        </el-table-column> 
                        <el-table-column label="收入" prop="income" width="120"align="center">    
                        </el-table-column>  
                    </el-table>
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[20, 50, 100]" 
                            :page-size="pagesize"       
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="userList.length"> 
                    </el-pagination>
        </div>
    </div>
  </div>
</template>
<script>
export default{
    data(){return{
        currentPage:1,
        pagesize:20,
        userList:[]
    }},
    created(){
        this.handleUserList()
    },
    methods:{
         handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange:function(currentPage){
            this.currentPage=currentPage;
            console.log(this.currentPage)
        },
        handleUserList() {
            this.$http.get('http://localhost:8080/users').then(res => {  //这是从本地请求的数据接口，
                this.userList = res.body
            })
        }
    }
}
</script>