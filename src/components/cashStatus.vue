<template>
<v-container class="diary status" fluid height="768px">
  <v-row justify="end" cols="12">
    <v-alert border="left" class="mr-6 white--text" color="blue " dense>
      鈔箱狀態</v-alert>
  </v-row>
  <v-row class="" no-gutters>
    <div class="w-full ">
      <v-data-table :headers="headers" :items="desserts" sortable=false class="elevation-1 rounded-b-lg" hide-default-footer filterable=false>
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
                        <input disabled id="total" readonly="readonly" type="text" v-model="editedItem.mode" class="w-full text-base bg-grey-200  border border-solid border-grey-light text-grey-darkest outline-0 rounded px-2 py-2">

                      </div>

                      <div class="w-full flex-wrap" v-if="editedItem.mode != 'D: deposit only'">
                        <div class="w-full  mb-2">
                          <label for="thousand" class="block text-grey-darkest text-base mb-2">鈔票面額</label>
                          <input disabled id="thousand" readonly="readonly" disable type="text" v-model.number="editedItem.Denominations" class="focus:border-blue-400 w-full text-base bg-grey-200 border border-solid border-grey-light text-grey-darkest outline-0 rounded px-2 py-2">
                        </div>
                        <!--editedItem.thousand  -->

                        <div class=" mb-4">
                          <div class="w-full  mb-4">
                            <label for="piece" class="block text-grey-darkest text-base mb-2">鈔票張數</label>
                            <input id="piece" type="text" v-model.number="editedItem.piece" class=" w-full text-base bg-grey-200 border border-solid border-blue-500 text-grey-darkest outline-0 rounded px-2 py-2 " autofocus="autofocus">
                          </div>
                          <div class="w-full mb-4">
                            <label for="total" class="block text-grey-darkest text-base mb-2">總金額</label>
                            <input disabled id="total" readonly="readonly" type="text" v-model.number="NewTotal" class="w-full text-base bg-grey-200  border border-solid border-grey-light text-grey-darkest outline-0 rounded px-2 py-2">
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="red darken-1" @click="reset" outlined>清 空</v-btn>
                <v-btn color="blue darken-1" @click="close" outlined>取 消</v-btn>
                <v-btn color="blue darken-1" @click="save">儲 存</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- 鈔箱歷史紀錄 -->
          <v-dialog v-model="Historydialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{editedItem.name}}鈔箱</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-simple-table class="border">
                    <template v-slot:default dense>
                      <thead>
                        <tr>
                          <th class="text-left">
                            操作
                          </th>
                          <th class="text-left">
                            千元鈔
                          </th>
                          <th class="text-left">
                            百元鈔
                          </th>
                          <th class="text-left">
                            總金額
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{{ editedItem.operating }}</td>
                          <td>{{ editedItem.thousand }}</td>
                          <td>{{ editedItem.hurend }}</td>
                          <td> {{(editedItem.thousand*1000) + (editedItem.hurend*100)}}</td>
                        </tr>
                        <tr>
                          <td>{{ editedItem.operating }}</td>
                          <td>{{ editedItem.thousand }}</td>
                          <td>{{ editedItem.hurend }}</td>
                          <td> {{(editedItem.thousand*1000) + (editedItem.hurend*100)}}</td>
                        </tr>
                        <tr>
                          <td>{{ editedItem.operating }}</td>
                          <td>{{ editedItem.thousand }}</td>
                          <td>{{ editedItem.hurend }}</td>
                          <td> {{(editedItem.thousand*1000) + (editedItem.hurend*100)}}</td>
                        </tr>
                        <tr>
                          <td>{{ editedItem.operating }}</td>
                          <td>{{ editedItem.thousand }}</td>
                          <td>{{ editedItem.hurend }}</td>
                          <td> {{(editedItem.thousand*1000) + (editedItem.hurend*100)}}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <div>
                    <v-pagination class="text-left" :length="3" disabled v-model="page"></v-pagination>
                  </div>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="HisotyClose">離開</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- 鈔箱張數紀錄 -->
          <v-dialog v-model="CashDialog" max-width="600px">
            <v-card>
              <v-card-title>
                <v-subheader>{{editedItem.name}}鈔箱 鈔票面額張數</v-subheader>
              </v-card-title>
              <v-container>
                <v-simple-table class="border">
                  <template v-slot:default dense>
                    <thead style="">
                      <tr>
                        <th class="text-left px-1">
                          貳千元鈔
                        </th>
                        <th class="text-left px-1">
                          千元鈔
                        </th>
                        <th class="text-left">
                          伍佰元鈔
                        </th>
                        <th class="text-left">
                          貳佰元鈔
                        </th>
                        <th class="text-left">
                          百元鈔
                        </th>
                        <th class="text-left">
                          總金額
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0</td>
                        <td>{{ editedItem.thousand }}</td>
                        <td>0</td>
                        <td>0</td>
                        <td>{{ editedItem.hurend }}</td>
                        <td> {{(editedItem.thousand*1000) + (editedItem.hurend*100)}}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>

              </v-container>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="CashDialogClose">離開</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- 確定是否要清空鈔箱？ -->
          <v-dialog v-model="Waringdialog" max-width="500px">
            <v-card>
              <v-toolbar color="primary" dark flat dense>
                <v-toolbar-title>清空鈔箱</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-container fluid height="300">
                  <v-row align="center" justify="center">
                    <v-col cols="12" align="center">
                      <div style="text-align: center; padding: 0x;">
                        <v-list-item-content>
                          <v-img :src="noticeImage" max-width="250" class="mx-auto"></v-img>
                          <v-list-item-title class="subtitle-1">確定清空所有鈔箱？ </v-list-item-title>
                        </v-list-item-content>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions justify="space-around">
                <v-spacer></v-spacer>
                <v-btn color="grey" @click="WaringdialogClose">放棄</v-btn>
                <v-btn color="red darken-1" @click="deleteall">確定</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.mode="{item }">
          <span :class="getColor(item.mode)">{{item.mode}} </span>
        </template>
        <!-- 模式為 D: deposit only 面額和張數要變成按鈕查看 ＆ 補卸鈔功能隱藏 -->
        <template v-slot:item.Denominations="{ item}">
          <v-btn v-if="item.mode == 'D: deposit only' " class="accent" small @click="CashItem(item)">
            <v-icon> mdi-cash-multiple </v-icon>
            查看
          </v-btn>
          <span v-else>{{item.Denominations }}</span>

        </template>
        <template v-slot:item.piece="{ item }">
          <v-btn v-if="item.mode == 'D: deposit only'" class="accent" small @click="CashItem(item)">
            <v-icon> mdi-cash-multiple </v-icon>
            查看
          </v-btn>
          <span v-else>{{item.piece }}</span>
        </template>
        <template v-slot:item.total="{ item }">
          {{(item.Denominations) * (item.piece)}}
        </template>
        <template v-slot:item.actions="{ item }">
          <span class="" v-if="item.mode == 'D: deposit only'"> No </span>
          <v-icon medium class="mr-2  text-blue-400" outlined @click="editItem(item)" v-else> mdi-pencil </v-icon>
        </template>
        <template v-slot:item.history="{ item }">
          <v-btn color="primary" class="ma-2" dark @click="HistoryItem(item)">
            查看
          </v-btn>
        </template>

        <template v-slot:footer>
          <div class="text-right mt-2 p-4">
            <v-btn depressed color="blue darken-4 " class="text-white" @click="Waringdialog = true">全部清空</v-btn>
          </div>
        </template>

      </v-data-table>
    </div>

  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'cashStatus',
  data () {
    return {
      thousand: 0,
      hurend: 0,
      Temthousand: 0,
      Temhurend: 0,
      dialog: false,
      CashDialog: false,
      Waringdialog: false,
      noticeImage: require('@/assets/img/notice.png'),
      CashStatu: 1,
      page: 1,
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
        sortable: false
      },
      {
        text: '狀態',
        value: 'status',
        sortable: false
      },
      {
        text: '鈔票面額',
        value: 'Denominations',
        sortable: false
      },
      {
        text: '鈔票張數',
        value: 'piece',
        sortable: false
      },
      {
        text: '總金額',
        value: 'total',
        sortable: false
      },
      {
        text: '歷史紀錄',
        value: 'history',
        sortable: false
      },
      {
        text: '補/卸鈔',
        value: 'actions',
        sortable: false
      }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        mode: '',
        status: '',
        thousand: 0,
        Denominations: 1000,
        piece: 0,
        hurend: 0,
        total: 0,
        operating: null,
        row: null
      },
      defaultItem: {
        name: '',
        mode: ['R: recycle', 'D: deposit only', 'P: dispense only', 'M: mix deposit'],
        status: 0,
        Denominations: 1000,
        piece: 0,
        thousand: 0,
        hurend: 0,
        total: 0,
        operating: 0,
        row: null

      }
    }
  },

  computed: {
    total () {
      return (this.editedItem.thousand * 1000) + (this.editedItem.hurend * 100)
    },
    NewTotal () {
      return (this.editedItem.Denominations) * (this.editedItem.piece)
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    Historydialog (val) {
      val || this.HisotyClose()
    },
    CashDialog (val) {
      val || this.CashDialogClose()
    },
    Waringdialog (val) {
      val || this.WaringdialogClose()
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
        status: 'H:High',
        thousand: 1000,
        Denominations: 1000,
        piece: 4,
        hurend: 2,
        operating: 'Deposit',
        row: null

      },
      {
        name: 'B2',
        mode: 'R: recycle',
        status: 'H:High',
        thousand: 1000,
        Denominations: 1000,
        piece: 1,
        hurend: 1,
        operating: 'Deposit',
        row: null
      },
      {
        name: 'B3',
        mode: 'R: recycle',
        status: 'H:High',
        thousand: 1000,
        Denominations: 1000,
        piece: 1,
        hurend: 1,
        operating: 'Deposit',
        row: null
      },
      {
        name: 'B4',
        mode: 'M: mix deposit',
        status: 'H:High',
        thousand: 100,
        Denominations: 100,
        piece: 1,
        hurend: 1,
        operating: 'Deposit',
        row: null
      },
      {
        name: 'B5',
        mode: 'D: deposit only',
        status: 'H:High',
        thousand: 100,
        Denominations: 100,
        piece: 2,
        hurend: 1,
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
    HistoryItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.Historydialog = true
    },
    CashItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.CashDialog = true
    },
    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.desserts.splice(index, 1)
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
    CashDialogClose () {
      this.CashDialog = false
    },
    WaringdialogClose () {
      this.Waringdialog = false
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    reset (item) {
      const s2 = (this.editedItem.piece = 0)
      Object.assign({
        s2
      }, this.editedItem)
    },
    deleteall () {
      this.desserts = [{
        name: 'B1',
        mode: 'R: recycle',
        status: 'E:Empty',
        Denominations: 1000,
        piece: 0,
        thousand: 0,
        hurend: 0,
        operating: 'Unload'
      },
      {
        name: 'B2',
        mode: 'R: recycle',
        status: 'E:Empty',
        Denominations: 1000,
        piece: 0,
        thousand: 0,
        hurend: 0,
        operating: 'Unload'
      },
      {
        name: 'B3',
        mode: 'R: recycle',
        status: 'E:Empty',
        Denominations: 1000,
        piece: 0,
        thousand: 0,
        hurend: 0,
        operating: 'Unload'
      },
      {
        name: 'B4',
        mode: 'R: recycle',
        status: 'E:Empty',
        Denominations: 1000,
        piece: 0,
        thousand: 0,
        hurend: 0,
        operating: 'Unload'
      },
      {
        name: 'B5',
        mode: 'R: recycle',
        status: 'E:Empty',
        Denominations: 1000,
        piece: 0,
        thousand: 0,
        hurend: 0,
        operating: 'Unload'
      }

      ]
      this.WaringdialogClose()
    },
    getColor (mode) {
      if (mode === 'D:Deposit') return 'cyan--text'
      else if (mode === 'P: dispense only') return 'purple--text'
      else if (mode === 'R: recycle') return 'orange--text'
      else if (mode === 'M: mix deposit') return 'pink--text'
      else return 'blue--text'
    }
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
