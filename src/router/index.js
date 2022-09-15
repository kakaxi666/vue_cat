//配置路由
import Vue  from "vue";
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter);
//配置路由
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originPush.call(this, location).catch(err => err)
}  
import Home from '@/pages/Home'
import Search from '@/pages/Search'
export default new VueRouter({
    //配置路由
    //引入路由组件
    routes:[
        {
            path:"/",
            name:"home",
            component:Home
        },
        {
            path:"/home",
            name:"home",
            component:Home
        },
        {
            path:"/search",
            name:"search",
            component:Search,
        }
    ]
})