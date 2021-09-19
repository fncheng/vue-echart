<template>
  <div :id="id" class="ec-container"></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, watch } from '@vue/composition-api'
export default {
  name: 'VRing',
  props: {
    chartSetting: {
      type: Object,
      default: () => ({}),
    },
    data: {
      type: Array,
    },
    legend: {
      type: Object,
    },
    option: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const option = props.option
    let data = props.data
    option.legend = Object.assign(option.legend, props.legend)
    option.series[0].data = []
    option.series[0].data = props.data

    function getPieSeries() {
      const { limitShowNum } = props.chartSetting
      if (limitShowNum && limitShowNum < data.length) {
        const firstData = data
        const remainArr = firstData.slice(limitShowNum)
        let sum = 0
        remainArr.forEach((item) => {
          sum += item.value
        })
        option.series[0].data = firstData.slice(0, limitShowNum)
        option.series[0].data.push({ name: '其他', value: sum })
      } else {
        option.series[0].data = []
        option.series[0].data = props.data
      }
    }
    function getPieTooltip() {
      // const { limitShowNum } = props.chartSetting
      // let sum = 0
      // const remainArr = innerRows
      //   .map((row) => {
      //     sum += row[metrics]
      //     return {
      //       name: row[dimension],
      //       value: row[metrics],
      //     }
      //   })
      //   .slice(limitShowNum, innerRows.length)
      // return {
      //   formatter(item) {
      //     let tpl = []
      //     tpl.push(itemPoint(item.color))
      //     if (limitShowNum && item.name === '其他') {
      //       tpl.push('其他:')
      //       remainArr.forEach(({ name, value }) => {
      //         const percent = getFormated(value / sum, 'percent')
      //         tpl.push(`<br>${name}:`)
      //         tpl.push(getFormated(value, dataType, digit))
      //         tpl.push(`(${percent})`)
      //       })
      //     } else {
      //       tpl.push(`${item.name}:`)
      //       tpl.push(getFormated(item.value, dataType, digit))
      //       tpl.push(`(${item.percent}%)`)
      //     }
      //     return tpl.join(' ')
      //   },
      // }
    }
    let myChart = null
    onMounted(() => {
      myChart = echarts.init(document.getElementById(props.id))
      myChart.setOption(option)
    })
    watch(data, () => {
      getPieSeries()
      getPieTooltip()
      myChart.setOption(option)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ec-container {
  width: 100%;
  height: 100%;
}
</style>
