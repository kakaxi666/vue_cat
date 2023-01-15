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
import HomeMobel from '@/pages/HomeMobel'
import SearchMobel from '@/pages/SearchMobel/index.vue'

//默认路由
export const routes = [
    {
      path: "/",
      redirect: "/home",
    },
  ];
  

export const pcRoutes =[
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

export const mobileRoutes  =[
        {
            path:"/",
            name:"home",
            component:HomeMobel
        },
        {
            path:"/home",
            name:"home",
            component:HomeMobel
        },
        {
            path:"/search",
            name:"search",
            component:SearchMobel
        }
]


const createRouter = () =>
  new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    mode: "hash",
    routes: routes,
  });


  const router = createRouter();
 
  // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
  export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
  }
   
  export default router;

