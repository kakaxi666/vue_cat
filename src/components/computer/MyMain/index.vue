<template>
    
    <el-main>
        <vue-particles
                    id="particles-js"   
                    color="#dedede"
                    :particleOpacity="0.7"
                    :particlesNumber="80"
                    shapeType="star"
                    :particleSize="4"
                    linesColor="#dedede"
                    :linesWidth="1"
                    :lineLinked="true"
                    :lineOpacity="0.4"
                    :linesDistance="150"
                    :moveSpeed="3"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="push"
                >
                </vue-particles>
        <el-row>
            <el-col :span="24">
                <div class="mainBackground"></div>
            </el-col>
        </el-row>
        
        <el-row type="flex" justify="center">
            
            <el-col :span="24" >
                
                <div class="box">
                    
                    <el-card :body-style="{ padding: '0px' }" v-for="(item,index) in urlList" :key="index">
                        <img :src="'data:image/Jpeg;base64,'+item.file_data" class="image">
                        <div class="mainCon">
                            <div class="bottom clearfix">
                            <time class="time">{{item.file_create_time}}</time>
                            <div>{{item.file_name}}</div>
                            <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </div>
                
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
import {getFile} from '@/api/index.js'
export default{
            name:"MyMain",
            data() {
                return {
                    urlList:[]
                };
            },
            methods:{

            },
            mounted(){
                console.log('开始')
                let data = {"file_name":""}
                getFile(data).then((res)=>{
                    console.log("main",res)
                    this.urlList = res.data.data
                }).catch((error)=>{

                })

            }
        }
</script>

<style lang="less" scoped>
   .mainBackground{
    background: url(../../../static/mainImg/catMain.jpg) no-repeat 100% whitesmoke;
    background-size: 100% 100%;
    height: 60vh;
    position: relative;
   }
   .mainCon{
    height: 10rem;
    margin-top: 1rem;
   }
   .box{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 60rem;
    
   }
   .el-col{
    background-color: white;
   }

   .el-card{
    min-width: 18%; // 加入这两个后每个item的宽度就生效了
    // max-width: 24%; // 加入这两个后每个item的宽度就生效了
    max-height: 25rem; // 加入这两个后每个item的宽度就生效了
    text-align: center;
    margin-right:1rem;
    margin-top: 1rem;
    position:relative;
   }
   .image{
    width: 100%;
    height: 15rem;
   }
   #particles-js{
    width: 100%;
    height: 100%;
    // position: absolute;
    // position:fixed;
    // background: url("../../assets/img/user-home-bgd1.jpg");
    // background-size: 100%;
}
</style>