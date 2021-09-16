<template>
  <div :id="id" class="ec-container"></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, reactive, watch } from '@vue/composition-api'
export default {
  name: 'VueChart',
  props: {
    data: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const option = reactive(props.data)
    let myChart = null
    onMounted(() => {
      myChart = echarts.init(document.getElementById(props.id))
      myChart.setOption(option)
    })
    watch(option, (newVal) => {
      myChart.setOption(newVal)
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
