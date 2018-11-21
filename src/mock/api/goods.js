import Mock from 'mockjs';
import resAPI from '../res';

function goodsList() {
	const goods = [];
	const count = 100;
	const Random = Mock.Random;

	for (let i = 0; i < count; i++) {
		goods.push({
			recipeId: Random.guid(),
			billId: Random.string(10),
			orgId: Random.string('number', 8, 10),
			viewName: Random.cword(4, 16), // 随机生成任意名称
			personName: Random.cname(),
			reason: Random.csentence(10, 32),
		})
	}
	return {
		data: {
			form: goods
		}
	}
}

export default {
	goodsList
};
// console.log(goods);

// export default {
// 	goodsList: () => {
// 		return resAPI.ok({
// 			data: goods
// 		})
// 	},
// 	updateGoods: () => {
// 		return resAPI.ok()
// 	},
// 	deleteGoods: () => {
// 		return resAPI.ok()
// 	},
// 	goodsAdd: () => {
// 		return resAPI.ok()
// 	}
// }

