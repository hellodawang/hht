import Mock from 'mockjs'

export default {
    user: () => ({
        code: 1,
        // data: {
        //     id: 1,
        //     sex: 1,
        //     age: 25,
        //     createTime: '2017-04-01'
        // },
        message: '查询成功'
    }),
    test: () => ({
        code: 200,
        data: [{
            id: 1,
            licNumber: '陕A79898',
            color: 1,
            buyTime: '2017-04-01'

        }, {
            id: 1,
            licNumber: '陕A79898',
            color: 1,
            buyTime: '2017-04-01'

        }],
        message: '查询成功'
    })
}