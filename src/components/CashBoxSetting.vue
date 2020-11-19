<template>
<v-container class="diary status" fluid height="768px">
  <v-row justify="end" cols="12">
    <v-alert border="left" class="mr-6 white--text" color="blue " dense>
      鈔箱組態</v-alert>
  </v-row>
  <v-row class="" no-gutters>
    <div class="w-full ">
      <v-data-table :headers="headers" :items="desserts" sortable=false class="elevation-1 rounded-b-lg table-fixed" hide-default-footer filterable=false>
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <header class="bg-blue-300 px-4 py-2 rounded-t text-center text-lg font-bold mb-2">
                {{editedItem.name }}鈔箱
              </header>
              <v-card-text>
                <v-container>
                  <v-row>
                    <div class="w-full flex flex-wrap text-left">
                      <div class="w-full  mb-2">
                        <label for="mode" class="block text-grey-darkest text-base mb-2">模式</label>
                        <v-select :items="items" v-model="editedItem.mode" dense class="modeStyle"></v-select>

                      </div>

                      <div class="w-full flex-wrap">
                        <div class="w-full  mb-2">
                          <label for="Denominations" class="block text-grey-darkest text-base mb-2">鈔票面額</label>
                          <v-select :items="unitValue" v-model.number="editedItem.Denominations" dense class="modeStyle"></v-select>

                        </div>
                        <!--editedItem.Denominations  -->
                      </div>
                    </div>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" @click="close" outlined>取 消</v-btn>
                <v-btn color="blue darken-1" @click="CashBoxsave">儲 存</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="Historydialog" max-width="500px">
            <v-card>
              <v-toolbar color="primary" dark flat dense>
                <v-toolbar-title>鈔箱狀態</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-container fluid height="300">
                  <v-row align="center" justify="center">
                    <v-col cols="12" align="center">
                      <div style="text-align: center; padding: 0x;">
                        <v-list-item-content>
                          <v-img :src="noticeImage" max-width="250" class="mx-auto"></v-img>
                          <v-list-item-title class="subtitle-1">確定設定鈔箱組態？ </v-list-item-title>
                        </v-list-item-content>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions justify="space-around">
                <v-spacer></v-spacer>
                <v-btn color="grey" @click="HisotyClose">放棄</v-btn>
                <v-btn color="blue darken-1" @click="HisotyClose">儲存修改</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.mode="props">
          <v-edit-dialog large cancel-text="放棄" save-text="修改" :return-value.sync="props.item.mode" @save="save" @cancel="cancel" @open="open" @close="close">
            <span :class="getColor(props.item.mode)">{{props.item.mode}} </span>
            <template v-slot:input>
              <v-select :items="items" v-model="props.item.mode" class="modeStyle"></v-select>
            </template>
          </v-edit-dialog>
        </template>
        <template v-slot:item.Denominations="props">
          <v-edit-dialog large cancel-text="放棄" save-text="修改" :return-value.sync="props.item.Denominations" @save="save" @cancel="cancel" @open="open" @close="close">
            <span>{{props.item.Denominations}} </span>
            <template v-slot:input>
              <v-select :items="unitValue" v-model="props.item.Denominations"></v-select>
            </template>
          </v-edit-dialog>
        </template>

        <template v-slot:footer>
          <div class="text-right mt-2 p-4">
            <v-btn depressed color="blue darken-4 " class="text-white" @click="Historydialog = true">設定鈔箱組態</v-btn>
          </div>
        </template>

        <v-divider inset></v-divider>

      </v-data-table>
      <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn v-bind="attrs" text @click="snack = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>

  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'CashBoxSetting',
  data () {
    return {
      snack: false,
      snackColor: '',
      snackText: '',
      thousand: 0,
      hurend: 0,
      unitValue: [1000, 100],
      Temthousand: 0,
      noticeImage: require('@/assets/img/notice.png'),
      dialog: false,
      CashStatu: 1,
      CashboxModel: false,
      Historydialog: false,
      items: ['R: recycle', 'D: deposit only', 'P: dispense only', 'M: mix deposit'],
      headers: [{
        text: '鈔箱名稱',
        align: 'center',
        sortable: false,
        value: 'name'
      },
      {
        text: '模式',
        value: 'mode',
        align: 'center',
        sortable: false
      },
      {
        text: '鈔票面額',
        align: 'center',
        value: 'Denominations',
        sortable: false
      }

      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        mode: ['R: recycle', 'D: deposit only', 'P: dispense only', 'M: mix deposit'],
        Denominations: 1000,
        piece: 0,
        total: 0,
        operating: null,
        row: null
      },
      defaultItem: {
        name: '',
        mode: ['R: recycle', 'D: deposit only', 'P: dispense only', 'M: mix deposit'],
        Denominations: 1000,
        piece: 0,
        total: 0,
        operating: null,
        row: null

      }
    }
  },

  computed: {

    resetAll () {
      return this.defaultItem
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    Historydialog (val) {
      val || this.HisotyClose()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.desserts = [{
        name: 'B1',
        mode: 'R: recycle',
        Denominations: 1000,
        piece: 4,
        operating: 'Deposit',
        row: null

      },
      {
        name: 'B2',
        mode: 'R: recycle',
        Denominations: 1000,
        piece: 4,
        operating: 'Deposit',
        row: null
      },
      {
        name: 'B3',
        mode: 'R: recycle',
        Denominations: 1000,
        piece: 4,
        operating: 'Deposit',
        row: null
      },
      {
        name: 'B4',
        mode: 'M: mix deposit',
        Denominations: 100,
        piece: 1,
        operating: 'Deposit',
        row: null
      },
      {
        name: 'B5',
        mode: 'D: deposit only',
        Denominations: 100,
        piece: 2,
        operating: 'Deposit',
        row: null
      }

      ]
    },
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    HisotyClose () {
      this.Historydialog = false
    },
    resetCashbox () {
      this.CashboxModel = false
    },
    CashBoxsave () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    reset (item) {
      const s1 = (this.editedItem.Denominations = 0)
      const s2 = (this.editedItem.piece = 0)
      Object.assign({
        s1,
        s2
      }, this.editedItem)
    },
    resetall () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.HisotyClose()
    },
    getColor (mode) {
      if (mode === 'D:Deposit') return 'cyan--text'
      else if (mode === 'P: dispense only') return 'purple--text'
      else if (mode === 'R: recycle') return 'orange--text'
      else if (mode === 'M: mix deposit') return 'pink--text'
      else return 'blue--text'
    },
    save () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = '修改成功'
    },
    cancel () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = '放棄修改'
    },
    open () {
      this.snack = true
      this.snackColor = 'info'
      this.snackText = '修改編輯中'
    }
    // close () {
    //   console.log('Dialog closed')
    // }
  }
}
</script>

<style scoped>
.v-text-field .v-input__slot {
  height: 30px;
  padding: 4px 0px;
  margin-bottom: unset;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out;
  /* background: #bccaca; */
}

.theme--light.v-btn {
  color: #fff;
}
</style>
