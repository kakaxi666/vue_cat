<template>
    <div>
        <h2>
            猫咪相册
        </h2>
        <div style="height:50vh;width: 100%;text-align: center;">
            <van-swipe :autoplay="3000" height="200" >
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" height="100%" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        
    </div>
</template>
    

<script>
export default{
    name:'Search',
    data(){
        return{
            urlMy:"",
            images:[
                require("../../../src/assets/lunbotu/1.jpg"),
                require("../../../src/assets/lunbotu/2.jpg"),
                require("../../../src/assets/lunbotu/3.jpg"),
                require("../../../src/assets/lunbotu/4.jpg"),
                require("../../../src/assets/lunbotu/5.jpg")]
            // images:["../../../src/assets/lunbotu/1.jpg","../../../src/assets/lunbotu/2.jpg","../../../src/assets/lunbotu/3.jpg"]
        }
    },
    methods:{
    },
    mounted(){
        console.log("哈啊哈哈哈")
    }
}
</script>
<style scoped>

</style>