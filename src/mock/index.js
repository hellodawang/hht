import Mock from 'mockjs';
import data from './userMock'
Mock.setup({
    timeout: 400
})
Mock.mock('/api/user','get',data.user)
Mock.mock('/api/test','post',data.test)

 export default Mock