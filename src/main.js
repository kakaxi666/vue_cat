import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
// import VideoPlayer from 'vue-video-player'
// require('video.js/dist/video-js.css')
// require('vue-video-player/src/custom-theme.css')
// Vue.use(VideoPlayer)

import router from '@/router'
import "./init.js";
import './plugins/vant'
import 'vant/lib/index.css'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
