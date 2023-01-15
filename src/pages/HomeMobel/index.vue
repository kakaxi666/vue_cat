<template>
    <div>
        
            <my-main></my-main>
            
    </div>
</template>
<script>

import MyHeader from '@/components/mobel/MyHeader'
import MyMain from '@/components/mobel/MyMain' 
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
    },
    mounted(){
        console.log(this.$router)
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
    background-color: #F5F5F5;
    color: #333;
  }
  
</style>