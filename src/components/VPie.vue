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
    // option.series[0].data = []
    /* eslint-disable */
    function getPieLegend() {
      if (
        option.legend.showValue === undefined ||
        option.legend.showValue === true
      ) {
        option.legend.formatter = (name) => {
          let legendData = data.filter((item) => item.name === name)
          return name + '  ' + legendData[0].value
        }
      }
    }

    option.series[0].data = props.data

    let myChart = null
    onMounted(() => {
      myChart = echarts.init(document.getElementById(props.id))
      myChart.setOption(option)
    })
    watch(data, () => {
      getPieLegend()
      myChart.setOption(option)
    })
  },
  render() {
    return (<div id={this.id} class="ec-container"></div>)
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
