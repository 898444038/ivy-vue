<!-- =========================================================================================
  阵法表
========================================================================================== -->

<template>
    <div>
        <vs-row vs-type="flex">
          <vs-col vs-order="1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
          <vs-col vs-order="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <vs-table :data="combatList" stripe search :max-items="combatList.length">
              <template slot="thead">
                <vs-th sort-key="name">名称</vs-th>
                <vs-th sort-key="value">战力</vs-th>
              </template>
              <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="tr.name"> {{ tr.name }} </vs-td>
                  <vs-td :data="tr.value"> {{ tr.value }} </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </vs-col>
          <vs-col vs-order="3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      combatList: [
        {name: '帝皇2级', sort: 65, value: 445000},
        {name: '帝皇1级', sort: 64, value: 421000},
        {name: '帝王9级', sort: 63, value: 398000},
        {name: '帝王8级', sort: 62, value: 375000},
        {name: '帝王7级', sort: 61, value: 352000},
        {name: '帝王6级', sort: 60, value: 330000},
        {name: '帝王5级', sort: 59, value: 308000},
        {name: '帝王4级', sort: 58, value: 286000},
        {name: '帝王3级', sort: 57, value: 265000},
        {name: '帝王2级', sort: 56, value: 244000},
        {name: '帝王1级', sort: 55, value: 223000},
        {name: '君王9级', sort: 54, value: 202000},
        {name: '君王8级', sort: 53, value: 182000},
        {name: '君王7级', sort: 52, value: 165000},
        {name: '君王6级', sort: 51, value: 153000},
        {name: '君王5级', sort: 50, value: 142000},
        {name: '君王4级', sort: 49, value: 132000},
        {name: '君王3级', sort: 48, value: 122000},
        {name: '君王2级', sort: 47, value: 113200},
        {name: '君王1级', sort: 46, value: 105000},
        {name: '霸主9级', sort: 45, value: 97700 },
        {name: '霸主8级', sort: 44, value: 90880 },
        {name: '霸主7级', sort: 43, value: 84440 },
        {name: '霸主6级', sort: 42, value: 78380 },
        {name: '霸主5级', sort: 41, value: 72700 },
        {name: '霸主4级', sort: 40, value: 67400 },
        {name: '霸主3级', sort: 39, value: 62480 },
        {name: '霸主2级', sort: 38, value: 57940 },
        {name: '霸主1级', sort: 37, value: 53780 },
        {name: '王侯9级', sort: 36, value: 50000 },
        {name: '王侯8级', sort: 35, value: 47100 },
        {name: '王侯7级', sort: 34, value: 45200 },
        {name: '王侯6级', sort: 33, value: 43300 },
        {name: '王侯5级', sort: 32, value: 41400 },
        {name: '王侯4级', sort: 31, value: 39500 },
        {name: '王侯3级', sort: 30, value: 37600 },
        {name: '王侯2级', sort: 29, value: 35700 },
        {name: '王侯1级', sort: 28, value: 33800 },
        {name: '诸侯9级', sort: 27, value: 31900 },
        {name: '诸侯8级', sort: 26, value: 30000 },
        {name: '诸侯7级', sort: 25, value: 28600 },
        {name: '诸侯6级', sort: 24, value: 27300 },
        {name: '诸侯5级', sort: 23, value: 26000 },
        {name: '诸侯4级', sort: 22, value: 24700 },
        {name: '诸侯3级', sort: 21, value: 23400 },
        {name: '诸侯2级', sort: 20, value: 22000 },
        {name: '诸侯1级', sort: 19, value: 20700 },
        {name: '豪杰9级', sort: 18, value: 19400 },
        {name: '豪杰8级', sort: 17, value: 18100 },
        {name: '豪杰7级', sort: 16, value: 16800 },
        {name: '豪杰6级', sort: 15, value: 15400 },
        {name: '豪杰5级', sort: 14, value: 14100 },
        {name: '豪杰4级', sort: 13, value: 12800 },
        {name: '豪杰3级', sort: 12, value: 11500 },
        {name: '豪杰2级', sort: 11, value: 10200 },
        {name: '豪杰1级', sort: 10, value: 8800  },
        {name: '壮士9级', sort: 9, value: 7500  },
        {name: '壮士8级', sort: 8, value: 6200  },
        {name: '壮士7级', sort: 7, value: 4900  },
        {name: '壮士6级', sort: 6, value: 3600  },
        {name: '壮士5级', sort: 5, value: 2400  },
        {name: '壮士4级', sort: 4, value: 1700  },
        {name: '壮士3级', sort: 3, value: 1350  },
        {name: '壮士2级', sort: 2, value: 900   },
        {name: '壮士1级', sort: 1, value: 600   }
      ]
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>