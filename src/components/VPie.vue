<template>
  <div :id="id" class="ec-container"></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, watch } from '@vue/composition-api'
export default {
  name: 'VPie',
  props: {
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
    const data = props.data
    option.legend = Object.assign(option.legend, props.legend)
    option.series[0].data = []
    option.series[0].data = props.data

    let myChart = null
    onMounted(() => {
      myChart = echarts.init(document.getElementById(props.id))
      myChart.setOption(option)
    })
    watch(data, () => {
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
