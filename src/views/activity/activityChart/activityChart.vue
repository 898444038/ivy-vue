<template>
    <div>
        <div class="upload-img mt-5" style="margin-bottom: 20px;">
          <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
          <vs-button @click="$refs.uploadImgInput.click()">上传</vs-button>
        </div>
        
        <vue-viewer 
            v-model="viewer"
            :images="images"
            :zIndex="zIndex"
        ></vue-viewer>
    </div>
  
</template>

<script>
import VueViewer from 'vue-viewerjs'
export default {
  components: {
    VueViewer
  },
  data () {
    return {
      viewer: 0,
      zIndex: 99999,
      images: []
    }
  },
  mounted () {
    this.getActivityList()
  },
  methods:{
    getActivityList () {
      const _this = this
      _this.$http.get('/ppsg/activity/chart/selectPage', {pageNo: 1, pageSize: 5}).then(response => {
        if (response.data.code === 1) {
          //console.log('/ppsg/activity/chart/selectPage', response.data.data.data)
          const datas = response.data.data.data
          for (let i = 0; i < datas.length; i++) {
            _this.images.push({title: datas[i].title, url: datas[i].url})
          }
        }
      }).catch(error => { console.log(error) })
    },
    updateCurrImg (input) {
      const _this = this
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          _this.images.push({url: e.target.result, title:'活动图'})
          _this.$http.post('/ppsg/activity/chart/insert', {url: e.target.result}).then(response => {
            if (response.data.code === 1) {
              //console.log('/ppsg/activity/chart/insert', response.data)
              _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'success' })
            } else {
              _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger' })
            }
          }).catch(error => { console.log(error) })
        }
        reader.readAsDataURL(input.target.files[0])
      }
    }
  }
}
</script>