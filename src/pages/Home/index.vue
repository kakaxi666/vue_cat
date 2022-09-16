<template>
    <div>
        <el-container>
            <my-header></my-header>
            <my-main></my-main>
            <el-footer>Footer</el-footer>
        </el-container>   
    </div>
</template>
<script>

import MyHeader from '@/components/MyHeader'
import MyMain from '@/components/MyMain' 
export default{
    name: "Home",
    components:{
        MyHeader,
        MyMain
    },
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

.el-footer {
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
  
</style>