import echarts from 'echarts'
export default {
    tooltip: {
        formatter: '{a} <br/>{c} {b}',
    },
    series: [
        {
            name: '转速',
            type: 'gauge',
            center: ['50%', '90%'], // 默认全局居中
            radius: '150%',
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            splitNumber: 4,
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    width: 8,
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: '#ae3df6',
                                },
                                {
                                    offset: 1,
                                    color: '#53bef9',
                                },
                            ]),
                        ],
                        [1, '#222e7d'],
                    ],
                },
            },
            axisTick: {
                // 坐标轴小标记
                length: 12, // 属性length控制线长
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: 'auto',
                },
            },
            splitLine: {
                // 分隔线
                length: 20, // 属性length控制线长
                lineStyle: {
                    // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto',
                },
            },
            pointer: {
                width: 5,
            },
            title: {
                offsetCenter: [0, 0], // x, y，单位px
            },
            detail: { formatter: '{value}%', show: false },
            data: [{ value: 80, name: '' }],
        },
    ],
};