<template>
  <div class="home">
    <button @click="handleClick">handleClick</button>
    <div class="wrapper">
      <v-ring
        id="pie"
        :chartSetting="ringSetting"
        :data="pieData"
        :option="pieOption2"
      ></v-ring>
      <v-pie
        id="pie1"
        :data="pieData"
        :option="pieOption1"
        :legend="legend"
      ></v-pie>
    </div>
  </div>
</template>

<script>
import VPie from '../components/VPie.vue'
import { pieOption } from './chartOption'
import { onMounted, reactive } from '@vue/composition-api'
import { cloneDeep } from 'lodash-es'
import VRing from '../components/VRing.vue'
let pieOption1 = cloneDeep(pieOption),
  pieOption2 = cloneDeep(pieOption)
pieOption1.series[0].radius = '50%'
pieOption2.series[0].radius = ['40%', '50%']
export default {
  // eslint-disable-next-line
  components: { VPie, VRing },
  name: 'Home',
  data() {
    // this.legend = {
    //   icon: 'rect',
    // }
    return {
      // legend: {
      //   icon: 'rect',
      // },
    }
  },
  setup() {
    let pieData = reactive([])
    let ringSetting = {
      limitShowNum: 2,
    }
    function init() {
      let arr = [
        { value: 1048, name: '门急诊' },
        { value: 735, name: '住院' },
        { value: 235, name: '123' },
        { value: 535, name: '456' },
        { value: 100, name: '789' },
      ]
      pieData.push(...arr)
    }

    function handleClick() {
      let arr = [
        { value: 666, name: '123' },
        { value: 735, name: '456' },
      ]
      // 清空数组
      // pieData.pop()
      // pieData.pop()
      pieData.splice(0)
      pieData.push(...arr)
    }
    onMounted(() => {
      init()
    })
    return {
      pieData,
      pieOption1,
      pieOption2,
      ringSetting,
      handleClick,
      legend: {
        icon: 'pin',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 800px;
  height: 600px;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
</style>
