// api.js
import axios from 'axios';

// 封装ajax 的 fetch
export let fetch = (method, url, data, forceLogin = true) => {
	return new Promise((resolve, reject) => {
		axios({
			...data,
			method: method,
			url: url
		}).then(response => {
			resolve(response.data)
		}).catch(err => {
			reject(err)
		})
	})
};
// 获取用户信息
export let loadUserData = () => {
	return new Promise((resolve, reject) => {
		let user = null;
		let cacheKey = 'authUserJsonStr';
		let authUserJsonStr = sessionStorage.getItem(cacheKey);
		if (authUserJsonStr) {
			user = JSON.parse(sessionStorage.getItem(cacheKey));
			resolve(user)
		} else {
			fetch('GET', '/api/auth_info/', {}, false).then((data) => {
				user = data;
				sessionStorage.setItem(cacheKey, JSON.stringify(user));
				resolve(user)
			}).catch(() => {
				resolve(null)
			})
		}
	})
};
