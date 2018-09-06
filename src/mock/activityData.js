export default {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    grid: {
        left: '2%',
        right: '5%',
        bottom: '3%',
        top: '20%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
        },
    ],
    yAxis: [
        {
            name: '活跃度',
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
        },
    ],
    series: [
        {
            // name: '平均值',
            type: 'line',
            smooth: true,
            // showSymbol: false,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
            },
            data: [79, 68, 56, 74, 89, 98, 84],
        },
    ],
}