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
        data: ['最高值', '最低值', '平均值'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
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
            name: '最高值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: { normal: {} },
            data: [40, 50, 30, 90, 65, 69, 90],
        },
        {
            name: '最低值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: { normal: {} },
            data: [10, 5, 30, 45, 23, 39, 17],
        },
        {
            name: '平均值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                },
            },
            areaStyle: { normal: {} },
            data: [79, 68, 56, 74, 89, 98, 84],
        },
    ],
};