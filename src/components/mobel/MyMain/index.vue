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
        <van-row>
            <van-col :span="24">
                <div class="mainBackground"></div>
            </van-col>
        </van-row>
        
        <van-row type="flex" justify="center">
            
            <van-col :span="24" >
                
                <div class="box">
                    <van-grid :gutter="10" style="height: 20vh;" column-num="2">
                        <van-grid-item v-for="(item,index) in urlList" :key="index"  style="height:40vh;margin-top: 1vh;">
                            <van-image :src="'data:image/Jpeg;base64,'+item.file_data" style="height:100%" @click="showBigPic(index)"/>
                            <van-cell-group>
                                <van-cell  :value="item.file_name" />
                                <van-cell  :value="item.file_create_time" />
                            </van-cell-group>
                        </van-grid-item>
                    </van-grid>
                </div>
                
            </van-col>
        </van-row>
    </el-main>
</template>

<script>
import {getFile} from '@/api/index.js'
import { ImagePreview } from 'vant';
export default{
            name:"MyMain",
            data() {
                return {
                    urlList:[]
                };
            },
            methods:{
                showBigPic(num){
                    ImagePreview(['data:image/Jpeg;base64,'+this.urlList[num]['file_data']])
                }
            },
            mounted(){
                debugger
                if(this.urlList.length !== 0){
                    return
                }
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
    height: 20vh;
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
    height: 100vh-40px;
    
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
    position:fixed;
    // background: url("../../assets/img/user-home-bgd1.jpg");
    // background-size: 100%;
}
</style>