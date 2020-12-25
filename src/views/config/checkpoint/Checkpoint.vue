<!-- =========================================================================================
  关卡表 Checkpoint.vue
========================================================================================== -->

<template>
    <div class="mt-5">
    <vs-tabs alignment="center">
      <vs-tab label="战器被动关卡表">
        <div>
          <vue-viewer 
            v-model="zq_viewer"
            :images="zq_images"
            :zIndex="zIndex"
          ></vue-viewer>
          <vs-table class="table-fix" :data="zqCheckpointList" stripe search :max-items="zqCheckpointList.length">
            <template slot="thead">
              <vs-th sort-key="name">名称</vs-th>
              <vs-th sort-key="forces">武力</vs-th>
              <vs-th sort-key="intellect">智力</vs-th>
              <vs-th sort-key="troops">兵力</vs-th>

              <vs-th v-for="(item,index) in zq_title_list" :key="index" :sort-key="item.key">{{item.name}}</vs-th>
            </template>
            
            <template slot-scope="{data}">
            <tbody class="tbody-fix">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="tr.name" class="td-w-45"> {{ tr.name }} </vs-td>
              <vs-td :data="tr.forces"> {{ tr.forces }} </vs-td>
              <vs-td :data="tr.intellect"> {{ tr.intellect }} </vs-td>
              <vs-td :data="tr.troops"> {{ tr.troops }} </vs-td>
              <vs-td :data="tr.c30_1" > <div :class="[ tr.c30_1 == 1 ? 'tr-success' : tr.c30_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_2" > <div :class="[ tr.c30_2 == 1 ? 'tr-success' : tr.c30_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_3" > <div :class="[ tr.c30_3 == 1 ? 'tr-success' : tr.c30_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_4" > <div :class="[ tr.c30_4 == 1 ? 'tr-success' : tr.c30_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_5" > <div :class="[ tr.c30_5 == 1 ? 'tr-success' : tr.c30_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_6" > <div :class="[ tr.c30_6 == 1 ? 'tr-success' : tr.c30_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_7" > <div :class="[ tr.c30_7 == 1 ? 'tr-success' : tr.c30_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_8" > <div :class="[ tr.c30_8 == 1 ? 'tr-success' : tr.c30_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_9" > <div :class="[ tr.c30_9 == 1 ? 'tr-success' : tr.c30_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_10"> <div :class="[ tr.c30_10== 1 ? 'tr-success' : tr.c30_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_11"> <div :class="[ tr.c30_11== 1 ? 'tr-success' : tr.c30_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c30_12"> <div :class="[ tr.c30_12== 1 ? 'tr-success' : tr.c30_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c29_1" > <div :class="[ tr.c29_1 == 1 ? 'tr-success' : tr.c29_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_2" > <div :class="[ tr.c29_2 == 1 ? 'tr-success' : tr.c29_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_3" > <div :class="[ tr.c29_3 == 1 ? 'tr-success' : tr.c29_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_4" > <div :class="[ tr.c29_4 == 1 ? 'tr-success' : tr.c29_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_5" > <div :class="[ tr.c29_5 == 1 ? 'tr-success' : tr.c29_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_6" > <div :class="[ tr.c29_6 == 1 ? 'tr-success' : tr.c29_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_7" > <div :class="[ tr.c29_7 == 1 ? 'tr-success' : tr.c29_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_8" > <div :class="[ tr.c29_8 == 1 ? 'tr-success' : tr.c29_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_9" > <div :class="[ tr.c29_9 == 1 ? 'tr-success' : tr.c29_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_10"> <div :class="[ tr.c29_10== 1 ? 'tr-success' : tr.c29_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_11"> <div :class="[ tr.c29_11== 1 ? 'tr-success' : tr.c29_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c29_12"> <div :class="[ tr.c29_12== 1 ? 'tr-success' : tr.c29_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c28_1" > <div :class="[ tr.c28_1 == 1 ? 'tr-success' : tr.c28_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_2" > <div :class="[ tr.c28_2 == 1 ? 'tr-success' : tr.c28_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_3" > <div :class="[ tr.c28_3 == 1 ? 'tr-success' : tr.c28_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_4" > <div :class="[ tr.c28_4 == 1 ? 'tr-success' : tr.c28_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_5" > <div :class="[ tr.c28_5 == 1 ? 'tr-success' : tr.c28_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_6" > <div :class="[ tr.c28_6 == 1 ? 'tr-success' : tr.c28_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_7" > <div :class="[ tr.c28_7 == 1 ? 'tr-success' : tr.c28_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_8" > <div :class="[ tr.c28_8 == 1 ? 'tr-success' : tr.c28_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_9" > <div :class="[ tr.c28_9 == 1 ? 'tr-success' : tr.c28_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_10"> <div :class="[ tr.c28_10== 1 ? 'tr-success' : tr.c28_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_11"> <div :class="[ tr.c28_11== 1 ? 'tr-success' : tr.c28_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c28_12"> <div :class="[ tr.c28_12== 1 ? 'tr-success' : tr.c28_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c27_1" > <div :class="[ tr.c27_1 == 1 ? 'tr-success' : tr.c27_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_2" > <div :class="[ tr.c27_2 == 1 ? 'tr-success' : tr.c27_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_3" > <div :class="[ tr.c27_3 == 1 ? 'tr-success' : tr.c27_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_4" > <div :class="[ tr.c27_4 == 1 ? 'tr-success' : tr.c27_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_5" > <div :class="[ tr.c27_5 == 1 ? 'tr-success' : tr.c27_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_6" > <div :class="[ tr.c27_6 == 1 ? 'tr-success' : tr.c27_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_7" > <div :class="[ tr.c27_7 == 1 ? 'tr-success' : tr.c27_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_8" > <div :class="[ tr.c27_8 == 1 ? 'tr-success' : tr.c27_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_9" > <div :class="[ tr.c27_9 == 1 ? 'tr-success' : tr.c27_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_10"> <div :class="[ tr.c27_10== 1 ? 'tr-success' : tr.c27_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_11"> <div :class="[ tr.c27_11== 1 ? 'tr-success' : tr.c27_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c27_12"> <div :class="[ tr.c27_12== 1 ? 'tr-success' : tr.c27_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c26_1" > <div :class="[ tr.c26_1 == 1 ? 'tr-success' : tr.c26_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_2" > <div :class="[ tr.c26_2 == 1 ? 'tr-success' : tr.c26_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_3" > <div :class="[ tr.c26_3 == 1 ? 'tr-success' : tr.c26_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_4" > <div :class="[ tr.c26_4 == 1 ? 'tr-success' : tr.c26_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_5" > <div :class="[ tr.c26_5 == 1 ? 'tr-success' : tr.c26_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_6" > <div :class="[ tr.c26_6 == 1 ? 'tr-success' : tr.c26_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_7" > <div :class="[ tr.c26_7 == 1 ? 'tr-success' : tr.c26_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_8" > <div :class="[ tr.c26_8 == 1 ? 'tr-success' : tr.c26_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_9" > <div :class="[ tr.c26_9 == 1 ? 'tr-success' : tr.c26_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_10"> <div :class="[ tr.c26_10== 1 ? 'tr-success' : tr.c26_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_11"> <div :class="[ tr.c26_11== 1 ? 'tr-success' : tr.c26_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c26_12"> <div :class="[ tr.c26_12== 1 ? 'tr-success' : tr.c26_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c25_1" > <div :class="[ tr.c25_1 == 1 ? 'tr-success' : tr.c25_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_2" > <div :class="[ tr.c25_2 == 1 ? 'tr-success' : tr.c25_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_3" > <div :class="[ tr.c25_3 == 1 ? 'tr-success' : tr.c25_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_4" > <div :class="[ tr.c25_4 == 1 ? 'tr-success' : tr.c25_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_5" > <div :class="[ tr.c25_5 == 1 ? 'tr-success' : tr.c25_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_6" > <div :class="[ tr.c25_6 == 1 ? 'tr-success' : tr.c25_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_7" > <div :class="[ tr.c25_7 == 1 ? 'tr-success' : tr.c25_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_8" > <div :class="[ tr.c25_8 == 1 ? 'tr-success' : tr.c25_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_9" > <div :class="[ tr.c25_9 == 1 ? 'tr-success' : tr.c25_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_10"> <div :class="[ tr.c25_10== 1 ? 'tr-success' : tr.c25_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_11"> <div :class="[ tr.c25_11== 1 ? 'tr-success' : tr.c25_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c25_12"> <div :class="[ tr.c25_12== 1 ? 'tr-success' : tr.c25_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c24_1" > <div :class="[ tr.c24_1 == 1 ? 'tr-success' : tr.c24_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_2" > <div :class="[ tr.c24_2 == 1 ? 'tr-success' : tr.c24_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_3" > <div :class="[ tr.c24_3 == 1 ? 'tr-success' : tr.c24_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_4" > <div :class="[ tr.c24_4 == 1 ? 'tr-success' : tr.c24_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_5" > <div :class="[ tr.c24_5 == 1 ? 'tr-success' : tr.c24_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_6" > <div :class="[ tr.c24_6 == 1 ? 'tr-success' : tr.c24_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_7" > <div :class="[ tr.c24_7 == 1 ? 'tr-success' : tr.c24_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_8" > <div :class="[ tr.c24_8 == 1 ? 'tr-success' : tr.c24_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_9" > <div :class="[ tr.c24_9 == 1 ? 'tr-success' : tr.c24_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_10"> <div :class="[ tr.c24_10== 1 ? 'tr-success' : tr.c24_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_11"> <div :class="[ tr.c24_11== 1 ? 'tr-success' : tr.c24_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c24_12"> <div :class="[ tr.c24_12== 1 ? 'tr-success' : tr.c24_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c23_1" > <div :class="[ tr.c23_1 == 1 ? 'tr-success' : tr.c23_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_2" > <div :class="[ tr.c23_2 == 1 ? 'tr-success' : tr.c23_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_3" > <div :class="[ tr.c23_3 == 1 ? 'tr-success' : tr.c23_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_4" > <div :class="[ tr.c23_4 == 1 ? 'tr-success' : tr.c23_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_5" > <div :class="[ tr.c23_5 == 1 ? 'tr-success' : tr.c23_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_6" > <div :class="[ tr.c23_6 == 1 ? 'tr-success' : tr.c23_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_7" > <div :class="[ tr.c23_7 == 1 ? 'tr-success' : tr.c23_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_8" > <div :class="[ tr.c23_8 == 1 ? 'tr-success' : tr.c23_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_9" > <div :class="[ tr.c23_9 == 1 ? 'tr-success' : tr.c23_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_10"> <div :class="[ tr.c23_10== 1 ? 'tr-success' : tr.c23_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_11"> <div :class="[ tr.c23_11== 1 ? 'tr-success' : tr.c23_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c23_12"> <div :class="[ tr.c23_12== 1 ? 'tr-success' : tr.c23_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c22_1" > <div :class="[ tr.c22_1 == 1 ? 'tr-success' : tr.c22_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_2" > <div :class="[ tr.c22_2 == 1 ? 'tr-success' : tr.c22_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_3" > <div :class="[ tr.c22_3 == 1 ? 'tr-success' : tr.c22_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_4" > <div :class="[ tr.c22_4 == 1 ? 'tr-success' : tr.c22_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_5" > <div :class="[ tr.c22_5 == 1 ? 'tr-success' : tr.c22_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_6" > <div :class="[ tr.c22_6 == 1 ? 'tr-success' : tr.c22_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_7" > <div :class="[ tr.c22_7 == 1 ? 'tr-success' : tr.c22_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_8" > <div :class="[ tr.c22_8 == 1 ? 'tr-success' : tr.c22_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_9" > <div :class="[ tr.c22_9 == 1 ? 'tr-success' : tr.c22_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_10"> <div :class="[ tr.c22_10== 1 ? 'tr-success' : tr.c22_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_11"> <div :class="[ tr.c22_11== 1 ? 'tr-success' : tr.c22_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c22_12"> <div :class="[ tr.c22_12== 1 ? 'tr-success' : tr.c22_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c21_1" > <div :class="[ tr.c21_1 == 1 ? 'tr-success' : tr.c21_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_2" > <div :class="[ tr.c21_2 == 1 ? 'tr-success' : tr.c21_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_3" > <div :class="[ tr.c21_3 == 1 ? 'tr-success' : tr.c21_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_4" > <div :class="[ tr.c21_4 == 1 ? 'tr-success' : tr.c21_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_5" > <div :class="[ tr.c21_5 == 1 ? 'tr-success' : tr.c21_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_6" > <div :class="[ tr.c21_6 == 1 ? 'tr-success' : tr.c21_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_7" > <div :class="[ tr.c21_7 == 1 ? 'tr-success' : tr.c21_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_8" > <div :class="[ tr.c21_8 == 1 ? 'tr-success' : tr.c21_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_9" > <div :class="[ tr.c21_9 == 1 ? 'tr-success' : tr.c21_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_10"> <div :class="[ tr.c21_10== 1 ? 'tr-success' : tr.c21_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_11"> <div :class="[ tr.c21_11== 1 ? 'tr-success' : tr.c21_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c21_12"> <div :class="[ tr.c21_12== 1 ? 'tr-success' : tr.c21_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c20_1" > <div :class="[ tr.c20_1 == 1 ? 'tr-success' : tr.c20_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_2" > <div :class="[ tr.c20_2 == 1 ? 'tr-success' : tr.c20_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_3" > <div :class="[ tr.c20_3 == 1 ? 'tr-success' : tr.c20_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_4" > <div :class="[ tr.c20_4 == 1 ? 'tr-success' : tr.c20_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_5" > <div :class="[ tr.c20_5 == 1 ? 'tr-success' : tr.c20_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_6" > <div :class="[ tr.c20_6 == 1 ? 'tr-success' : tr.c20_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_7" > <div :class="[ tr.c20_7 == 1 ? 'tr-success' : tr.c20_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_8" > <div :class="[ tr.c20_8 == 1 ? 'tr-success' : tr.c20_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_9" > <div :class="[ tr.c20_9 == 1 ? 'tr-success' : tr.c20_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_10"> <div :class="[ tr.c20_10== 1 ? 'tr-success' : tr.c20_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_11"> <div :class="[ tr.c20_11== 1 ? 'tr-success' : tr.c20_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c20_12"> <div :class="[ tr.c20_12== 1 ? 'tr-success' : tr.c20_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c19_1" > <div :class="[ tr.c19_1 == 1 ? 'tr-success' : tr.c19_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_2" > <div :class="[ tr.c19_2 == 1 ? 'tr-success' : tr.c19_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_3" > <div :class="[ tr.c19_3 == 1 ? 'tr-success' : tr.c19_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_4" > <div :class="[ tr.c19_4 == 1 ? 'tr-success' : tr.c19_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_5" > <div :class="[ tr.c19_5 == 1 ? 'tr-success' : tr.c19_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_6" > <div :class="[ tr.c19_6 == 1 ? 'tr-success' : tr.c19_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_7" > <div :class="[ tr.c19_7 == 1 ? 'tr-success' : tr.c19_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_8" > <div :class="[ tr.c19_8 == 1 ? 'tr-success' : tr.c19_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_9" > <div :class="[ tr.c19_9 == 1 ? 'tr-success' : tr.c19_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_10"> <div :class="[ tr.c19_10== 1 ? 'tr-success' : tr.c19_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_11"> <div :class="[ tr.c19_11== 1 ? 'tr-success' : tr.c19_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c19_12"> <div :class="[ tr.c19_12== 1 ? 'tr-success' : tr.c19_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c18_1" > <div :class="[ tr.c18_1 == 1 ? 'tr-success' : tr.c18_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_2" > <div :class="[ tr.c18_2 == 1 ? 'tr-success' : tr.c18_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_3" > <div :class="[ tr.c18_3 == 1 ? 'tr-success' : tr.c18_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_4" > <div :class="[ tr.c18_4 == 1 ? 'tr-success' : tr.c18_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_5" > <div :class="[ tr.c18_5 == 1 ? 'tr-success' : tr.c18_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_6" > <div :class="[ tr.c18_6 == 1 ? 'tr-success' : tr.c18_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_7" > <div :class="[ tr.c18_7 == 1 ? 'tr-success' : tr.c18_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_8" > <div :class="[ tr.c18_8 == 1 ? 'tr-success' : tr.c18_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_9" > <div :class="[ tr.c18_9 == 1 ? 'tr-success' : tr.c18_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_10"> <div :class="[ tr.c18_10== 1 ? 'tr-success' : tr.c18_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_11"> <div :class="[ tr.c18_11== 1 ? 'tr-success' : tr.c18_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c18_12"> <div :class="[ tr.c18_12== 1 ? 'tr-success' : tr.c18_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c17_1" > <div :class="[ tr.c17_1 == 1 ? 'tr-success' : tr.c17_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_2" > <div :class="[ tr.c17_2 == 1 ? 'tr-success' : tr.c17_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_3" > <div :class="[ tr.c17_3 == 1 ? 'tr-success' : tr.c17_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_4" > <div :class="[ tr.c17_4 == 1 ? 'tr-success' : tr.c17_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_5" > <div :class="[ tr.c17_5 == 1 ? 'tr-success' : tr.c17_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_6" > <div :class="[ tr.c17_6 == 1 ? 'tr-success' : tr.c17_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_7" > <div :class="[ tr.c17_7 == 1 ? 'tr-success' : tr.c17_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_8" > <div :class="[ tr.c17_8 == 1 ? 'tr-success' : tr.c17_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_9" > <div :class="[ tr.c17_9 == 1 ? 'tr-success' : tr.c17_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_10"> <div :class="[ tr.c17_10== 1 ? 'tr-success' : tr.c17_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_11"> <div :class="[ tr.c17_11== 1 ? 'tr-success' : tr.c17_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c17_12"> <div :class="[ tr.c17_12== 1 ? 'tr-success' : tr.c17_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c16_1" > <div :class="[ tr.c16_1 == 1 ? 'tr-success' : tr.c16_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_2" > <div :class="[ tr.c16_2 == 1 ? 'tr-success' : tr.c16_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_3" > <div :class="[ tr.c16_3 == 1 ? 'tr-success' : tr.c16_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_4" > <div :class="[ tr.c16_4 == 1 ? 'tr-success' : tr.c16_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_5" > <div :class="[ tr.c16_5 == 1 ? 'tr-success' : tr.c16_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_6" > <div :class="[ tr.c16_6 == 1 ? 'tr-success' : tr.c16_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_7" > <div :class="[ tr.c16_7 == 1 ? 'tr-success' : tr.c16_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_8" > <div :class="[ tr.c16_8 == 1 ? 'tr-success' : tr.c16_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_9" > <div :class="[ tr.c16_9 == 1 ? 'tr-success' : tr.c16_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_10"> <div :class="[ tr.c16_10== 1 ? 'tr-success' : tr.c16_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_11"> <div :class="[ tr.c16_11== 1 ? 'tr-success' : tr.c16_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c16_12"> <div :class="[ tr.c16_12== 1 ? 'tr-success' : tr.c16_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c15_1" > <div :class="[ tr.c15_1 == 1 ? 'tr-success' : tr.c15_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_2" > <div :class="[ tr.c15_2 == 1 ? 'tr-success' : tr.c15_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_3" > <div :class="[ tr.c15_3 == 1 ? 'tr-success' : tr.c15_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_4" > <div :class="[ tr.c15_4 == 1 ? 'tr-success' : tr.c15_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_5" > <div :class="[ tr.c15_5 == 1 ? 'tr-success' : tr.c15_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_6" > <div :class="[ tr.c15_6 == 1 ? 'tr-success' : tr.c15_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_7" > <div :class="[ tr.c15_7 == 1 ? 'tr-success' : tr.c15_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_8" > <div :class="[ tr.c15_8 == 1 ? 'tr-success' : tr.c15_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_9" > <div :class="[ tr.c15_9 == 1 ? 'tr-success' : tr.c15_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_10"> <div :class="[ tr.c15_10== 1 ? 'tr-success' : tr.c15_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_11"> <div :class="[ tr.c15_11== 1 ? 'tr-success' : tr.c15_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c15_12"> <div :class="[ tr.c15_12== 1 ? 'tr-success' : tr.c15_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c14_1" > <div :class="[ tr.c14_1 == 1 ? 'tr-success' : tr.c14_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_2" > <div :class="[ tr.c14_2 == 1 ? 'tr-success' : tr.c14_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_3" > <div :class="[ tr.c14_3 == 1 ? 'tr-success' : tr.c14_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_4" > <div :class="[ tr.c14_4 == 1 ? 'tr-success' : tr.c14_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_5" > <div :class="[ tr.c14_5 == 1 ? 'tr-success' : tr.c14_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_6" > <div :class="[ tr.c14_6 == 1 ? 'tr-success' : tr.c14_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_7" > <div :class="[ tr.c14_7 == 1 ? 'tr-success' : tr.c14_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_8" > <div :class="[ tr.c14_8 == 1 ? 'tr-success' : tr.c14_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_9" > <div :class="[ tr.c14_9 == 1 ? 'tr-success' : tr.c14_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_10"> <div :class="[ tr.c14_10== 1 ? 'tr-success' : tr.c14_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_11"> <div :class="[ tr.c14_11== 1 ? 'tr-success' : tr.c14_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c14_12"> <div :class="[ tr.c14_12== 1 ? 'tr-success' : tr.c14_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c13_1" > <div :class="[ tr.c13_1 == 1 ? 'tr-success' : tr.c13_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_2" > <div :class="[ tr.c13_2 == 1 ? 'tr-success' : tr.c13_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_3" > <div :class="[ tr.c13_3 == 1 ? 'tr-success' : tr.c13_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_4" > <div :class="[ tr.c13_4 == 1 ? 'tr-success' : tr.c13_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_5" > <div :class="[ tr.c13_5 == 1 ? 'tr-success' : tr.c13_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_6" > <div :class="[ tr.c13_6 == 1 ? 'tr-success' : tr.c13_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_7" > <div :class="[ tr.c13_7 == 1 ? 'tr-success' : tr.c13_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_8" > <div :class="[ tr.c13_8 == 1 ? 'tr-success' : tr.c13_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_9" > <div :class="[ tr.c13_9 == 1 ? 'tr-success' : tr.c13_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_10"> <div :class="[ tr.c13_10== 1 ? 'tr-success' : tr.c13_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_11"> <div :class="[ tr.c13_11== 1 ? 'tr-success' : tr.c13_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c13_12"> <div :class="[ tr.c13_12== 1 ? 'tr-success' : tr.c13_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c12_1" > <div :class="[ tr.c12_1 == 1 ? 'tr-success' : tr.c12_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_2" > <div :class="[ tr.c12_2 == 1 ? 'tr-success' : tr.c12_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_3" > <div :class="[ tr.c12_3 == 1 ? 'tr-success' : tr.c12_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_4" > <div :class="[ tr.c12_4 == 1 ? 'tr-success' : tr.c12_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_5" > <div :class="[ tr.c12_5 == 1 ? 'tr-success' : tr.c12_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_6" > <div :class="[ tr.c12_6 == 1 ? 'tr-success' : tr.c12_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_7" > <div :class="[ tr.c12_7 == 1 ? 'tr-success' : tr.c12_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_8" > <div :class="[ tr.c12_8 == 1 ? 'tr-success' : tr.c12_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_9" > <div :class="[ tr.c12_9 == 1 ? 'tr-success' : tr.c12_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_10"> <div :class="[ tr.c12_10== 1 ? 'tr-success' : tr.c12_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_11"> <div :class="[ tr.c12_11== 1 ? 'tr-success' : tr.c12_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c12_12"> <div :class="[ tr.c12_12== 1 ? 'tr-success' : tr.c12_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c11_1" > <div :class="[ tr.c11_1 == 1 ? 'tr-success' : tr.c11_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_2" > <div :class="[ tr.c11_2 == 1 ? 'tr-success' : tr.c11_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_3" > <div :class="[ tr.c11_3 == 1 ? 'tr-success' : tr.c11_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_4" > <div :class="[ tr.c11_4 == 1 ? 'tr-success' : tr.c11_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_5" > <div :class="[ tr.c11_5 == 1 ? 'tr-success' : tr.c11_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_6" > <div :class="[ tr.c11_6 == 1 ? 'tr-success' : tr.c11_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_7" > <div :class="[ tr.c11_7 == 1 ? 'tr-success' : tr.c11_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_8" > <div :class="[ tr.c11_8 == 1 ? 'tr-success' : tr.c11_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_9" > <div :class="[ tr.c11_9 == 1 ? 'tr-success' : tr.c11_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_10"> <div :class="[ tr.c11_10== 1 ? 'tr-success' : tr.c11_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_11"> <div :class="[ tr.c11_11== 1 ? 'tr-success' : tr.c11_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c11_12"> <div :class="[ tr.c11_12== 1 ? 'tr-success' : tr.c11_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c10_1" > <div :class="[ tr.c10_1 == 1 ? 'tr-success' : tr.c10_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_2" > <div :class="[ tr.c10_2 == 1 ? 'tr-success' : tr.c10_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_3" > <div :class="[ tr.c10_3 == 1 ? 'tr-success' : tr.c10_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_4" > <div :class="[ tr.c10_4 == 1 ? 'tr-success' : tr.c10_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_5" > <div :class="[ tr.c10_5 == 1 ? 'tr-success' : tr.c10_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_6" > <div :class="[ tr.c10_6 == 1 ? 'tr-success' : tr.c10_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_7" > <div :class="[ tr.c10_7 == 1 ? 'tr-success' : tr.c10_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_8" > <div :class="[ tr.c10_8 == 1 ? 'tr-success' : tr.c10_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_9" > <div :class="[ tr.c10_9 == 1 ? 'tr-success' : tr.c10_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_10"> <div :class="[ tr.c10_10== 1 ? 'tr-success' : tr.c10_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_11"> <div :class="[ tr.c10_11== 1 ? 'tr-success' : tr.c10_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c10_12"> <div :class="[ tr.c10_12== 1 ? 'tr-success' : tr.c10_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c9_1" > <div :class="[ tr.c9_1 == 1 ? 'tr-success' : tr.c9_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_2" > <div :class="[ tr.c9_2 == 1 ? 'tr-success' : tr.c9_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_3" > <div :class="[ tr.c9_3 == 1 ? 'tr-success' : tr.c9_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_4" > <div :class="[ tr.c9_4 == 1 ? 'tr-success' : tr.c9_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_5" > <div :class="[ tr.c9_5 == 1 ? 'tr-success' : tr.c9_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_6" > <div :class="[ tr.c9_6 == 1 ? 'tr-success' : tr.c9_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_7" > <div :class="[ tr.c9_7 == 1 ? 'tr-success' : tr.c9_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_8" > <div :class="[ tr.c9_8 == 1 ? 'tr-success' : tr.c9_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_9" > <div :class="[ tr.c9_9 == 1 ? 'tr-success' : tr.c9_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_10"> <div :class="[ tr.c9_10== 1 ? 'tr-success' : tr.c9_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_11"> <div :class="[ tr.c9_11== 1 ? 'tr-success' : tr.c9_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c9_12"> <div :class="[ tr.c9_12== 1 ? 'tr-success' : tr.c9_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c8_1" > <div :class="[ tr.c8_1 == 1 ? 'tr-success' : tr.c8_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_2" > <div :class="[ tr.c8_2 == 1 ? 'tr-success' : tr.c8_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_3" > <div :class="[ tr.c8_3 == 1 ? 'tr-success' : tr.c8_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_4" > <div :class="[ tr.c8_4 == 1 ? 'tr-success' : tr.c8_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_5" > <div :class="[ tr.c8_5 == 1 ? 'tr-success' : tr.c8_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_6" > <div :class="[ tr.c8_6 == 1 ? 'tr-success' : tr.c8_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_7" > <div :class="[ tr.c8_7 == 1 ? 'tr-success' : tr.c8_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_8" > <div :class="[ tr.c8_8 == 1 ? 'tr-success' : tr.c8_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_9" > <div :class="[ tr.c8_9 == 1 ? 'tr-success' : tr.c8_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_10"> <div :class="[ tr.c8_10== 1 ? 'tr-success' : tr.c8_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_11"> <div :class="[ tr.c8_11== 1 ? 'tr-success' : tr.c8_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c8_12"> <div :class="[ tr.c8_12== 1 ? 'tr-success' : tr.c8_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c7_1" > <div :class="[ tr.c7_1 == 1 ? 'tr-success' : tr.c7_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_2" > <div :class="[ tr.c7_2 == 1 ? 'tr-success' : tr.c7_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_3" > <div :class="[ tr.c7_3 == 1 ? 'tr-success' : tr.c7_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_4" > <div :class="[ tr.c7_4 == 1 ? 'tr-success' : tr.c7_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_5" > <div :class="[ tr.c7_5 == 1 ? 'tr-success' : tr.c7_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_6" > <div :class="[ tr.c7_6 == 1 ? 'tr-success' : tr.c7_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_7" > <div :class="[ tr.c7_7 == 1 ? 'tr-success' : tr.c7_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_8" > <div :class="[ tr.c7_8 == 1 ? 'tr-success' : tr.c7_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_9" > <div :class="[ tr.c7_9 == 1 ? 'tr-success' : tr.c7_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_10"> <div :class="[ tr.c7_10== 1 ? 'tr-success' : tr.c7_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_11"> <div :class="[ tr.c7_11== 1 ? 'tr-success' : tr.c7_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c7_12"> <div :class="[ tr.c7_12== 1 ? 'tr-success' : tr.c7_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c6_1" > <div :class="[ tr.c6_1 == 1 ? 'tr-success' : tr.c6_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_2" > <div :class="[ tr.c6_2 == 1 ? 'tr-success' : tr.c6_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_3" > <div :class="[ tr.c6_3 == 1 ? 'tr-success' : tr.c6_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_4" > <div :class="[ tr.c6_4 == 1 ? 'tr-success' : tr.c6_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_5" > <div :class="[ tr.c6_5 == 1 ? 'tr-success' : tr.c6_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_6" > <div :class="[ tr.c6_6 == 1 ? 'tr-success' : tr.c6_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_7" > <div :class="[ tr.c6_7 == 1 ? 'tr-success' : tr.c6_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_8" > <div :class="[ tr.c6_8 == 1 ? 'tr-success' : tr.c6_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_9" > <div :class="[ tr.c6_9 == 1 ? 'tr-success' : tr.c6_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_10"> <div :class="[ tr.c6_10== 1 ? 'tr-success' : tr.c6_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_11"> <div :class="[ tr.c6_11== 1 ? 'tr-success' : tr.c6_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c6_12"> <div :class="[ tr.c6_12== 1 ? 'tr-success' : tr.c6_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c5_1" > <div :class="[ tr.c5_1 == 1 ? 'tr-success' : tr.c5_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_2" > <div :class="[ tr.c5_2 == 1 ? 'tr-success' : tr.c5_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_3" > <div :class="[ tr.c5_3 == 1 ? 'tr-success' : tr.c5_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_4" > <div :class="[ tr.c5_4 == 1 ? 'tr-success' : tr.c5_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_5" > <div :class="[ tr.c5_5 == 1 ? 'tr-success' : tr.c5_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_6" > <div :class="[ tr.c5_6 == 1 ? 'tr-success' : tr.c5_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_7" > <div :class="[ tr.c5_7 == 1 ? 'tr-success' : tr.c5_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_8" > <div :class="[ tr.c5_8 == 1 ? 'tr-success' : tr.c5_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_9" > <div :class="[ tr.c5_9 == 1 ? 'tr-success' : tr.c5_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_10"> <div :class="[ tr.c5_10== 1 ? 'tr-success' : tr.c5_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_11"> <div :class="[ tr.c5_11== 1 ? 'tr-success' : tr.c5_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c5_12"> <div :class="[ tr.c5_12== 1 ? 'tr-success' : tr.c5_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c4_1" > <div :class="[ tr.c4_1 == 1 ? 'tr-success' : tr.c4_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_2" > <div :class="[ tr.c4_2 == 1 ? 'tr-success' : tr.c4_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_3" > <div :class="[ tr.c4_3 == 1 ? 'tr-success' : tr.c4_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_4" > <div :class="[ tr.c4_4 == 1 ? 'tr-success' : tr.c4_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_5" > <div :class="[ tr.c4_5 == 1 ? 'tr-success' : tr.c4_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_6" > <div :class="[ tr.c4_6 == 1 ? 'tr-success' : tr.c4_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_7" > <div :class="[ tr.c4_7 == 1 ? 'tr-success' : tr.c4_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_8" > <div :class="[ tr.c4_8 == 1 ? 'tr-success' : tr.c4_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_9" > <div :class="[ tr.c4_9 == 1 ? 'tr-success' : tr.c4_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_10"> <div :class="[ tr.c4_10== 1 ? 'tr-success' : tr.c4_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_11"> <div :class="[ tr.c4_11== 1 ? 'tr-success' : tr.c4_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c4_12"> <div :class="[ tr.c4_12== 1 ? 'tr-success' : tr.c4_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c3_1" > <div :class="[ tr.c3_1 == 1 ? 'tr-success' : tr.c3_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_2" > <div :class="[ tr.c3_2 == 1 ? 'tr-success' : tr.c3_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_3" > <div :class="[ tr.c3_3 == 1 ? 'tr-success' : tr.c3_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_4" > <div :class="[ tr.c3_4 == 1 ? 'tr-success' : tr.c3_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_5" > <div :class="[ tr.c3_5 == 1 ? 'tr-success' : tr.c3_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_6" > <div :class="[ tr.c3_6 == 1 ? 'tr-success' : tr.c3_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_7" > <div :class="[ tr.c3_7 == 1 ? 'tr-success' : tr.c3_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_8" > <div :class="[ tr.c3_8 == 1 ? 'tr-success' : tr.c3_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_9" > <div :class="[ tr.c3_9 == 1 ? 'tr-success' : tr.c3_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_10"> <div :class="[ tr.c3_10== 1 ? 'tr-success' : tr.c3_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_11"> <div :class="[ tr.c3_11== 1 ? 'tr-success' : tr.c3_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c3_12"> <div :class="[ tr.c3_12== 1 ? 'tr-success' : tr.c3_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c2_1" > <div :class="[ tr.c2_1 == 1 ? 'tr-success' : tr.c2_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_2" > <div :class="[ tr.c2_2 == 1 ? 'tr-success' : tr.c2_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_3" > <div :class="[ tr.c2_3 == 1 ? 'tr-success' : tr.c2_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_4" > <div :class="[ tr.c2_4 == 1 ? 'tr-success' : tr.c2_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_5" > <div :class="[ tr.c2_5 == 1 ? 'tr-success' : tr.c2_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_6" > <div :class="[ tr.c2_6 == 1 ? 'tr-success' : tr.c2_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_7" > <div :class="[ tr.c2_7 == 1 ? 'tr-success' : tr.c2_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_8" > <div :class="[ tr.c2_8 == 1 ? 'tr-success' : tr.c2_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_9" > <div :class="[ tr.c2_9 == 1 ? 'tr-success' : tr.c2_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_10"> <div :class="[ tr.c2_10== 1 ? 'tr-success' : tr.c2_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_11"> <div :class="[ tr.c2_11== 1 ? 'tr-success' : tr.c2_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c2_12"> <div :class="[ tr.c2_12== 1 ? 'tr-success' : tr.c2_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>

              <vs-td :data="tr.c1_1" > <div :class="[ tr.c1_1 == 1 ? 'tr-success' : tr.c1_1 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_2" > <div :class="[ tr.c1_2 == 1 ? 'tr-success' : tr.c1_2 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_3" > <div :class="[ tr.c1_3 == 1 ? 'tr-success' : tr.c1_3 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_4" > <div :class="[ tr.c1_4 == 1 ? 'tr-success' : tr.c1_4 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_5" > <div :class="[ tr.c1_5 == 1 ? 'tr-success' : tr.c1_5 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_6" > <div :class="[ tr.c1_6 == 1 ? 'tr-success' : tr.c1_6 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_7" > <div :class="[ tr.c1_7 == 1 ? 'tr-success' : tr.c1_7 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_8" > <div :class="[ tr.c1_8 == 1 ? 'tr-success' : tr.c1_8 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_9" > <div :class="[ tr.c1_9 == 1 ? 'tr-success' : tr.c1_9 == 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_10"> <div :class="[ tr.c1_10== 1 ? 'tr-success' : tr.c1_10== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_11"> <div :class="[ tr.c1_11== 1 ? 'tr-success' : tr.c1_11== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
              <vs-td :data="tr.c1_12"> <div :class="[ tr.c1_12== 1 ? 'tr-success' : tr.c1_12== 2 ? 'tr-primary' : '' ]">&nbsp;</div> </vs-td>
            </vs-tr>
            </tbody>
            </template>
          </vs-table>
        </div>
      </vs-tab>
      <vs-tab label="大师关卡资源表">
        <div>
          <vue-viewer 
            v-model="ds_viewer"
            :images="ds_images"
            :zIndex="zIndex"
          ></vue-viewer>
          <vs-table :data="dsCheckpointList" stripe search :max-items="dsCheckpointList.length">
            <template slot="thead">
              <vs-th sort-key="name">名称</vs-th>
              <vs-th sort-key="c30">30章</vs-th>
              <vs-th sort-key="c29">29章</vs-th>
              <vs-th sort-key="c28">28章</vs-th>
              <vs-th sort-key="c27">27章</vs-th>
              <vs-th sort-key="c26">26章</vs-th>
              <vs-th sort-key="c25">25章</vs-th>
              <vs-th sort-key="c24">24章</vs-th>
              <vs-th sort-key="c23">23章</vs-th>
              <vs-th sort-key="c22">22章</vs-th>
              <vs-th sort-key="c21">21章</vs-th>
              <vs-th sort-key="c20">20章</vs-th>
              <vs-th sort-key="c19">19章</vs-th>
              <vs-th sort-key="c18">18章</vs-th>
              <vs-th sort-key="c17">17章</vs-th>
              <vs-th sort-key="c16">16章</vs-th>
              <vs-th sort-key="c15">15章</vs-th>
              <vs-th sort-key="c14">14章</vs-th>
              <vs-th sort-key="c13">13章</vs-th>
              <vs-th sort-key="c12">12章</vs-th>
              <vs-th sort-key="c11">11章</vs-th>
              <vs-th sort-key="c10">10章</vs-th>
              <vs-th sort-key="c9">9章</vs-th>
              <vs-th sort-key="c8">8章</vs-th>
              <vs-th sort-key="c7">7章</vs-th>
              <vs-th sort-key="c6">6章</vs-th>
              <vs-th sort-key="c5">5章</vs-th>
              <vs-th sort-key="c4">4章</vs-th>
              <vs-th sort-key="c3">3章</vs-th>
              <vs-th sort-key="c2">2章</vs-th>
              <vs-th sort-key="c1">1章</vs-th>
            </template>
            <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="tr.name" class="td-w"> {{ tr.name }} </vs-td>
              <vs-td :data="tr.c30"> {{ tr.c30 }} </vs-td>
              <vs-td :data="tr.c29"> {{ tr.c29 }} </vs-td>
              <vs-td :data="tr.c28"> {{ tr.c28 }} </vs-td>
              <vs-td :data="tr.c27"> {{ tr.c27 }} </vs-td>
              <vs-td :data="tr.c26"> {{ tr.c26 }} </vs-td>
              <vs-td :data="tr.c25"> {{ tr.c25 }} </vs-td>
              <vs-td :data="tr.c24"> {{ tr.c24 }} </vs-td>
              <vs-td :data="tr.c23"> {{ tr.c23 }} </vs-td>
              <vs-td :data="tr.c22"> {{ tr.c22 }} </vs-td>
              <vs-td :data="tr.c21"> {{ tr.c21 }} </vs-td>
              <vs-td :data="tr.c20"> {{ tr.c20 }} </vs-td>
              <vs-td :data="tr.c19"> {{ tr.c19 }} </vs-td>
              <vs-td :data="tr.c18"> {{ tr.c18 }} </vs-td>
              <vs-td :data="tr.c17"> {{ tr.c17 }} </vs-td>
              <vs-td :data="tr.c16"> {{ tr.c16 }} </vs-td>
              <vs-td :data="tr.c15"> {{ tr.c15 }} </vs-td>
              <vs-td :data="tr.c14"> {{ tr.c14 }} </vs-td>
              <vs-td :data="tr.c13"> {{ tr.c13 }} </vs-td>
              <vs-td :data="tr.c12"> {{ tr.c12 }} </vs-td>
              <vs-td :data="tr.c11"> {{ tr.c11 }} </vs-td>
              <vs-td :data="tr.c10"> {{ tr.c10 }} </vs-td>
              <vs-td :data="tr.c9"> {{ tr.c9 }} </vs-td>
              <vs-td :data="tr.c8"> {{ tr.c8 }} </vs-td>
              <vs-td :data="tr.c7"> {{ tr.c7 }} </vs-td>
              <vs-td :data="tr.c6"> {{ tr.c6 }} </vs-td>
              <vs-td :data="tr.c5"> {{ tr.c5 }} </vs-td>
              <vs-td :data="tr.c4"> {{ tr.c4 }} </vs-td>
              <vs-td :data="tr.c3"> {{ tr.c3 }} </vs-td>
              <vs-td :data="tr.c2"> {{ tr.c2 }} </vs-td>
              <vs-td :data="tr.c1"> {{ tr.c1 }} </vs-td>
            </vs-tr>
            </template>
          </vs-table>
        </div>
      </vs-tab>
    </vs-tabs>
    </div>
</template>

<script>
// 配置：https://github.com/cEngineGit/vue-viewerjs
import VueViewer from 'vue-viewerjs'
import avatar1 from '@/assets/images/ppsg/zq_checkpoint.png'
import avatar2 from '@/assets/images/ppsg/ds_checkpoint.png'

export default {
  components: {
    VueViewer
  },
  data () {
    return {
      zIndex: 99999,
      zq_viewer: 0,
      zq_images: [{url: avatar1, title:'战器被动关卡表'}],
      ds_viewer: 1,
      ds_images: [{url: avatar2, title:'大师关卡资源表'}],
      dsCheckpointList: [
        {name: '扫荡卷', c30: 1, c29: 1, c28: 1, c27: 1, c26: 1, c25: 1, c24: 1, c23: 1, c22: 1, c21: 1, c20: 1, c19: 1, c18: 1, c17: 1, c16: 1, c15: 1, c14: 1, c13: 1, c12: 1, c11: 1, c10: 1, c9: 1, c8: 1, c7: 1, c6: 1, c5: 1, c4: 1, c3: 1, c2: 1, c1: 1},
        {name: '军令', c30: 20, c29: 20, c28: 20, c27: 20, c26: 20, c25: 20, c24: 20, c23: 20, c22: 20, c21: 20, c20: 20, c19: 20, c18: 20, c17: 20, c16: 20, c15: 20, c14: 20, c13: 20, c12: 20, c11: 20, c10: 20, c9: 20, c8: 20, c7: 20, c6: 20, c5: 20, c4: 20, c3: 20, c2: 20, c1: 20},
        {name: '卡魂', c30: '50K', c29: '50K', c28: '50K', c27: '50K', c26: '50K', c25: '50K', c24: '50K', c23: '50K', c22: '50K', c21: '50K', c20: '50K', c19: '50K', c18: '50K', c17: '50K', c16: '50K', c15: '50K', c14: '50K', c13: '50K', c12: '50K', c11: '50K', c10: '50K', c9: '50K', c8: '50K', c7: '50K', c6: '50K', c5: '50K', c4: '50K', c3: '50K', c2: '50K', c1: '50K'},
        {name: '淬炼石', c27: 10, c25: 10, c23: 10, c21: 10, c17: 10, c15: 10, c13: 10, c11: 10, c7: 10, c5: 10, c3: 10, c1: 10},
        
        {name: '血玉', c30: 1, c29: 1, c28: 1, c26: 1, c24: 1, c22: 1},
        {name: '印玉', c20: 1, c19: 1, c18: 1, c16: 1, c14: 1, c12: 1, c8: 1, c6: 1, c4: 1, c2: 1},
        
        {name: '普通命石', c28: '1', c27: '1', c26: '1', c25: '1', c24: '1', c23: '1', c22: '1', c21: '1', c20: '1', c19: '1', c18: '1', c16: '1', c14: '1', c12: '1', c10: '1,2', c9: '1,2', c8: '1,2', c7: '1,2', c6: '1,2', c5: '1,2', c4: '1,2', c3: '1,2', c2: '1,2', c1: '1,2'},
        {name: '精良命石', c17: 1, c15: 1, c13: 1, c11: 1},
        {name: '无暇命石', c30: 1, c29: 1, c28: 1, c26: 1, c24: 1, c22: 1},

        {name: '普通贪狼之爪', c9: 1, c3: 1, c1: 1},
        {name: '精良贪狼之爪', c13: 1, c11: 1},
        {name: '无暇贪狼之爪', c23: 1, c21: 1},

        {name: '普通廉贞之锋', c10: 1, c5: 1, c4: 1},
        {name: '精良廉贞之锋', c15: 1, c14: 1},
        {name: '无暇廉贞之锋', c25: 1, c24: 1},

        {name: '普通七杀之气', c10: 1, c7: 1, c6: 1},
        {name: '精良七杀之气', c17: 1, c16: 1},
        {name: '无暇七杀之气', c27: 1, c26: 1},

        {name: '普通破军之血', c9: 1, c8: 1, c2: 1},
        {name: '精良破军之血', c18: 1, c12: 1},
        {name: '无暇破军之血', c28: 1, c22: 1},

        {name: '普通天机之钥', c12: 1},
        {name: '精良天机之钥', c21: 1, c19: 1},
        {name: '无暇天机之钥', c29: 1},

        {name: '普通天相之圭', c14: 1},
        {name: '精良天相之圭', c23: 1, c19: 1},
        {name: '无暇天相之圭', c29: 1},

        {name: '普通太阴之精', c16: 1},
        {name: '精良太阴之精', c25: 1, c20: 1},
        {name: '无暇太阴之精', c30: 1},

        {name: '普通太阳之焰', c18: 1},
        {name: '精良太阳之焰', c27: 1, c20: 1},
        {name: '无暇太阳之焰', c30: 1}
      ],
      zqCheckpointList: [],
      // zqCheckpointList: [//偶数2，奇数1
      //   {name: '刀', force: 133, intellect: 106, troops: 160, c30_4: 2, c30_7: 2, c30_10: 2, c30_12: 2, c29_1: 1, c29_3: 1, c29_5: 1, c29_7: 1, c29_10: 1, c28_1: 2, c28_3: 2, c28_4: 2, c28_8: 2, c27_1: 1, c27_4: 1, c27_6: 1, c27_11: 1, c26_9: 2, c25_8: 1, c25_11: 1, c25_12: 1, c24_1: 2, c24_3: 2, c24_7: 2, c24_9: 2, c24_12: 2, c23_1: 1, c23_3: 1, c23_5: 1, c23_8: 1, c23_10: 1, c22_1: 2, c22_3: 2, c22_7: 2, c22_9: 2, c22_12: 2},
      //   {name: '剑', force: 133, intellect: 133, troops: 133},
      //   {name: '枪', force: 160, intellect: 106, troops: 133, c30_1: 2},
      //   {name: '弓', force: 133, intellect: 133, troops: 133},
      //   {name: '扇', force: 133, intellect: 160, troops: 106, c30_1: 2},
      //   {name: '特殊剑', force: 133, intellect: 106, troops: 160},
      //   {name: '特殊枪', force: 133, intellect: 133, troops: 133},
      //   {name: '特殊弓', force: 160, intellect: 106, troops: 133},
      //   {name: '特殊扇', force: 133, intellect: 133, troops: 133},
      //   {name: '反枪'},
      //   {name: '反弓'},
      //   {name: '反骑'},
      //   {name: '舍身'},
      //   {name: '谨慎'},
      //   {name: '魅力'},
      //   {name: '坚韧'},
      //   {name: '勇武'},
      //   {name: '雄狮'},
      //   {name: '神速'},
      //   {name: '神算'},
      //   {name: '神佑'},
      //   {name: '持盾'},
      //   {name: '识破'},
      //   {name: '会心'},
      //   {name: '集中'},
      //   {name: '整备'},
      //   {name: '利刃'},
      //   {name: '坚甲'},
      //   {name: '孤胆'}
      // ],
      zq_title_list: []
    }
  },
  mounted () {
    this.getZqList()
    this.getTitleList(this.zq_title_list)
  },
  methods:{
    getZqList () {
      this.$http.get('/ppsg/checkpoint/selectList', {}).then(response => {
        if (response.data.code === 1) {
          //console.log('/ppsg/checkpoint/selectList', response)
          this.zqCheckpointList = response.data.data
        }
      }).catch(error => { console.log(error) })
    },
    getTitleList (list) {
      for (let i = 30; i > 0; i--) {
        for (let j = 1; j <= 12; j++) {
          list.push({key: `c${i}_${j}`, name: `${i}章${j}节`})
        }
      }
    }
  }
}
</script>


<style>
.td-w span{
  width: 88px;
  display: inline-block;
}
.td-w-45 span{
  width: 45px;
  display: inline-block;
}

th .vs-table-text {
  width: 32px !important;
}
/* .table-fix{    
  display: block;
}
.tbody-fix{    
  height: 300px!important;
  display: block;
} */
.tr-success{
  background-color: #28c76f;
}
.tr-primary{
  background-color: #7367f0;
}
</style>