<template>
        <el-header>
            <el-row :gutter="20" type="flex" justify="space-around" align="middle" style="border-bottom: 1px solid #e6e6e6;">
                <el-col :span="4">
                    <div class="word-font">张家的小五只</div>
                </el-col>
                <el-col :span="12"><div class="grid-content bg-purple">12313</div></el-col>
                <el-col :span="8">
                    <el-menu
                            class="el-menu-demo"
                            mode="horizontal"
                            router
                            background-color="transparent"
                           >
                        <el-menu-item index="home">home</el-menu-item>
                        <el-menu-item index="search">search</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-header>
</template>
<script>
    export default{
        name:"MyHeader",
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
<style lang="less" scoped>
.word-font{
    color:#303133
}
.el-header{
    background-color: whitesmoke;
    color: whitesmoke;
    text-align: center;
    /* line-height: 60px; */
  }
   
</style>