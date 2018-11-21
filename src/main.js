import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import axios from  "axios"
import "./mock/index"  // 正式发布时注释掉

import "element-ui/lib/theme-chalk/index.css";
import "./assets/reset.css";
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;
Vue.prototype.axios = axios;


Vue.config.productionTip = false;
Vue.use(ElementUI);

// // 注册一个钩子，在路由初始化之前, 导航判断
//
// router.beforeEach((to, from, next) => {
// 	if (to.path === '/login') {
// 		next()
// 	}else {
// 		if(to.meta.requireAuth)
// 	}
// });

new Vue({
  router,
  store, // vuex
  render: h => h(App) //es6的语法,渲染App组件
}).$mount("#app"); // 手动挂载到#app，同el:#app,用于挂载到根节点，不同的是效率更高

// render: function (createElement) {
// 	return createElement(
// 		'h' + this.level,   // tag name 标签名称
// 		this.$slots.default // 子组件中的阵列
// 	)
// }
