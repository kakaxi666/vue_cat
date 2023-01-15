<template>
    <div>
        我是搜索
        <el-button @click="send">
            测试
        </el-button>
        <img :src="'data:image/Jpeg;base64,'+urlMy">
    </div>
</template>
<script>
import {getFile} from '@/api/index.js'
export default{
    name:'Search',
    data(){
        return{
            urlMy:""
        }
    },
    methods:{
        send(){
            let data = {"file_name":"test2.jpg"}
            getFile(data).then((res)=>{
                console.log(res)
                this.urlMy = res.data.data.file_data
                console.log(this.urlMy)
            }).catch((error)=>{

            })
        }
    }
}
</script>
<style scoped>

</style>