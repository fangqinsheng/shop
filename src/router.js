import Vue from "vue";
import Router from "vue-router";
import List from "./views/goods/list";
import Category from "./views/goods/Category";
import Audit from "./views/goods/Audit";
import Layout from "./components/Layout";
import DashBoard from "./views/DashBoard";
import Error from "./views/Error";
import Login from "./views/Login"
import Login1 from "./views/login1";
import WebSetting from "./views/setting/Web"
import SetPassword from "./views/setting/SetPassowrd"
import orderList from "./views/order/list"
import memberList from "./views/member/list"
import memberEdit from "./views/member/Edit"
import orderAmount from "./views/statistics/member/OrderAmount"
import Test from "./components/Test"

Vue.use(Router);

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{path: "*", name: "404", component: Error },
		{path: "/test", name: "test", component: Test },
		{path: "/login", name: "登录", component: Login },
		{path: "/login1", name: "登录1", component: Login1 },
		{
			path: "/", name: "系统", component: Layout, redirect: "/dashboard",
			children: [
				{path: "/dashboard", name: "平台首页", component: DashBoard},
				{path: "/set/password", name: "密码修改", component: SetPassword},
				{path: "/setting", name: "平台设置", component: WebSetting}
			]
		},
		{
			path: "/goods", name: "商品管理", component: Layout,
			children: [
				{path: "/goods/list", name: "商品列表", component: DashBoard},
				{path: "/goods/add", name: "商品发布", component: List},
				{path: "/goods/category", name: "商品分类", component: Category},
				{path: "/goods/audit", name: "商品审核", component: Audit},
			]
		},
		{
			path: "/order", name: "订单管理", component: Layout,
			children: [
				{path: "/order/list", name: "全部订单", component: orderList},
				{path: "/order/refund", name: "维权订单", component: List},
				{path: "/order/receipt", name: "开票历史", component: List}
			]
		},
		{
			path: "/member", name: "会员管理", component: Layout,
			children: [
				{path: "/member/list", name: "会员列表", component: memberList },
				{path: "/member/edit", name: "编辑会员", component: memberEdit },
				{path: "/member/setting", name: "会员设置", component: List}
			]
		},
		{
			path: "/statistical", name: "统计分析", component: Layout,
			children: [
				{ path: "/statistical/member/amount", name: "会员下单统计", component: orderAmount },
				{path: "/statistical/setting", name: "会员设置", component: List}
			]
		}
	]
});

const IS_LOGIN = true; // 根据存储在cookie的登录信息判断是否登录的判断
router.beforeEach((to, from, next) => {
//router实例的beforeEach方法是注册一个全局前置守卫，从from路由对象到to路由对象，即禁止在没有登录情况下，在网址栏输入admin会跳转到admin页面。
// 	to.meta && setTittle(to.meta.title); //设置页面网址上面的标题
	if(to.name !== "login"){ //如果即将跳转的页面不是登录页面,如跳转的是admin页面
		if(IS_LOGIN){ //根据是否已经登录，判断是否可以跳转到adminy页面
			next()   //如果已即登录，就直接跳转
		} else {
			next({ name: 'login' })  //如果没有登录，就跳转到登录页面
		}
	}else{
		next({ name: 'login' })   //如果即将跳转的页面是登录页面
	}
});

// router.beforeResolve((to,form,next)=>{
// 	//router实例的beforeResolve方法是注册一个全局守卫，从from路由对象到to路由对象，即页面跳转前所有钩子执行完最后执行该函数 ，
//
// });


// router.afterEach((to,form)=>{
// 	//router实例的afterEach方法是注册一个全局后置守卫，从from路由对象到to路由对象，即页面跳转之后执行，
// 	//loading=false
// });

export default router

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

