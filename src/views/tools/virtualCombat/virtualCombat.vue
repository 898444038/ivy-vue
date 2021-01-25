<!-- =========================================================================================
  虚战力查询
========================================================================================== -->

<template>
  <div>
    <!-- <div id="faq-page">
      <div class="faq-jumbotron">
        <div class="faq-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
          <h1 class="mb-1 text-white">虚战力查询</h1>
          <p class="text-white">Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer.</p>
          <vs-input placeholder="Search" v-model="faqSearchQuery" icon-pack="feather" icon="icon-search" size="large" class="w-full mt-6" icon-no-border />
        </div>
      </div>
    </div> -->
    <vs-row vs-type="flex" vs-justify="center" style="margin-bottom:30px;">
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="2"></vs-col>
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="7">
        <v-select multiple class="flex-end-select w-full mt-6" placeholder="请选择武将" v-model="select_general" :options="generalList"></v-select>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="3">
        <vs-button @click="query" class="btn-margin" size="small" type="relief" style="height: 37px;margin-left: 10px;margin-top: 21px;">查询</vs-button>
      </vs-col>
    </vs-row>
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
      select_general: []
    }
  },
  mounted () {
    this.getGeneralList()
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
    query () {
      const _this = this
      const ids = []
      for (let i = 0; i < _this.select_general.length; i++) {
        ids.push(_this.select_general[i].value)
      }
      const params = {
        ids: ids.join(',')
      }
      //console.log('params', params)
      _this.$http.post(_this.queryUrl, params).then(response => {
        console.log('response', response.data.data)
        if (response.data.code === 1) {
          _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'success' })
        } else {
          _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger' })
        }
      }).catch(error => { console.log(error) })
    }
  }
}
</script>

<style scoped>

</style>