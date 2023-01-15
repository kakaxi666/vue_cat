<template>
  <div id="app">
    <my-header></my-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <el-footer class="el-footer"><a class="beian" href="https://beian.miit.gov.cn/" target="_blank">备案号京ICP备2022029005号-1</a></el-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/mobel/MyHeader'
export default {
  name: 'App',
  components:{
        MyHeader
    },
    created() {
    setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: "live2dw/",
          pluginJsPath: "lib/",
          pluginModelPath: "live2d-widget-model-hijiki/assets/",
          tagMode: false,
          debug: false,
          model: {
            jsonPath:
              "../live2dw/live2d-widget-model-hijiki/assets/hijiki.model.json"
          },
          display: { position: "right", width: 200, height: 300 },
          mobile: { show: true },
          log: false
        });
      }, 500);
    }
}
</script>

<style scoped>
  .el-footer {
      background-color: #B3C0D1;
      color: whitesmoke;
      height: 30px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      z-index: 2;
      position: fixed;
      bottom: 0;
    }
  
  
  .el-main {
    background-color: #F5F5F5;
    color: #333;
  }

  a{
    cursor:pointer
  }

  .beian{
    z-index: 500;
  }
</style>
