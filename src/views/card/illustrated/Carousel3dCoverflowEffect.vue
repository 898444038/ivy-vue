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
    <!-- <vx-card class="carousel-example">
      <div class="swiper-inner">
        <vs-button class="swiper-button-prev" radius icon-pack="feather" icon="icon-arrow-left"></vs-button>
        <vs-button class="swiper-button-next" radius icon-pack="feather" icon="icon-arrow-right"></vs-button>
        <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
          <swiper-slide><img class="responsive" src="@/assets/images/pages/carousel/banner-39.jpg" alt="banner"></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </vx-card> -->

    <vs-row vs-type="flex" vs-justify="center" style="margin-bottom:30px;">
      <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
        <vs-button @click="insert" class="btn-margin" type="relief" color="danger" v-show="$acl.check('admin')">新增</vs-button>
        <vs-button @click="refresh" class="btn-margin" type="relief" color="danger" v-show="$acl.check('admin')">刷新三维</vs-button>
        <!-- <vs-button @click="select" class="btn-margin" type="relief">查看详情</vs-button> -->
        <!-- <vs-button @click="update" class="btn-margin" type="relief" color="danger" v-show="$acl.check('admin')">编辑</vs-button> -->
      </vs-col>
    </vs-row>

    <div v-show="isInsert" style="min-heigth:500px">
      <vs-row vs-type="flex" class="row-bottom">
        <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input class="flex-end-input" label-placeholder="武将名称" v-model="general.name"/></vs-col>
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input class="flex-end-input" label-placeholder="初始等级" v-model="general.level"/></vs-col>
        <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="请选择父级" v-model="general.parent" :options="General4_list"></v-select>
        </vs-col>
        <vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="请选择性别" v-model="general.gender" :options="Gender_list"></v-select>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" class="row-bottom">
        <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input class="flex-end-input" label-placeholder="初始武力" v-model="general.force"/></vs-col>
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input class="flex-end-input" label-placeholder="初始智力" v-model="general.intellect"/></vs-col>
        <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input class="flex-end-input" label-placeholder="初始兵力" v-model="general.troops"/></vs-col>
        <vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="请选择国家" v-model="general.country" :options="Country_list"></v-select>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" class="row-bottom">
        <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input class="flex-end-input" label-placeholder="异化武力" v-model="general.forcex"/></vs-col>
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input class="flex-end-input" label-placeholder="异化智力" v-model="general.intellectx"/></vs-col>
        <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"><vs-input class="flex-end-input" label-placeholder="异化兵力" v-model="general.troopsx"/></vs-col>
        <vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="请选择星级" v-model="general.star" :options="Star_list"></v-select>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" class="row-bottom">
        <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="请选择兵种类型" v-model="general.arms" :options="Arms_list"></v-select>
        </vs-col>
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="请选择武将类型" v-model="general.generalsType" :options="GeneralsType_list"></v-select>
        </vs-col>
        <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="请选择进阶类型" v-model="general.category" :options="Category_list"></v-select>
        </vs-col>
        <vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="请选择命格类型" v-model="general.destinyType" :options="DestinyType_list"></v-select>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" class="row-bottom">
        <!-- <vs-col vs-order="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">武将联协</vs-col> -->
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="right" vs-w="12">
          <v-select multiple class="flex-end-select" style="width:100%" placeholder="请选择联协" v-model="general.associationList" :options="General4_list"></v-select>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" class="row-bottom">
        <vs-col vs-order="1" vs-type="flex" vs-justify="left" vs-align="left" vs-w="12">
          <vs-button @click="addWeapon" color="danger" type="gradient" icon-pack="feather" icon="icon-plus">新增战器</vs-button>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" class="row-bottom" v-for="(item,index) in weaponList" :key="index">
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="5" class="flex-end-row-select">
          <v-select class="flex-end-select" style="width:95%" placeholder="请选择战器类型" v-model="item.weapon" :options="Weapon_list"></v-select>
        </vs-col>
        <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="5">
          <vs-input class="flex-end-input" label-placeholder="战器名称" v-model="item.name"/>
        </vs-col>
        <vs-col vs-order="4" vs-type="flex" vs-justify="left" vs-align="left" vs-w="2" class="flex-end-row-button">
          <vs-button @click="delWeapon(index)" radius color="danger" type="gradient" icon-pack="feather" icon="icon-minus"></vs-button>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" class="row-bottom">
        <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
          <vs-input class="flex-end-input" label-placeholder="幻化名称" v-model="general.generalSkin.name"/>
        </vs-col>
        <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="1号位兵书" v-model="general.armsBook.position1" :options="ArmsPosition_list"></v-select>
        </vs-col>
        <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="2号位兵书" v-model="general.armsBook.position2" :options="ArmsPosition_list"></v-select>
        </vs-col>
        <vs-col vs-order="4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="3号位兵书" v-model="general.armsBook.position3" :options="ArmsPosition_list"></v-select>
        </vs-col>
        <vs-col vs-order="5" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="4号位兵书" v-model="general.armsBook.position4" :options="ArmsPosition_list"></v-select>
        </vs-col>
        <vs-col vs-order="6" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2" class="flex-end-row-select">
          <v-select class="flex-end-select" placeholder="5号位兵书" v-model="general.armsBook.position5" :options="ArmsPosition_list"></v-select>
        </vs-col>
      </vs-row>
      <vs-row vs-type="flex" class="row-bottom">
        <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <vs-button @click="save" class="btn-margin flex-end-button" type="relief" v-show="$acl.check('admin')">新增&保存</vs-button>
        </vs-col>
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
// import 'swiper/dist/css/swiper.min.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import vSelect from 'vue-select'

export default {
  data () {
    return {
      isInsert: false,
      isSelect: false,
      isUpdate: false,
      list:[],
      weaponList:[],
      dicUrl: '/ppsg/general/getDic',
      saveUrl: '/ppsg/general/save',
      refreshUrl: '/ppsg/general/updateAllThree',
      General4_list: [],
      Gender_list: [],
      Country_list: [],
      Star_list: [],
      Arms_list: [],
      GeneralsType_list: [],
      Category_list: [],
      DestinyType_list: [],
      Weapon_list: [],
      ArmsPosition_list: [],
      general:{
        name: '',
        level: 1,
        generalSkin: {},
        armsBook: {
          // position1: {},
          // position2: {},
          // position3: {},
          // position4: {},
          // position5: {}
        }
      }
      // swiperOption: {
      //   autoplay: false, //自动切换
      //   speed: 300, //切换速度
      //   loop: false, // 循环
      //   loopAdditionalSlides: 0, //loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
      //   //loopedSlides: 1, //在loop模式下使用slidesPerview:'auto',还需使用该参数设置所要用到的loop个数。
      //   direction: 'horizontal', // Slides的滑动方向
      //   autoplayDisableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay
      //   autoplayStopOnLast: true, //切换到最后一个slide时停止自动切换
      //   grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
      //   effect: 'coverflow',
      //   centeredSlides: true,
      //   slidesPerView: 'auto',
      //   zoom: true,
      //   fadeEffect: {
      //     crossFade: false
      //   },
      //   cubeEffect: {
      //     slideShadows: true, //开启slide阴影。默认 true。
      //     shadow: true, //开启投影。默认 true。
      //     shadowOffset: 100, //投影距离。默认 20，单位px。
      //     shadowScale: 1 //投影缩放比例。默认0.94。
      //   },
      //   coverflowEffect: {
      //     rotate: 30, //slide做3d旋转时Y轴的旋转角度。默认50。
      //     stretch: 10, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
      //     depth: 200, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
      //     modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
      //     slideShadows : true //开启slide阴影。默认 true。
      //   },
      //   flipEffect: {
      //     slideShadows : true, //slides的阴影。默认true。
      //     limitRotation : true //限制最大旋转角度为180度，默认true。
      //   },
      //   navigation: {
      //     nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
      //     prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
      //     hideOnClick: false, //点击slide时显示/隐藏按钮
      //     disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
      //     hiddenClass: 'my-button-hidden' //按钮隐藏时的Class
      //   },
      //   // scrollbar: {
      //   //   el: '.swiper-scrollbar',
      //   //   hide: false, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
      //   //   draggable: true, //该参数设置为true时允许拖动滚动条。
      //   //   snapOnRelease: true, //如果设置为false，释放滚动条时slide不会自动贴合。
      //   //   dragSize: 30 //设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
      //   // },
      //   pagination: {
      //     el: '.swiper-pagination',
      //     type: 'bullets', //bullets圆点 fraction数字  progressbar进度条 custom无
      //     bulletElement : 'li', //设定分页器指示器（小点）的HTML标签。
      //     clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
      //     dynamicMainBullets: 30,
      //     hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
      //     dynamicBullets: true  //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
      //   }
      // }
    }
  },
  components: {
    'v-select': vSelect
    // swiper,
    // swiperSlide
  },
  mounted () {
    this.initData()
  },
  methods:{
    getDic (names) {
      const _this = this
      _this.$http.post(_this.dicUrl, {dicName: names}).then(response => {
        if (response.data.code === 1) {
          //console.log(_this.dicUrl, response)
          _this.General4_list = response.data.data.General4
          _this.Gender_list = response.data.data.Gender
          _this.Country_list = response.data.data.Country
          _this.Star_list = response.data.data.Star
          _this.Arms_list = response.data.data.Arms
          _this.GeneralsType_list = response.data.data.GeneralsType
          _this.Category_list = response.data.data.Category
          _this.DestinyType_list = response.data.data.DestinyType
          _this.Weapon_list = response.data.data.Weapon
          _this.ArmsPosition_list = response.data.data.ArmsPosition
        }
      }).catch(error => { console.log(error) })
    },
    initData () {
      this.general = {
        name:'陨星庞统', 
        level:1,
        parent:{label: '庞统', value: 2013},
        gender:{label: '男', value:1},
        force:'460',
        intellect:'712',
        troops:'616',
        country:{label:'蜀', value:2},
        star:{label:'五星钻卡', value:5},
        arms:{label:'骑', value:3},
        generalsType:{label:'天命策士型', value:8},
        category:{label:'逆命', value:3},
        destinyType:{label:'逆命3 (330/580/645)', value:4},
        generalSkin: {},
        armsBook: {
          // position1: {},
          // position2: {},
          // position3: {},
          // position4: {},
          // position5: {}
        }
      }
    },
    insert () {
      this.isInsert = true
      this.isSelect = false
      this.isUpdate = false
      this.getDic('General4,Gender,Country,Star,Arms,GeneralsType,Category,DestinyType,Weapon,ArmsPosition')
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
    },
    addWeapon () {
      this.weaponList.push({})
    },
    delWeapon (index) {
      this.weaponList.splice(index, 1)
    },
    refresh () {
      const _this = this
      _this.$vs.loading()
      _this.$http.post(_this.refreshUrl, {}).then(response => {
        if (response.data.code === 1) {
          _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'success' })
        } else {
          _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger' })
        }
        _this.$vs.loading.close()
      }).catch(error => { console.log(error); _this.$vs.loading.close() })
    },
    save () {
      const _this = this
      _this.$vs.loading()
      const general = _this.general

      const associationList = general.associationList
      const association = []
      if (associationList) {
        for (let i = 0; i < associationList.length; i++) {
          association.push({parentId: associationList[i].value, parentName: associationList[i].label, rate: 0.25})
        }
      }

      const weapon = []
      const weaponList = _this.weaponList
      if (weaponList) {
        for (let i = 0; i < weaponList.length; i++) {
          weapon.push({weaponCode: weaponList[i].weapon.value, weaponName: weaponList[i].weapon.label, name: weaponList[i].name})
        }
      }

      const data = {
        name: general.name,
        level: general.level,
        parentId: general.parent.value,
        parentName: general.parent.label,
        genderCode: general.gender.value,
        genderName: general.gender.label,
        force: general.force,
        intellect: general.intellect,
        troops: general.troops,
        countryCode: general.country.value,
        countryName: general.country.label,
        forcex: general.forcex,
        intellectx: general.intellectx,
        troopsx: general.troopsx,
        starCode: general.star.value,
        starName: general.star.label,
        armsCode: general.arms.value,
        armsName: general.arms.label,
        typeCode: general.generalsType.value,
        typeName: general.generalsType.label,
        categoryCode: general.category.value,
        categoryName: general.category.label,
        destinyCode: general.destinyType.value,
        destinyName: general.destinyType.label,
        associationList: association,
        weaponList: weapon,
        armsBook: {
          positionCode1: general.armsBook.position1.value,
          positionName1: general.armsBook.position1.label,
          positionCode2: general.armsBook.position2.value,
          positionName2: general.armsBook.position2.label,
          positionCode3: general.armsBook.position3.value,
          positionName3: general.armsBook.position3.label,
          positionCode4: general.armsBook.position4.value,
          positionName4: general.armsBook.position4.label,
          positionCode5: general.armsBook.position5.value,
          positionName5: general.armsBook.position5.label
        },
        generalSkin:{
          name: general.generalSkin.name
        }
      }
      console.log('data', data)
      _this.$http.post(_this.saveUrl, data).then(response => {
        if (response.data.code === 1) {
          //console.log(_this.saveUrl, response)
          _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'success' })
        } else {
          _this.$vs.notify({text: response.data.msg, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger' })
        }
        _this.$vs.loading.close()
      }).catch(error => { console.log(error); _this.$vs.loading.close() })
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
  .flex-end-row-button{
    align-items: flex-end !important;
  }
  .flex-end-input{
    width: 95%;
  }
  .flex-end-select{
    width: 95%;
  }
  .flex-end-button{
    width: 100%;
  }
  .row-bottom{
    margin-bottom: 16px;
  }
  .button-right{
    position: absolute;
    right: 36px;
  }
</style>
