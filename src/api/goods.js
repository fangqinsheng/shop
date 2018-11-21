import req from '@/utils/request';

export function listGoods(query){
	return req({
		url: '/goods/list',
		method: 'get',
		params: query
	})
}

export function goodsDelete(data){
	return req({
		url: '/goods/delete',
		method: 'post',
		data
	})
}