<template>
    <div>
        <el-container>
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="4"><div class="grid-content bg-purple">张家的小五只</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple">{{activeName}}</div></el-col>
                    <el-col :span="8">
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="用户管理" name="/" ></el-tab-pane>
                                <el-tab-pane label="角色管理" name="home">角色管理</el-tab-pane>
                                <el-tab-pane label="配置管理" name="search">配置管理</el-tab-pane>
                            </el-tabs>

                    </el-col>
                </el-row>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>   
    </div>
</template>
<script>

export default{
    name: "Home",
    
    data(){
        return{
            activeName:"/" 
        }
    },
    methods:{
        handleClick(tab, event) {
            this.$router.push({ name:this.activeName} )
        }
    }
}
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: whitesmoke;
    text-align: center;
    line-height: 60px;
  }
  
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 300px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>