import Mock from 'mockjs';
import data from './userMock'
Mock.setup({
    timeout: 400
})
Mock.mock('/user/login', 'post', data.user)
Mock.mock('/api/test', 'post', data.test)

export default Mock