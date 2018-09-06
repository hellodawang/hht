export default {
    title: {
        text: 'top5客户设备数',
        // subtext: '35560',
        x: 'center',
    },
    grid: {
        top: '20',
        width: '90%',
        bottom: '3%',
        left: 10,
        containLabel: true,
    },
    yAxis: [
        {
            type: 'category',
            data: [
                '上海精锐教育培训有限公司',
                '深圳市海陵生物科技有限公司',
                '中国铝业',
                '昆明工口科技有限公司',
                '深圳市超网科技有限公司',
            ],
            axisLine: {
                //y轴
                show: false,
            },
            axisTick: {
                //y轴刻度线
                show: false,
            },
            splitLine: {
                //网格线
                show: false,
            },
        },
    ],
    xAxis: [
        {
            type: 'value',
            axisLine: {
                //y轴
                show: false,
            },
            axisTick: {
                //y轴刻度线
                show: false,
            },
            splitLine: {
                //网格线
                show: false,
            },
            show: false,
        },
    ],
    series: [
        {
            name: '教育',
            type: 'bar',
            data: [320, 332, 301, 334, 390],
            // barGap:'50%',
            barCategoryGap: '10%',
            barWidth: 12,
            label: {
                normal: {
                    show: true,
                    // formatter: '{b}'
                },
            },
            itemStyle: {
                normal: {
                    color: '#f5aba3',
                },
            },
        },
    ],
};