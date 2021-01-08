<!-- =========================================================================================
    File Name: Carousel3dCoverflowEffect.vue
    Description: Carousel with 3D Coverflow effect
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div>
    <vx-card class="carousel-example">
      <div class="swiper-inner">
        <!-- swiper -->
        <vs-button class="swiper-button-prev" radius icon-pack="feather" icon="icon-arrow-left"></vs-button>
        <vs-button class="swiper-button-next" radius icon-pack="feather" icon="icon-arrow-right"></vs-button>
        <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-39.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-35.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-37.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-38.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-33.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-40.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-32.jpg" alt="banner"></swiper-slide>
          
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-39.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-35.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-37.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-38.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-33.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-40.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-32.jpg" alt="banner"></swiper-slide>

          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-39.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-35.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-37.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-38.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-33.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-40.jpg" alt="banner"></swiper-slide>
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-32.jpg" alt="banner"></swiper-slide>
        
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </vx-card>

    <vs-row vs-type="flex" vs-justify="center" style="margin-bottom:30px;">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <vs-button @click="insert" class="btn-margin" type="relief" color="danger" v-show="$acl.check('admin')">新增</vs-button>
        <vs-button @click="select" class="btn-margin" type="relief">查看详情</vs-button>
        <vs-button @click="update" class="btn-margin" type="relief" color="danger" v-show="$acl.check('admin')">编辑</vs-button>
      </vs-col>
    </vs-row>

    <div v-show="isInsert" style="min-heigth:500px">
      <vs-row vs-type="flex">
        <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input label-placeholder="武将名称" v-model="general.name"/></vs-col>
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input label-placeholder="初始等级" v-model="general.level"/></vs-col>
        <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="flex-end-row-select"><v-select class="flex-end-select" placeholder="请选择父级" v-model="general.parent" :options="[{label: 'Foo', value: 'foo'}]"></v-select></vs-col>
        <vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">insert 4</vs-col>
      </vs-row>
    </div>

    <div v-show="isSelect">
      <vs-row vs-type="flex">
        <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">select 1</vs-col>
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">select 2</vs-col>
        <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">select 3</vs-col>
        <vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">select 4</vs-col>
      </vs-row>
    </div>

    <div v-show="isUpdate">
      <vs-row vs-type="flex">
        <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">update 1</vs-col>
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">update 2</vs-col>
        <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">update 3</vs-col>
        <vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">update 4</vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// https://www.cnblogs.com/xiaocaiyuxiaoniao/p/10521462.html
// https://www.swiper.com.cn/api/start/new.html
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import vSelect from 'vue-select'

export default {
  data () {
    return {
      isInsert: false,
      isSelect: false,
      isUpdate: false,
      list:[],
      general:{
        name: '',
        level: 1
      },
      swiperOption: {
        autoplay: false, //自动切换
        speed: 300, //切换速度
        loop: false, // 循环
        loopAdditionalSlides: 0, //loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
        //loopedSlides: 1, //在loop模式下使用slidesPerview:'auto',还需使用该参数设置所要用到的loop个数。
        direction: 'horizontal', // Slides的滑动方向
        autoplayDisableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay
        autoplayStopOnLast: true, //切换到最后一个slide时停止自动切换
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        zoom: true,
        fadeEffect: {
          crossFade: false
        },
        cubeEffect: {
          slideShadows: true, //开启slide阴影。默认 true。
          shadow: true, //开启投影。默认 true。
          shadowOffset: 100, //投影距离。默认 20，单位px。
          shadowScale: 1 //投影缩放比例。默认0.94。
        },
        coverflowEffect: {
          rotate: 30, //slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: 10, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          depth: 200, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows : true //开启slide阴影。默认 true。
        },
        flipEffect: {
          slideShadows : true, //slides的阴影。默认true。
          limitRotation : true //限制最大旋转角度为180度，默认true。
        },
        navigation: {
          nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
          prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
          hideOnClick: false, //点击slide时显示/隐藏按钮
          disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
          hiddenClass: 'my-button-hidden' //按钮隐藏时的Class
        },
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: false, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
        //   draggable: true, //该参数设置为true时允许拖动滚动条。
        //   snapOnRelease: true, //如果设置为false，释放滚动条时slide不会自动贴合。
        //   dragSize: 30 //设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
        // },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets', //bullets圆点 fraction数字  progressbar进度条 custom无
          bulletElement : 'li', //设定分页器指示器（小点）的HTML标签。
          clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
          dynamicMainBullets: 30,
          hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          dynamicBullets: true  //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
        }
      }
    }
  },
  components: {
    'v-select': vSelect,
    swiper,
    swiperSlide
  },
  methods:{
    insert () {
      this.isInsert = true
      this.isSelect = false
      this.isUpdate = false
    },
    select () {
      this.isInsert = false
      this.isSelect = true
      this.isUpdate = false
    },
    update () {
      this.isInsert = false
      this.isSelect = false
      this.isUpdate = true
    }
  }
}
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  [dir] .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    width: 16px !important;
    height: 16px !important;
  }

  .btn-margin{
    margin: 0 5px;
  }

  .flex-end-row-select{
    align-items: flex-end !important;
  }
  .flex-end-select{
    width: 100%;
  }
</style>
