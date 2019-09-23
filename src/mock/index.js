import Mock from 'mockjs';

Mock.mock(/\/user\/login/, 'post', require('./json/login'));

export default Mock;
