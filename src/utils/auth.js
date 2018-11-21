import Cookies from "js-cookie";

const TokenKey = 'fangshuai';

// 把token值传入cookie中
export function getToken() {
	return Cookies.get(TokenKey)
}

export function setToken(token) {
	return Cookies.set(TokenKey, token)
}

export function removeToken() {
	return Cookies.remove(TokenKey)
}
