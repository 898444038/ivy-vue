<!-- =========================================================================================
  File Name: TheCustomizer.vue
  Description: Template Customizer
  Component Name: TheCustomizer
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="theme-customizer">

    <!-- Open Customizer Button -->
    <vs-button
      @click.stop="active=!active"
      color="primary"
      type="filled"
      class="customizer-btn"
      icon-pack="feather"
      icon="icon-settings" />

    <!-- Customizer Content -->
    <vs-sidebar
      hidden-background
      position-right
      v-model="active"
      class="items-no-padding">
      <div class="h-full">

        <div class="customizer-header mt-6 flex items-center justify-between px-6">
          <div>
            <h4>设置</h4>
            <small>自定义主题 实时定制和预览</small>
          </div>
          <feather-icon icon="XIcon" @click.stop="active = false" class="cursor-pointer"></feather-icon>
        </div>

        <vs-divider class="mb-0" />

        <component :is="scrollbarTag" class="scroll-area--customizer pt-4 pb-6" :settings="settings" :key="$vs.rtl">

          <div class="px-6">

            <!-- Layout Type -->
            <div class="mt-4">
              <h5 class="mb-2">布局方式</h5>
              <div>
                <vs-radio v-model="layoutType" vs-value="vertical" class="mr-4" vs-name="layout-type-vertical">垂直</vs-radio>
                <vs-radio v-model="layoutType" vs-value="horizontal" class="mr-4" vs-name="layout-type-horizontal">水平</vs-radio>
              </div>
            </div>

            <vs-divider />

            <!-- THEME COLORS -->
            <div>
              <h5 class="mb-4">主题颜色</h5>
              <ul class="clearfix">

                <!-- Color Square -->
                <li
                  v-for="color in themeColors"
                  :key="color"
                  :style="{backgroundColor: color}"
                  :class="{'shadow-outline': color == primaryColor}"
                  class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left"
                  @click="updatePrimaryColor(color)" />

                <!-- Custom Color Square -->
                <li
                  :style="{backgroundColor: customPrimaryColor}"
                  :class="{'shadow-outline': customPrimaryColor == primaryColor}"
                  class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left"
                  @click="updatePrimaryColor(customPrimaryColor)" />
                <li class="float-left"><input class="w-10 cursor-pointer h-10 rounded-lg m-2" v-model="customPrimaryColor" type="color" /></li>
              </ul>
            </div>
            <!-- /THEME COLORS -->


            <vs-divider />

            <!-- THEME -->
            <div class="mt-4">
              <h5 class="mb-2">主题模式</h5>
              <div>
                <vs-radio v-model="themeMode" vs-value="light" class="mr-4" vs-name="theme-mode-light">明亮模式</vs-radio>
                <vs-radio v-model="themeMode" vs-value="dark" class="mr-4" vs-name="theme-mode-dark">暗黑模式</vs-radio>
                <vs-radio
                  v-if="layoutType === 'vertical'"
                  v-model="themeMode"
                  vs-value="semi-dark"
                  vs-name="theme-mode-semi-dark">半暗模式</vs-radio>
              </div>
            </div>

            <vs-divider />

            <template v-if="layoutType === 'vertical'">

              <!-- COLLAPSE SIDEBAR -->
              <div class="mt-4 flex justify-between">
                <h5>折叠侧边菜单栏</h5>
                <vs-switch v-model="reduced_sidebar" />
              </div>

              <vs-divider />

            </template>

            <!-- NAVBAR COLOR -->

            <template v-if="layoutType === 'vertical'">

              <div class="mt-4">
                <h5>导航栏颜色</h5>
                <ul class="clearfix">

                  <!-- WHITE COLOR -->
                  <li
                    :style="{background: navbarColorInitial}"
                    class="w-10 m-2 h-10 rounded-lg float-left cursor-pointer border border-solid d-theme-border-grey-light"
                    :class="navbarColorOptionClasses(navbarColorInitial)"
                    @click="navbarColorLocal = navbarColorInitial " />

                  <!-- THEME COLORS -->
                  <li
                    v-for="color in themeColors"
                    :key="color"
                    :style="{backgroundColor: color}"
                    :class="navbarColorOptionClasses(color)"
                    class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left"
                    @click="navbarColorLocal = color" />

                  <!-- CUSTOM COLOR -->
                  <li
                    :style="{backgroundColor: customNavbarColor}"
                    :class="navbarColorOptionClasses(navbarColorOptionClasses)"
                    class="w-10 cursor-pointer h-10 rounded-lg m-2 float-left"
                    @click="navbarColorLocal = customNavbarColor" />

                  <li class="float-left">
                    <input class="w-10 cursor-pointer h-10 rounded-lg m-2" v-model="customNavbarColor" type="color" />
                  </li>
                </ul>
              </div>
              <!-- /NAVBAR COLOR -->

              <vs-divider />

            </template>

            <!-- NAVBAR TYPE -->
            <div class="mt-4">
              <h5 class="mb-2">{{ (layoutType === 'vertical' || windowWidth &lt; 1200) ? "导航栏" : "菜单栏" }} 类型</h5>
              <div>
                <vs-radio
                  v-if="layoutType === 'vertical' || windowWidth < 1200"
                  v-model="navbarTypeLocal"
                  vs-value="hidden"
                  class="mr-4"
                  vs-name="navbar-type-hidden">隐藏</vs-radio>

                <vs-radio v-model="navbarTypeLocal" vs-value="static" class="mr-4" vs-name="navbar-type-static">静止</vs-radio>
                <vs-radio v-model="navbarTypeLocal" vs-value="sticky" vs-name="navbar-type-sticky" class="mr-4">固定</vs-radio>
                <vs-radio v-model="navbarTypeLocal" vs-value="floating" vs-name="navbar-type-floating">浮动</vs-radio>
              </div>
            </div>

            <vs-divider />

            <!-- FOOTER TYPE -->
            <div class="mt-4">
              <h5 class="mb-2">页脚类型</h5>
              <div>
                <vs-radio v-model="footerTypeLocal" vs-value="hidden" class="mr-4" vs-name="footer-type-hidden">隐藏</vs-radio>
                <vs-radio v-model="footerTypeLocal" vs-value="static" class="mr-4" vs-name="footer-type-static">静止</vs-radio>
                <vs-radio v-model="footerTypeLocal" vs-value="sticky" vs-name="footer-type-sticky">固定</vs-radio>
              </div>
            </div>

            <vs-divider />

            <!-- ROUTER ANIMATION -->
            <div class="mt-4">
              <h5 class="mb-2">路由跳转动画 {{ routerTransitionLocal }}</h5>
              <!-- <vs-select v-model="routerTransitionLocal">
                <vs-select-item
                  v-for="(item,index) in routerTransitionsList"
                  :key="index"
                  :value="item.value"
                  :text="item.text" />
              </vs-select> -->
              <ul class="centerx">
                <li v-for="(item,index) in routerTransitionsList" :key="index"><vs-radio v-model="routerTransitionLocal" :vs-value="item.value">{{item.text}} {{item.remark}}</vs-radio></li>
              </ul>
            </div>

            <vs-divider />

            <!-- RTL -->
            <div class="mt-4 flex justify-between">
              <h5 class="mb-2">右到左布局</h5>
              <vs-switch v-model="rtl" />
            </div>

            <vs-divider />

            <!-- SHOW SCROLL TO TOP -->
            <div class="mt-4 flex justify-between">
              <h5 class="mb-2">隐藏滚动到顶部按钮</h5>
              <vs-switch v-model="hideScrollToTopLocal" />
            </div>

          </div>
        </component>
      </div>
    </vs-sidebar>
  </div>
</template>


<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  props: {
    footerType       : { type: String,  required: true },
    hideScrollToTop  : { type: Boolean, required: true },
    navbarType       : { type: String,  required: true },
    navbarColor      : { type: String,  required: true, default: '#fff' },
    routerTransition : { type: String,  required: true }
  },
  data () {
    return {
      active             : false,
      customPrimaryColor : '#3DC9B3',
      customNavbarColor  : '#3DC9B3',
      routerTransitionsList: [
        { text: 'Zoom Fade',   value: 'zoom-fade',   remark: '缩放淡出'},
        { text: 'Slide Fade',  value: 'slide-fade',  remark: '幻灯片淡入'},
        { text: 'Fade Bottom', value: 'fade-bottom', remark: '淡出底部'},
        { text: 'Fade',        value: 'fade',        remark: '淡出'},
        { text: 'Zoom Out',    value: 'zoom-out',    remark: '缩小'},
        { text: 'None',        value: 'none',        remark: '没有效果'}
      ],
      settings: {
        handlers: ['keyboard', 'wheel', 'touch'],
        minScrollbarLength : null, //最小滚动条长度
        maxScrollbarLength : null, //最大滚动条长度
        wheelSpeed         : 1, //滚动速度
        wheelPropagation   : false, //滚动传播,当滚动到达侧面的末端时，mousewheel事件将传播到父元素
        swipeEasing        : true, //选项为true，将简化滑动滚动
        scrollingThreshold : 1000, //设置了要保留的阈值ps--scrolling-x和ps--scrolling-y类别。在默认CSS中，无论悬停状态如何，它们都会显示滚动条。单位是毫秒
        useBothWheelAxes   : false, //设置为true时，只有一个（垂直或水平）滚动条可见，然后垂直和水平滚动都会影响该滚动条
        suppressScrollX    : false, //设置为true时，无论内容宽度如何，X轴上的滚动条都将不可用
        suppressScrollY    : false, //设置为true时，无论内容高度如何，Y轴上的滚动条都将不可用
        scrollXMarginOffset: 0, //在不启用X轴滚动条的情况下，内容宽度可以超过容器宽度的像素数。允许一些“摆动空间”或“偏移中断”，因此仅由于几个像素而无法启用X轴滚动条
        scrollYMarginOffset: 0  //在不启用Y轴滚动条的情况下，内容高度可以超过容器高度的像素数。允许一些“摆动空间”或“偏移中断”，因此仅由于几个像素而无法启用Y轴滚动条
      },
      themeColors: ['#7367F0', '#28C76F', '#EA5455', '#FF9F43', '#1E1E1E']
    }
  },
  watch: {
    layoutType (val) {

      // Reset unsupported options
      if (val === 'horizontal') {
        if (this.themeMode === 'semi-dark') this.themeMode = 'light'
        if (this.navbarType === 'hidden')   this.navbarTypeLocal = 'floating'
        this.$emit('updateNavbarColor', '#fff')
      }
    }
  },
  computed: {
    footerTypeLocal: {
      get ()    { return this.footerType },
      set (val) { this.$emit('updateFooter', val) }
    },
    hideScrollToTopLocal: {
      get ()    { return this.hideScrollToTop },
      set (val) { this.$emit('toggleHideScrollToTop', val) }
    },
    navbarColorInitial () {
      return this.$store.state.theme === 'dark' ? '#10163a' : '#fff'
    },
    navbarColorOptionClasses () {
      return (color) => {
        const classes = {}
        if (color === this.navbarColorLocal)   classes['shadow-outline'] = true
        if (this.navbarTypeLocal === 'static') classes['cursor-not-allowed'] = true
        return classes
      }
    },
    navbarColorLocal: {
      get () { return this.navbarColor },
      set (val) {
        if (this.navbarType === 'static') return
        this.$emit('updateNavbarColor', val)
      }
    },
    navbarTypeLocal: {
      get ()    { return this.navbarType },
      set (val) { this.$emit('updateNavbar', val) }
    },
    layoutType: {
      get ()    { return this.$store.state.mainLayoutType },
      set (val) { this.$store.commit('UPDATE_MAIN_LAYOUT_TYPE', val) }
    },
    primaryColor: {
      get ()    { return this.$store.state.themePrimaryColor },
      set (val) { this.$store.commit('UPDATE_PRIMARY_COLOR', val) }
    },
    reduced_sidebar: {
      get ()    { return this.$store.state.reduceButton },
      set (val) { this.$store.commit('TOGGLE_REDUCE_BUTTON', val) }
    },
    routerTransitionLocal: {
      get ()    { return this.routerTransition },
      set (val) { this.$emit('updateRouterTransition', val) }
    },
    rtl: {
      get ()    { return this.$vs.rtl },
      set (val) { this.$vs.rtl = val  }
    },
    themeMode: {
      get ()    { return this.$store.state.theme },
      set (val) { this.$store.dispatch('updateTheme', val) }
    },
    scrollbarTag () { return this.$store.state.is_touch_device ? 'div' : 'VuePerfectScrollbar' },
    windowWidth () {
      return this.$store.state.windowWidth
    }
  },
  methods: {
    updatePrimaryColor (color) {
      this.primaryColor = color
      this.$vs.theme({ primary: color })
    }
  },
  components: {
    VuePerfectScrollbar
  }
}

</script>


<style lang="scss">
#theme-customizer {
  .vs-sidebar {
    position: fixed;
    z-index: 52000;
    width: 400px;
    max-width: 90vw;
    // @apply shadow-lg;
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
  }
}

.customizer-btn {
  position: fixed;
  top: 50%;
  right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 50000;

  .vs-icon {
    animation: spin 1.5s linear infinite;
  }
}

.scroll-area--customizer {
  height: calc(100% - 5rem);

  &:not(.ps) {
    overflow-y: auto;
  }
}
</style>

