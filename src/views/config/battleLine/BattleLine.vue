<!-- =========================================================================================
  阵法表
========================================================================================== -->

<template>
    <div>
        <vs-row vs-type="flex">
          <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2"></vs-col>
          <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
            <vs-table :data="battleLineList" stripe search :max-items="battleLineList.length">
              <template slot="thead">
                <vs-th sort-key="name">战阵等级</vs-th>
                <vs-th sort-key="coupon">战功券</vs-th>
                <vs-th sort-key="lines">战纹</vs-th>
                <vs-th sort-key="multiple">暴击倍数</vs-th>
              </template>
              <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="tr.name"> {{ tr.name }} </vs-td>
                  <vs-td :data="tr.coupon"> {{ tr.coupon }} </vs-td>
                  <vs-td :data="tr.lines"> {{ tr.lines }} </vs-td>
                  <vs-td :data="tr.multiple"> {{ tr.multiple }} </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </vs-col>
          <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2"></vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      battleLineList:[
        {name: '一阶', coupon: 500, lines: 0, multiple: '0'},
        {name: '二阶', coupon: 100, lines: 190, multiple: '1'},
        {name: '三阶', coupon: 100, lines: 820, multiple: '1,2'},
        {name: '四阶', coupon: 100, lines: 1780, multiple: '1,2,5'},
        {name: '五阶', coupon: 100, lines: 3460, multiple: '1,2,5,9'},
        {name: '六阶', coupon: 100, lines: 5950, multiple: '1,2,5,9,16'},
        {name: '七阶', coupon: 100, lines: 9410, multiple: '1,2,5,9,16,32'},
        {name: '八阶', coupon: 100, lines: 13260, multiple: '1,2,5,9,16,32,64'},
        {name: '九阶', coupon: 100, lines: 21950, multiple: '1,2,5,9,16,32,64,90'},
        {name: '十阶', coupon: 100, lines: 32100, multiple: '1,2,5,9,16,32,64,90'}
      ]
    }
  }
}
</script>

<style scoped>

</style>