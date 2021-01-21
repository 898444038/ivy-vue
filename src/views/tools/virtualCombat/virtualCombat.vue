<!-- =========================================================================================
  虚战力查询
========================================================================================== -->

<template>
  <div>
    <vs-row vs-type="flex" vs-justify="center" style="margin-bottom:30px;">
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
        <v-select multiple class="flex-end-select" placeholder="请选择武将" v-model="select_general" :options="generalList"></v-select>
        <vs-button @click="query" class="btn-margin" type="relief" color="danger">查询</vs-button>
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