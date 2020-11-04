<template>
    <v-app id="inspire" >
    <v-main  class="bg-gray-200">
      <v-row no-gutters>
        <v-col cols="2" class="" >
          <v-sheet class="" >
              <v-list
                v-for="(value,name) in UnitOperations"
                :key="name"
                class="main-btn"
              >
                <v-list-item-title  :color="ButtonColor(value)"  @click="UnitOperation(value)">{{ value.label }}</v-list-item-title></v-list
              >

          </v-sheet>
        </v-col>
        <v-col cols="10">
              <component :is="currentView"></component>

        </v-col>
      </v-row>

    </v-main>
  </v-app>
</template>
<script>
import AddCash from '@/components/AddCash.vue'
import Select from '@/components/Select.vue'
import RemoveCash from '@/components/RemoveCash.vue'
import Cashbox from '@/components/Cashbox.vue'
import CashDiary from '@/components/CashDiary.vue'
import Statu from '@/components/Statu.vue'
import CashboxTotal from '@/components/CashboxTotal.vue'
import cashStatus from '@/components/cashStatus.vue'

export default {
  name: 'Home',
  components: {
    AddCash,
    Select,
    RemoveCash,
    CashDiary,
    Cashbox,
    Statu,
    CashboxTotal
  },
  data: () => ({
    currentView: 'Select',
    currentUnit: null,
    UnitOperations: {
      AddCash: {
        name: 'AddCash',
        label: '加 鈔',
        pressed: false,
        component: AddCash
      },
      RemoveCash: {
        name: 'RemoveCash',
        label: '減 鈔',
        pressed: false,
        component: RemoveCash
      },
      Statu: {
        name: 'cashStatus',
        label: '鈔箱狀態(補/卸鈔)',
        pressed: false,
        component: cashStatus
      },
      Cashbox: {
        name: 'Cashbox',
        label: '現金櫃狀態',
        pressed: false,
        component: Cashbox
      },
      CashDiary: {
        name: 'CashDiary',
        label: '現金櫃日誌',
        pressed: false,
        component: CashDiary
      },
      CashboxTotal: {
        name: 'CashboxTotal',
        label: '現金櫃統計資料',
        pressed: false,
        component: CashboxTotal
      }
      // Exit: {
      //   name: 'Exit',
      //   label: '離開',
      //   pressed: false,
      //   component: Exit
      // }
    }
  }),
  computed: {},
  methods: {
    ButtonColor (unit) {
      return unit.pressed ? 'primary' : 'main-btn'
    },
    UnitOperation (unit) {
      this.currentUnit = unit
      this.currentView = unit.component
    }
  }
}
</script>

<style>
body {
  width: 1024px;
  margin: 0 auto;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  line-height: 100%;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
  color: #333;
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
.v-sheet.v-list:not(.v-sheet--outlined) {
  box-shadow: none;
}
:root {
  --font-size-normal: 16px;
  --font-color: #333;
  --button-shadow-outset: 10px 10px 10px rgba(204, 204, 204, 0.9),
    -10px -10px 10px rgba(255, 255, 255, 0.5);
  --button-shadow-inset: inset 10px 10px 10px rgba(204, 204, 204, 0.7),
    inset -10px -10px 10px rgba(255, 255, 255, 1);
}
#inspire .theme--light.v-list.main-btn {
    background-color: #638daf;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
    margin: 5px 10px;
    color: #fff;
}
#inspire .theme--light.v-list.primary{
background-color: aliceblue;
}
</style>
