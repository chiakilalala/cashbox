<template>
    <v-container
            class="diary status"
            fluid
            height="768px"
    >
      <v-row justify="end" cols="12">
      <v-alert border="left" class="mr-6" color="blue white-text" dense >
        鈔箱狀態</v-alert
      >
    </v-row>
          <v-row
              justify="center"
              class=""
      >
      <div class="w-full lg:1/2  p-4">
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="mode"
      class="elevation-1 rounded-b-lg"
      hide-default-footer
      filterable=false
    >
      <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <!-- <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title> -->
    <header class="bg-blue-300 px-4 py-2 rounded-t text-center text-lg font-bold mb-2">
            {{editedItem.name }}鈔箱
          </header>
              <v-card-text>
                <v-container>
                  <v-row>
            <div class="w-full">
              <div class="flex flex-wrap text-left">
                <div class="w-full  mb-2">
            <label for="mode" class="block text-grey-darkest text-base mb-2">模式</label>
                <v-select
                :items="items"
                v-model="editedItem.mode"
                dense
                class="modeStyle"
              ></v-select>

                </div>
                <div class="w-1/2 pr-4 mb-4" >
                  <label for="thousand" class="block text-grey-darkest text-base mb-2">仟元鈔</label>
                  <input id="thousand" type="text" v-model="editedItem.thousand" class="w-full text-base bg-grey-200 border border-solid border-grey-light text-grey-darkest outline-0 rounded px-2 py-2">
                </div>
                <div class="w-1/2 mb-4">
                  <label for="hurend" class="block text-grey-darkest text-base mb-2">百元鈔</label>
                  <input id="hurend" type="text" v-model="editedItem.hurend" class="w-full text-base bg-grey-200  border border-solid border-grey-light text-grey-darkest outline-0 rounded px-2 py-2">
                </div>
                <div class="w-full mb-4">
                  <label for="total" class="block text-grey-darkest text-base mb-2">總金額</label>
                  <input id="total" readonly="readonly" type="text" v-model="total" class="w-full text-base bg-grey-200  border border-solid border-grey-light text-grey-darkest outline-0 rounded px-2 py-2">
                </div>
              </div>
            </div>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="red darken-1" @click="reset" outlined>清 空</v-btn>
                <v-btn color="blue darken-1"  @click="close" outlined>取 消</v-btn>
                <v-btn color="blue darken-1"  @click="save" >儲 存</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
                          <tr
                          >
                            <td>{{ editedItem.operating }}</td>
                            <td>{{ editedItem.thousand }}</td>
                              <td>{{ editedItem.hurend }}</td>
                            <td> {{(editedItem.thousand*1000) + (editedItem.hurend*100)}}</td>
                          </tr>
                        </tbody>
                    </template>
                  </v-simple-table>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="HisotyClose">離開</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

      </template>
        <template v-slot:item.total="{ item }">
          {{(item.thousand*1000) + (item.hurend*100)}}
        </template>
        <template v-slot:item.actions="{ item }">
        <v-icon medium class="mr-2  text-blue-400" outlined @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
      <template v-slot:item.history="{ item }">
      <v-btn
        color="primary"
        class="ma-2"
        dark
        @click="HistoryItem(item)"
      >
        查看
      </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
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
      dialog: false,
      Historydialog: false,
      items: ['R: recycle', 'D: deposit only', 'P: dispense only', 'M: mix deposit'],
      headers: [
        {
          text: '鈔箱名稱',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: '模式', value: 'mode', sortable: false },
        { text: '狀態', value: 'status', sortable: false },
        { text: '仟元鈔(張數)', value: 'thousand', sortable: false },
        { text: '百元鈔(張數)', value: 'hurend', sortable: false },
        { text: '總金額', value: 'total', sortable: false },
        { text: '歷史紀錄', value: 'history', sortable: false },
        { text: '補/卸鈔', value: 'actions', sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        mode: ['R: recycle', 'D: deposit only', 'P: dispense only', 'M: mix deposit'],
        status: 0,
        thousand: 1,
        hurend: 1,
        total: 0,
        operating: 0
      },
      defaultItem: {
        name: '',
        mode: ['R: recycle', 'D: deposit only', 'P: dispense only', 'M: mix deposit'],
        status: 0,
        thousand: 1,
        hurend: 1,
        total: 0,
        operating: 0

      }
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    total () {
      return (this.editedItem.thousand * 1000) + (this.editedItem.hurend * 100)
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
      this.desserts = [
        {
          name: 'B1',
          mode: 'D: deposit only',
          status: 'F:Full',
          thousand: 1,
          hurend: 2,
          operating: 'Deposit'

        },
        {
          name: 'B2',
          mode: 'D: deposit only',
          status: 'F:Full',
          thousand: 1,
          hurend: 1,
          operating: 'Deposit'
        },
        {
          name: 'B3',
          mode: 'D: deposit only',
          status: 'F:Full',
          thousand: 1,
          hurend: 1,
          operating: 'Deposit'
        },
        {
          name: 'B4',
          mode: 'D: deposit only',
          status: 'F:Full',
          thousand: 1,
          hurend: 1,
          operating: 'Deposit'
        },
        {
          name: 'B5',
          mode: 'D: deposit only',
          status: 'F:Full',
          thousand: 1,
          hurend: 1,
          operating: 'Deposit'
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
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    reset (item) {
      const s1 = (this.editedItem.thousand = 0)
      const s2 = (this.editedItem.hurend = 0)
      Object.assign({ s1, s2 }, this.editedItem)
    }
  }
}
</script>
<style  scoped>
.v-text-field .v-input__slot {
    height: 30px;
    padding: 4px 0px;
    margin-bottom: unset;
    border: 1px solid #ccc;
  border-radius: 0.25rem;
    transition: border-color 0.2s ease-in-out;
    /* background: #bccaca; */
}
</style>
