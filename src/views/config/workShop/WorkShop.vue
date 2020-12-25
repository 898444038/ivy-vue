<!-- =========================================================================================
  工坊表
========================================================================================== -->

<template>
    <div>
      <vue-viewer 
        v-model="viewer"
        :images="images"
        :zIndex="zIndex"
      ></vue-viewer>
      <!-- <img class="responsive" src="@/assets/images/ppsg/work_shop.png" alt="banner"> -->
    </div>
</template>

<script>
// 配置：https://github.com/cEngineGit/vue-viewerjs
import VueViewer from 'vue-viewerjs'
import avatar from '@/assets/images/ppsg/work_shop.png'

export default {
  components: {
    VueViewer
  },
  data () {
    return {
      viewer: 0,
      zIndex: 99999,
      images: [{url: avatar, title:'工坊'}]
    }
  }
}
</script>

<style scoped>
.vue_viewer_item img{
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>