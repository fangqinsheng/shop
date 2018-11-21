import Mock from 'mockjs'
import goodsAPI from './api/goods';

// Mock.setup({
// 	timeout: 1000
// });

Mock.mock('/goods/list' , 'get', goodsAPI.goodsList());
// Mock.mock(/\/goods\/publish/ , 'get', goodsAPI.goodsAdd());
// Mock.mock(/\/goods\/list/ , 'get', goodsAPI.goodsList());
// Mock.mock(/\/goods\/list/ , 'get', goodsAPI.goodsList());

export default Mock
