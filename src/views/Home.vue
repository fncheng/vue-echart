<template>
  <div class="home">
    <button @click="handleClick">handleClick</button>
    <v-pie id="pie" :data="pieData" :option="pieOption"></v-pie>
  </div>
</template>

<script>
import VPie from '../components/VPie.vue'
import { pieOption } from './chartOption'
import { onMounted, reactive } from '@vue/composition-api'
export default {
  components: { VPie },
  name: 'Home',
  setup() {
    let pieData = reactive([])

    function init() {
      let arr = [
        { value: 1048, name: '门急诊' },
        { value: 735, name: '住院' },
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
    return { pieData, pieOption, handleClick }
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 600px;
  height: 600px;
}
</style>
