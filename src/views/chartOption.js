export const pieOption = {
  title: {
    text: '',
    subtext: '',
    left: '5%',
    top: '5%',
  },
  color: ['#49B6FF', '#FF7B8F', '#FB8F67', '#48D4BB'],
  tooltip: {
    trigger: 'item',
    formatter(params) {
      return `${params.seriesName}<br />${params.marker}${params.data.name} ${params.data.value} ${params.percent}%`
    },
  },
  legend: {
    orient: 'vertical',
    top: 'middle',
    right: '15%',
    icon: 'pin',
  },
  series: [
    {
      type: 'pie',
      radius: '50%',
      center: ['35%', '50%'],
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}
