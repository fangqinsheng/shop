import axios from "axios";
// import store from
import { getToken } from "./auth";

const service = axios.create({
// Api接口的地址，开发时和发布的地址不同是则在这里配置，在webpack的definePlugin中设置
	baseURL: process.env.BASE_URL,
	timeout: 5000, // 请求超时的毫秒数
});

// request interceptor
service.interceptors.request.use(config => {
	if(store.getters.token) {
		// 让每个请求携带token-- ['Admin-Token']为自定义key 请根据实际情况自行修改
		config.headers['fangshuai'] = getToken()
	}
	return config;
}, error => {  // 方便调试
	console.log(error);
	promise.reject(error);
});

// response interceptor
service.interceptors.response.use(response => {
	const res = response.data;
	if(res.errno === 501 ){
		MessageBox.alert('系统未登录，请重新登录', '未登录', {
			confirmButtonText: '确定',
			type: 'error'
		}).then(() => {
			store.dispatch('FedLogOut').then(() => {
				location.reload();
			})
		});
		return 	Promise.reject('error')
	} else if (res.errno === 502) {
		MessageBox.alert('系统系统内部错误,请联系管理员维护', '错误', {
			confirmButtonText: '确定',
			type: 'error'
		});
		return Promise.reject('error')
	}else if (res.errno === 503){
		MessageBox.alert('请求业务目前位支持', '警告', {
			confirmButtonText: '确定',
			type: 'error'
		});
		return Promise.reject(response)
	}else if (res.errno!== 0){
		return Promise.reject(response)
	}else {
		return response;
	}
}, error => {
	console.log('err' + error); // for debug
	Message({
		message: '登录连接超时（后台不能连接，请联系系统管理员）',
		type: 'error',
		duration: 5 * 1000
	})
});

export default service;