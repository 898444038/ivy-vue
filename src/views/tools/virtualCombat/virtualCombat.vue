<!-- =========================================================================================
  虚战力查询
========================================================================================== -->

<template>
  <div class="combat-content">
    <vs-row vs-type="flex" vs-justify="center" style="margin-bottom:30px;">
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="2"></vs-col>
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="7">
        <v-select multiple class="flex-end-select w-full mt-6" placeholder="请选择武将" v-model="select_general" :options="generalList"></v-select>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="3">
        <vs-button @click="query" class="btn-margin" size="small" type="relief" style="height: 37px;margin-left: 10px;margin-top: 21px;">查询</vs-button>
        <vs-button @click="reset" class="btn-margin" size="small" color="warning" type="relief" style="height: 37px;margin-left: 10px;margin-top: 21px;">重置</vs-button>
      </vs-col>
    </vs-row>
    <div class="vx-row">
      <div class="vx-col w-full md:w-2/5 lg:w-1/4 rounded-lg">
        <vx-card>
          <h4>查询条件</h4>
          <vs-divider></vs-divider>
          <ul class="centerx">
            <li><vs-radio v-model="form.type" vs-value="1">仅包含选择的武将</vs-radio></li>
            <li><vs-radio v-model="form.type" vs-value="2">包含部分选择的武将</vs-radio></li>
            <!-- <li><vs-radio v-model="form.type" vs-value="0">全部武将</vs-radio></li> -->
          </ul>
          <vs-divider></vs-divider>
          <div>
            <vs-input-number min="10" max="100" v-model="form.size" label="结果条数：" style="width: max-content;"/>
          </div>
        </vx-card>
        <vx-card style="margin-top:20px;">
          <h4>结果筛选</h4>
          <ul class="faq-topics mt-4">
            <li v-for="category in categories" :key="category.id" class="p-2 font-medium flex items-center" @click="faqFilter = category.id">
              <div class="h-3 w-3 rounded-full mr-2" :class="'bg-' + category.color"></div><span class="cursor-pointer">{{ category.name }}</span>
            </li>
          </ul>
        </vx-card>
      </div>

      <!-- FAQ COL -->
      <div class="vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0">
        <vs-collapse type="margin" class="p-0">
          <vs-collapse-item v-for="(que,index) in filteredFaq" style="background-color: #fff;" class="faq-bg rounded-lg" :class="{'mt-0': !index}" :key="que.id">
            <div slot="header">
              <h5>
                <vs-chip class="rank" size="small" color="primary">{{ que.rank }}</vs-chip>
                <span>{{ que.totalCombat }}</span>
                <span style="margin-left: 16px;">{{ que.title }}</span>
              </h5>
            </div>
            <p>
              <vs-table :data="que.itemList" search >
                <template slot="header"><h3>武将信息</h3></template>
                <template slot="thead">
                  <vs-th>武将名称</vs-th>
                  <vs-th>国家</vs-th>
                  <vs-th>兵种</vs-th>
                  <vs-th>性别</vs-th>
                  <vs-th>总武力</vs-th>
                  <vs-th>总智力</vs-th>
                  <vs-th>总兵力</vs-th>
                  <vs-th>总战力</vs-th>
                  <vs-th>战意</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="td-center-0" :data="tr.generalNamex"> {{ tr.generalNamex }} </vs-td>
                    <vs-td :data="tr.countryName"> {{ tr.countryName }} </vs-td>
                    <vs-td :data="tr.armsName"> {{ tr.armsName }} </vs-td>
                    <vs-td :data="tr.genderName"> {{ tr.genderName }} </vs-td>
                    <vs-td :data="tr.force"> {{ tr.force }} </vs-td>
                    <vs-td :data="tr.intellect"> {{ tr.intellect }} </vs-td>
                    <vs-td :data="tr.troops"> {{ tr.troops }} </vs-td>
                    <vs-td :data="tr.combat"> {{ tr.combat }} </vs-td>
                    <vs-td :data="tr.warpathName"> {{ tr.warpathName }} </vs-td>
                  </vs-tr>
                </template>
              </vs-table>

              <vs-table :data="que.itemList" search >
                <template slot="header"><h3>三维属性</h3></template>
                <template slot="thead">
                  <vs-th style="width: 80px;">武将名称</vs-th>
                  <vs-th>基础三维</vs-th>
                  <vs-th>科技三维</vs-th>
                  <vs-th>随从三维</vs-th>
                  <vs-th>四圣石三维</vs-th>
                  <vs-th>战器三维</vs-th>
                  <vs-th>兵种三维</vs-th>
                  <vs-th>将魂三维</vs-th>
                  <vs-th>兵符三维</vs-th>
                  <vs-th>战阵三维</vs-th>
                  <vs-th>战意三维</vs-th>
                  <vs-th>命格突破</vs-th>
                  <vs-th>幻化三维</vs-th>
                  <vs-th>阵法三维</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="td-center-0" :data="tr.generalNamex"> {{ tr.generalNamex }} </vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c">{{ tr.f }}/{{ tr.i }}/{{ tr.t }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c5">{{ tr.f5 }}/{{ tr.i5 }}/{{ tr.t5 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c22">{{ tr.f22 }}/{{ tr.i22 }}/{{ tr.t22 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c6">{{ tr.f6 }}/{{ tr.i6 }}/{{ tr.t6 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c7">{{ tr.f7 }}/{{ tr.i7 }}/{{ tr.t7 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c9">{{ tr.f9 }}/{{ tr.i9 }}/{{ tr.t9 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c15">{{ tr.f15 }}/{{ tr.i15 }}/{{ tr.t15 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c28">{{ tr.f28 }}/{{ tr.i28 }}/{{ tr.t28 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c17">{{ tr.f17 }}/{{ tr.i17 }}/{{ tr.t17 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c21">{{ tr.f21 }}/{{ tr.i21 }}/{{ tr.t21 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c18">{{ tr.f18 }}/{{ tr.i18 }}/{{ tr.t18 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c19">{{ tr.f19 }}/{{ tr.i19 }}/{{ tr.t19 }}</vx-tooltip></vs-td>
                    <vs-td><vx-tooltip delay=".5s" :text="tr.c20">{{ tr.f20 }}/{{ tr.i20 }}/{{ tr.t20 }}</vx-tooltip></vs-td>
                  </vs-tr>
                </template>
              </vs-table>

              <vs-table :data="que.itemList" search >
                <template slot="header"><h3>随从</h3></template>
                <template slot="thead">
                  <vs-th>武将名称</vs-th>
                  <vs-th>武随</vs-th>
                  <vs-th>智随</vs-th>
                  <vs-th>兵随</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="td-center-0" :data="tr.generalNamex"> {{ tr.generalNamex }} </vs-td>
                    <vs-td :data="tr.forceEntourage"> {{ tr.forceEntourage }} </vs-td>
                    <vs-td :data="tr.intellectEntourage"> {{ tr.intellectEntourage }} </vs-td>
                    <vs-td :data="tr.troopsEntourage"> {{ tr.troopsEntourage }} </vs-td>
                  </vs-tr>
                </template>
              </vs-table>

              <vs-table :data="que.itemList" search >
                <template slot="header"><h3>战器</h3></template>
                <template slot="thead">
                  <vs-th>武将名称</vs-th>
                  <vs-th>战器名称</vs-th>
                  <vs-th>战器基础三维</vs-th>
                  <vs-th>战器强化三维</vs-th>
                  <vs-th>战器淬炼三维</vs-th>
                  <vs-th>战器专属三维</vs-th>
                  <vs-th>战器淬炼效果1/战器淬炼效果2</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="td-center-0" :data="tr.generalNamex"> {{ tr.generalNamex }} </vs-td>
                    <vs-td> {{ tr.weaponName }} </vs-td>
                    <vs-td> {{ tr.weaponBaseThree }} </vs-td>
                    <vs-td> {{ tr.weaponStrengthenThree }} </vs-td>
                    <vs-td> {{ tr.weaponQuenchingThree }} </vs-td>
                    <vs-td> {{ tr.weaponExclusiveThree }} </vs-td>
                    <vs-td> {{ tr.weaponQuenchingName }} </vs-td>
                  </vs-tr>
                </template>
              </vs-table>

              <vs-table :data="que.symbolList" search >
                <template slot="header"><h3>兵符</h3></template>
                <template slot="thead">
                  <vs-th>兵符类型名称</vs-th>
                  <vs-th>兵符主属性</vs-th>
                  <vs-th>兵符副属性1</vs-th>
                  <vs-th>兵符副属性2</vs-th>
                  <vs-th>兵符副属性3</vs-th>
                  <vs-th>兵符副属性4</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="tr.typeName"> {{ tr.typeName }} </vs-td>
                    <vs-td :data="tr.mainName"> {{ tr.mainName }} </vs-td>
                    <vs-td :data="tr.secondName1"> {{ tr.secondName1 }} </vs-td>
                    <vs-td :data="tr.secondName2"> {{ tr.secondName2 }} </vs-td>
                    <vs-td :data="tr.secondName3"> {{ tr.secondName3 }} </vs-td>
                    <vs-td :data="tr.secondName4"> {{ tr.secondName4 }} </vs-td>
                  </vs-tr>
                </template>
              </vs-table>

              <vs-table :data="que.itemList" search >
                <template slot="header"><h5>工坊战力：{{que.workshopCombat}}</h5></template>
                <template slot="thead">
                  <vs-th>武将名称</vs-th>
                  <vs-th>战器被动战力</vs-th>
                  <vs-th>命格被动战力</vs-th>
                  <vs-th>阵法被动战力</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="td-center-0" :data="tr.generalNamex"> {{ tr.generalNamex }} </vs-td>
                    <vs-td :data="tr.passiveCombat1"> {{ tr.passiveCombat1 }} </vs-td>
                    <vs-td :data="tr.passiveCombat2"> {{ tr.passiveCombat2 }} </vs-td>
                    <vs-td :data="tr.passiveCombat3"> {{ tr.passiveCombat3 }} </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </p>
          </vs-collapse-item>
        </vs-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    'v-select': vSelect
  },
  data () {
    return {
      generalUrl: '/ppsg/general/virtualCombat/list',
      queryUrl: '/ppsg/general/virtualCombat/query',
      generalList: [],
      form: {
        type: '1',
        size: '10'
      },
      select_general: [],
      categories: [
        {
          id: 1,
          name: 'All',
          color: 'grey'
        },
        {
          id: 2,
          name: 'General',
          color: 'primary'
        },
        {
          id: 3,
          name: 'General',
          color: 'success'
        },
        {
          id: 4,
          name: 'General',
          color: 'warning'
        },
        {
          id: 5,
          name: 'General',
          color: 'danger'
        }
      ],
      faqSearchQuery: '',
      faqFilter: 0,
      faqs: []
    }
  },
  computed: {
    filteredFaq () {
      // return this.faqs.filter((faq) => {
      //   if (this.faqFilter === 0) {
      //     return faq.question.toLowerCase().includes('') || faq.ans.toLowerCase().includes('')
      //   } else if (this.faqFilter === 1) return faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase())
      //   else if (this.faqFilter === 2) return faq.categoryId === 2 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()))
      //   else if (this.faqFilter === 3) return faq.categoryId === 3 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()))
      //   else if (this.faqFilter === 4) return faq.categoryId === 4 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()))
      //   else if (this.faqFilter === 5) return faq.categoryId === 5 && (faq.question.toLowerCase().includes(this.faqSearchQuery.toLowerCase()) || faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase()))
      // })
      return this.faqs
    }
  },
  mounted () {
    this.getGeneralList()
    this.select_general = [
      {'label': '砺战赵云', 'value':2},
      {'label': '桀骜孙策', 'value':3},
      {'label': '飞将吕布', 'value':4},
      {'label': '灵雎吕姬', 'value':5},
      {'label': '御甲张辽', 'value':6}
    ]
  },
  methods:{
    getGeneralList () {
      const _this = this
      const params = {}
      _this.$http.post(_this.generalUrl, params).then(response => {
        if (response.data.code === 1) {
          _this.generalList = response.data.data
        }
      }).catch(error => { console.log(error) })
    },
    reset () {
      console.log(JSON.stringify(this.select_general))
      this.select_general = []
    },
    query () {
      const _this = this
      _this.$vs.loading()
      const ids = []
      for (let i = 0; i < _this.select_general.length; i++) {
        ids.push(_this.select_general[i].value)
      }
      const params = {
        ids: ids.join(','),
        type: _this.form.type,
        size: _this.form.size
      }
      //console.log('params', params)
      _this.$http.post(_this.queryUrl, params).then(response => {
        console.log('response', response.data.data)
        if (response.data.code === 1) {
          _this.faqs = response.data.data
          _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'success' })
        } else {
          _this.faqs = []
          _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger' })
        }
        _this.$vs.loading.close()
      }).catch(error => { console.log(error); _this.$vs.loading.close() })
    }
  }
}
</script>

<style>
.td-center-0 span{
  width: 80px;
  display: inline-block;
}
</style>

<style scoped>
.combat-content{
  height:500px;
}
.rank{
  position: relative;
  top: -5px;
  margin-right: 10px;
}
.td-center{
  text-align: center;
}
.td-center-0 span{
  width: 80px;
  display: inline-block;
}
</style>