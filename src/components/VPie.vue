<template>
  <div :id="id" class="ec-container"></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, reactive, watch } from '@vue/composition-api'
export default {
  name: 'VPie',
  props: {
    data: {
      type: Array,
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
    const option = reactive(props.option)
    const data = reactive(props.data)
    option.series[0].data = []
    option.series[0].data = props.data
    option.legend.formatter = (name) => {
      let legendData = props.data.filter((item) => item.name === name)
      // console.log('legendData: ', legendData)
      return name + '  ' + legendData[0].value
    }
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
