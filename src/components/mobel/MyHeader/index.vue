<template>
        <el-header>
            <van-row :gutter="20" type="flex"  align="center" style="border-bottom: 1px solid #e6e6e6;">
                <van-col :span="8">
                    <div class="word-font">张家的小五只</div>
                </van-col>
                <van-col :span="5"><div class="grid-content bg-purple"></div></van-col>
                <van-col :span="11">
                    <van-tabs style="width:100%" v-model="active" title-active-color="#5599FF" background="#F5F5F5" title-inactive-color="#CCDDFF">
                        <van-tab to="home" title="主页">主页</van-tab>
                        <van-tab to="search" title="猫咪世界">猫咪世界</van-tab>
                    </van-tabs>
                </van-col>
            </van-row>
        </el-header>
</template>
<script>
    export default{
        name:"MyHeader",
        data(){
            return{
                active:0
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
    height: 60px; 
  }
   
</style>