import Mock from 'mockjs';

Mock.setup({
    timeout: 400
})

Mock.mock('/news', 'post', (param) => {
    console.log(Mock)
    return {
        code: 0,
        data: {
          total: 1,
          users: 1
        }
      }
})
// Mock.mock('/api/test', 'post', data.test)

export default Mock