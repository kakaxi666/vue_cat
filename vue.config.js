const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer:{
    open:true,
    port:8080,
  },
  pages: {
    index: {
      entry: 'src/main.js', // 入口文件
      title: '张家的小五只'
    }
  }

})
