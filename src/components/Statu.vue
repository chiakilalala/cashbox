<template>
<div>
  <v-row justify="end" cols="12">
      <v-alert border="left" class="mr-6" color="blue white-text" dense >
        鈔箱狀態</v-alert
      >
    </v-row>
        <v-dialog v-model="dialog" max-width="50%">
          <v-card>
            <v-card-title>
              <span class="headline">Add Identifier</span>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat v-on:click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat v-on:click="save">Save</v-btn>
            </v-card-actions>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.mode" label="mode"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.status" label="狀態"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.thousand" label="thousand (g)"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.hurend" label="hurend (g)"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

          </v-card>
        </v-dialog>
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-default-footer
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.mode }}</td>
          <td class="text-xs-right">{{ props.item.status }}</td>
          <td class="text-xs-right">{{ props.item.thousand }}</td>
          <td class="text-xs-right">{{ props.item.hurend }}</td>
          <td class="text-xs-right">{{ props.item.total }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
            >
          mdi-account
            </v-icon>

          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
</div>
</template>
<script>
export default {
  name: 'Statu',
  data: () => ({
    dialog: false,
    headers: [
      {
        text: '鈔箱名稱',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: '模式', value: 'mode', sortable: false },
      { text: '狀態', value: 'status', sortable: false },
      { text: '仟元鈔', value: 'thousand', sortable: false },
      { text: '百元鈔', value: 'hurend', sortable: false },
      { text: '總金額', value: 'total', sortable: false },
      { text: '歷史紀錄', value: 'history', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      mode: 0,
      status: 0,
      thousand: 0,
      hurend: 0,
      total: 0

    },
    defaultItem: {
      name: '',
      mode: 0,
      status: 0,
      thousand: 0,
      hurend: 0,
      total: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
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
          mode: 159,
          status: 6.0,
          thousand: 24,
          hurend: 4.0,
          total: 0
        },
        {
          name: 'B2',
          mode: 237,
          status: 9.0,
          thousand: 37,
          hurend: 4.3,
          total: 0
        },
        {
          name: 'B3',
          mode: 262,
          status: 16.0,
          thousand: 23,
          hurend: 6.0,
          total: 0
        },
        {
          name: 'B4',
          mode: 305,
          status: 3.7,
          thousand: 67,
          hurend: 4.3,
          total: 0
        },
        {
          name: 'B5',
          mode: 356,
          status: 16.0,
          thousand: 49,
          hurend: 3.9,
          total: 0
        }

      ]
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}

</script>
