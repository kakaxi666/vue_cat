
import router from "./router";
import { isMobile } from "./utils";
import { pcRoutes, mobileRoutes } from "./router";
console.log("dadada")
console.log(isMobile())
console.log(pcRoutes[0])
// 判断当前设备的型号从而改变当前路由
console.log(router)
// router.addRoute(isMobile() ? mobileRoutes[1] : pcRoutes[1]);
router.addRoute(mobileRoutes[1])
router.addRoute(mobileRoutes[2])
