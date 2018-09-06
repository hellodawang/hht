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
    legend: {
        data: ['cpu', '内存'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '10%',
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
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
        },
    ],
    series: [
        {
            name: 'cpu',
            type: 'line',
            stack: '总量',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: '#c23531',
                },
            },
            showSymbol: false,
            // areaStyle: {normal: {}},
            data: [40, 50, 30, 90, 65, 69, 90],
        },
        {
            name: '内存',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: '#93d6ca',
                },
            },
            showSymbol: false,
            // areaStyle: {normal: {}},
            data: [10, 5, 30, 45, 23, 39, 17],
        },
    ],
};