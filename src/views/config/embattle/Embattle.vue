<!-- =========================================================================================
  阵法表
========================================================================================== -->

<template>
    <div class="mt-5">
    <vs-tabs alignment="center">
      <vs-tab label="龙飞阵">
        <div>
            <vs-table :data="long_fei_list" stripe search :max-items="long_fei_list.length">
                <template slot="thead">
                    <vs-th sort-key="name">名称</vs-th>
                    <vs-th sort-key="force">武力</vs-th>
                    <vs-th sort-key="intellect">智力</vs-th>
                    <vs-th sort-key="troops">兵力</vs-th>
                    <vs-th sort-key="book">阵法书</vs-th>
                    <vs-th sort-key="volume">阵法残卷</vs-th>
                    <vs-th sort-key="skill">技能</vs-th>
                </template>
                <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="tr.name"> {{ tr.name }} </vs-td>
                    <vs-td :data="tr.force"> 
                        {{ tr.force }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ tr.force_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="tr.intellect"> 
                        {{ tr.intellect }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ tr.intellect_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="tr.troops"> 
                        {{ tr.troops }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ tr.troops_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="tr.book"> {{ tr.book }} </vs-td>
                    <vs-td :data="tr.volume"> {{ tr.volume }} </vs-td>
                    <vs-td :data="tr.skill"> {{ tr.skill }} </vs-td>
                </vs-tr>
                </template>
            </vs-table>
        </div>
      </vs-tab>
      <vs-tab label="虎翼阵">
        <div>
            <vs-table :data="hu_yi_list" stripe search :max-items="hu_yi_list.length">
                <template slot="thead">
                    <vs-th sort-key="name">名称</vs-th>
                    <vs-th sort-key="force">武力</vs-th>
                    <vs-th sort-key="intellect">智力</vs-th>
                    <vs-th sort-key="troops">兵力</vs-th>
                    <vs-th sort-key="book">阵法书</vs-th>
                    <vs-th sort-key="volume">阵法残卷</vs-th>
                    <vs-th sort-key="skill">技能</vs-th>
                </template>
                <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name"> {{ data[indextr].name }} </vs-td>
                    <vs-td :data="data[indextr].force"> 
                        {{ data[indextr].force }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].force_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].intellect"> 
                        {{ data[indextr].intellect }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].intellect_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].troops"> 
                        {{ data[indextr].troops }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].troops_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].book"> {{ data[indextr].book }} </vs-td>
                    <vs-td :data="data[indextr].volume"> {{ data[indextr].volume }} </vs-td>
                    <vs-td :data="data[indextr].skill"> {{ data[indextr].skill }} </vs-td>
                </vs-tr>
                </template>
            </vs-table>
        </div>
      </vs-tab>
      <vs-tab label="鸟翔阵">
        <div>
            <vs-table :data="niao_xiang_list" stripe search :max-items="niao_xiang_list.length">
                <template slot="thead">
                    <vs-th sort-key="name">名称</vs-th>
                    <vs-th sort-key="force">武力</vs-th>
                    <vs-th sort-key="intellect">智力</vs-th>
                    <vs-th sort-key="troops">兵力</vs-th>
                    <vs-th sort-key="book">阵法书</vs-th>
                    <vs-th sort-key="volume">阵法残卷</vs-th>
                    <vs-th sort-key="skill">技能</vs-th>
                </template>
                <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name"> {{ data[indextr].name }} </vs-td>
                    <vs-td :data="data[indextr].force"> 
                        {{ data[indextr].force }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].force_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].intellect"> 
                        {{ data[indextr].intellect }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].intellect_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].troops"> 
                        {{ data[indextr].troops }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].troops_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].book"> {{ data[indextr].book }} </vs-td>
                    <vs-td :data="data[indextr].volume"> {{ data[indextr].volume }} </vs-td>
                    <vs-td :data="data[indextr].skill"> {{ data[indextr].skill }} </vs-td>
                </vs-tr>
                </template>
            </vs-table>
        </div>
      </vs-tab>
      <vs-tab label="蛇蟠阵">
        <div>
            <vs-table :data="she_pan_list" stripe search :max-items="she_pan_list.length">
                <template slot="thead">
                    <vs-th sort-key="name">名称</vs-th>
                    <vs-th sort-key="force">武力</vs-th>
                    <vs-th sort-key="intellect">智力</vs-th>
                    <vs-th sort-key="troops">兵力</vs-th>
                    <vs-th sort-key="book">阵法书</vs-th>
                    <vs-th sort-key="volume">阵法残卷</vs-th>
                    <vs-th sort-key="skill">技能</vs-th>
                </template>
                <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name"> {{ data[indextr].name }} </vs-td>
                    <vs-td :data="data[indextr].force"> 
                        {{ data[indextr].force }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].force_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].intellect"> 
                        {{ data[indextr].intellect }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].intellect_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].troops"> 
                        {{ data[indextr].troops }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].troops_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].book"> {{ data[indextr].book }} </vs-td>
                    <vs-td :data="data[indextr].volume"> {{ data[indextr].volume }} </vs-td>
                    <vs-td :data="data[indextr].skill"> {{ data[indextr].skill }} </vs-td>
                </vs-tr>
                </template>
            </vs-table>
        </div>
      </vs-tab>
      <vs-tab label="火牛阵">
        <div>
            <vs-table :data="huo_niu_list" stripe search :max-items="huo_niu_list.length">
                <template slot="thead">
                    <vs-th sort-key="name">名称</vs-th>
                    <vs-th sort-key="force">武力</vs-th>
                    <vs-th sort-key="intellect">智力</vs-th>
                    <vs-th sort-key="troops">兵力</vs-th>
                    <vs-th sort-key="book">阵法书</vs-th>
                    <vs-th sort-key="volume">阵法残卷</vs-th>
                    <vs-th sort-key="skill">技能</vs-th>
                </template>
                <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name"> {{ data[indextr].name }} </vs-td>
                    <vs-td :data="data[indextr].force"> 
                        {{ data[indextr].force }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].force_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].intellect"> 
                        {{ data[indextr].intellect }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].intellect_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].troops"> 
                        {{ data[indextr].troops }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].troops_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].book"> {{ data[indextr].book }} </vs-td>
                    <vs-td :data="data[indextr].volume"> {{ data[indextr].volume }} </vs-td>
                    <vs-td :data="data[indextr].skill"> {{ data[indextr].skill }} </vs-td>
                </vs-tr>
                </template>
            </vs-table>
        </div>
      </vs-tab>
      <vs-tab label="鹤翼阵">
        <div>
            <vs-table :data="he_yi_list" stripe search :max-items="he_yi_list.length">
                <template slot="thead">
                    <vs-th sort-key="name">名称</vs-th>
                    <vs-th sort-key="force">武力</vs-th>
                    <vs-th sort-key="intellect">智力</vs-th>
                    <vs-th sort-key="troops">兵力</vs-th>
                    <vs-th sort-key="book">阵法书</vs-th>
                    <vs-th sort-key="volume">阵法残卷</vs-th>
                    <vs-th sort-key="skill">技能</vs-th>
                </template>
                <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="data[indextr].name"> {{ data[indextr].name }} </vs-td>
                    <vs-td :data="data[indextr].force"> 
                        {{ data[indextr].force }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].force_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].intellect"> 
                        {{ data[indextr].intellect }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].intellect_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].troops"> 
                        {{ data[indextr].troops }} 
                        <feather-icon icon="ArrowUpIcon" style="color: #25bb5a;" svgClasses="['text-success'  ,'stroke-current h-4 w-4 mb-1 mr-1']"></feather-icon>
                        <sup>{{ data[indextr].troops_ratio }} </sup>
                    </vs-td>
                    <vs-td :data="data[indextr].book"> {{ data[indextr].book }} </vs-td>
                    <vs-td :data="data[indextr].volume"> {{ data[indextr].volume }} </vs-td>
                    <vs-td :data="data[indextr].skill"> {{ data[indextr].skill }} </vs-td>
                </vs-tr>
                </template>
            </vs-table>
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      template_list: [
        {name: '0阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 1, volume: 0, skill: '震位 LV1'},
        {name: '0阶1级', multiple: 2, force: 0, intellect: 0, troops: 0, book: 0, volume: 100, skill: ''},
        {name: '0阶2级', multiple: 2, force: 0, intellect: 0, troops: 0, book: 0, volume: 172, skill: ''},
        {name: '0阶3级', multiple: 2, force: 0, intellect: 0, troops: 0, book: 0, volume: 262, skill: ''},

        {name: '1阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 2, volume: 0, skill: '离位 LV1'},
        {name: '1阶1级', multiple: 3, force: 0, intellect: 0, troops: 0, book: 0, volume: 365, skill: ''},
        {name: '1阶2级', multiple: 3, force: 0, intellect: 0, troops: 0, book: 0, volume: 477, skill: ''},
        {name: '1阶3级', multiple: 3, force: 0, intellect: 0, troops: 0, book: 0, volume: 597, skill: ''},

        {name: '2阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 4, volume: 0, skill: '兑位 LV1'},
        {name: '2阶1级', multiple: 4, force: 0, intellect: 0, troops: 0, book: 0, volume: 725, skill: ''},
        {name: '2阶2级', multiple: 4, force: 0, intellect: 0, troops: 0, book: 0, volume: 860, skill: ''},
        {name: '2阶3级', multiple: 4, force: 0, intellect: 0, troops: 0, book: 0, volume: 1001, skill: ''},

        {name: '3阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 6, volume: 0, skill: '震位 LV2'},
        {name: '3阶1级', multiple: 5, force: 0, intellect: 0, troops: 0, book: 0, volume: 1148, skill: ''},
        {name: '3阶2级', multiple: 5, force: 0, intellect: 0, troops: 0, book: 0, volume: 1300, skill: ''},
        {name: '3阶3级', multiple: 5, force: 0, intellect: 0, troops: 0, book: 0, volume: 1458, skill: ''},

        {name: '4阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 8, volume: 0, skill: '离位 LV2'},
        {name: '4阶1级', multiple: 6, force: 0, intellect: 0, troops: 0, book: 0, volume: 1621, skill: ''},
        {name: '4阶2级', multiple: 6, force: 0, intellect: 0, troops: 0, book: 0, volume: 1788, skill: ''},
        {name: '4阶3级', multiple: 6, force: 0, intellect: 0, troops: 0, book: 0, volume: 1961, skill: ''},

        {name: '5阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 10, volume: 0, skill: '兑位 LV2'},
        {name: '5阶1级', multiple: 7, force: 0, intellect: 0, troops: 0, book: 0, volume: 2137, skill: ''},
        {name: '5阶2级', multiple: 7, force: 0, intellect: 0, troops: 0, book: 0, volume: 2318, skill: ''},
        {name: '5阶3级', multiple: 7, force: 0, intellect: 0, troops: 0, book: 0, volume: 2503, skill: ''},

        {name: '6阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 12, volume: 0, skill: '坎位 LV1'},
        {name: '6阶1级', multiple: 8, force: 0, intellect: 0, troops: 0, book: 0, volume: 2692, skill: ''},
        {name: '6阶2级', multiple: 8, force: 0, intellect: 0, troops: 0, book: 0, volume: 2885, skill: ''},
        {name: '6阶3级', multiple: 8, force: 0, intellect: 0, troops: 0, book: 0, volume: 3082, skill: ''},

        {name: '7阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 15, volume: 0, skill: '坎位 LV2'},
        {name: '7阶1级', multiple: 9, force: 0, intellect: 0, troops: 0, book: 0, volume: 3283, skill: ''},
        {name: '7阶2级', multiple: 9, force: 0, intellect: 0, troops: 0, book: 0, volume: 3487, skill: ''},
        {name: '7阶3级', multiple: 9, force: 0, intellect: 0, troops: 0, book: 0, volume: 3694, skill: ''},

        {name: '8阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 18, volume: 0, skill: '中位 LV1'},
        {name: '8阶1级', multiple: 10, force: 0, intellect: 0, troops: 0, book: 0, volume: 0, skill: ''},
        {name: '8阶2级', multiple: 10, force: 0, intellect: 0, troops: 0, book: 0, volume: 0, skill: ''},
        {name: '8阶3级', multiple: 10, force: 0, intellect: 0, troops: 0, book: 0, volume: 0, skill: ''},
        
        {name: '9阶0级', multiple: 0, force: 0, intellect: 0, troops: 0, book: 21, volume: 0, skill: '中位 LV2'},
        {name: '9阶1级', multiple: 11, force: 0, intellect: 0, troops: 0, book: 0, volume: 0, skill: ''},
        {name: '9阶2级', multiple: 11, force: 0, intellect: 0, troops: 0, book: 0, volume: 0, skill: ''},
        {name: '9阶3级', multiple: 11, force: 0, intellect: 0, troops: 0, book: 0, volume: 0, skill: ''}
      ],
      long_fei_list: [],
      hu_yi_list: [],
      niao_xiang_list: [],
      she_pan_list: [],
      huo_niu_list: [],
      he_yi_list: [],
      long_fei_ratio: [2, 1, 9],
      hu_yi_ratio: [3, 1, 6],
      niao_xiang_ratio: [1, 3, 6],
      she_pan_ratio: [3, 1, 6],
      huo_niu_ratio: [1, 3, 6],
      he_yi_ratio: [3, 1, 6]
    }
  },
  mounted () {
    this.list(this.long_fei_list, this.long_fei_ratio)
    this.list(this.hu_yi_list, this.hu_yi_ratio)
    this.list(this.niao_xiang_list, this.niao_xiang_ratio)
    this.list(this.she_pan_list, this.she_pan_ratio)
    this.list(this.huo_niu_list, this.huo_niu_ratio)
    this.list(this.he_yi_list, this.he_yi_ratio)
    // console.log('this.long_fei_list', this.long_fei_list)
    // console.log('this.hu_yi_list', this.hu_yi_list)
    // console.log('this.niao_xiang_list', this.niao_xiang_list)
    // console.log('this.she_pan_list', this.she_pan_list)
    // console.log('this.huo_niu_list', this.huo_niu_list)
    // console.log('this.he_yi_list', this.he_yi_list)
  },
  methods:{
    list (list, ratio) {
      const templateList = this.template_list
      let force_add = 0
      let intellect_add = 0
      let troops_add = 0
      for (let i = 0; i < templateList.length; i++) {
        const item = templateList[i]
        const force_ratio = ratio[0] * item.multiple
        const intellect_ratio = ratio[1] * item.multiple
        const troops_ratio = ratio[2] * item.multiple
        force_add += force_ratio
        intellect_add += intellect_ratio
        troops_add += troops_ratio
        list.push({
          name: item.name, 
          multiple: item.multiple, 
          force_ratio, 
          intellect_ratio, 
          troops_ratio, 
          force: force_add, 
          intellect: intellect_add, 
          troops: troops_add, 
          book: item.book, 
          volume: item.volume, 
          skill: item.skill
        })
      }
    }
  }
}
</script>

<style scoped>
sup{color:#10ad47;}
</style>