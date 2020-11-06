<template>
  <v-container
            class=" diary"
            fluid
    >
      <v-row justify="end" cols="12">
      <v-alert border="left" color="blue" class="text-gray-100 mr-5" dense >
        現金櫃日誌 </v-alert
      >
    </v-row>
      <v-row
              justify="center"
              class=""
              no-gutters
      >
    <div class="w-full lg:1/2  p-4">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1 text-center text-gray-200"

    >
      <template v-slot:item.calories="{ item }">
        <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
      </template>
    </v-data-table>
      </div>
      </v-row>
  </v-container>
</template>
<script>
export default {

  name: 'CashDiary',
  data () {
    return {
      headers: [
        {
          text: '交易序號',
          align: 'center',
          sortable: false,
          value: 'number'

        },
        { text: '交易日期', value: 'Date', sortable: false },
        { text: '交易時間', value: 'Time', sortable: false },
        { text: '交易金額', value: 'Amount', sortable: false },
        { text: '交易類型', value: 'TRN', sortable: false },
        { text: '交易狀態', value: 'Status', sortable: false },
        { text: '交易說明', value: 'message', sortable: false },
        { text: '交易人員', value: 'Saving', sortable: false }
      ],
      desserts: [
        {
          number: '100001',
          Date: '2020/11/3',
          Time: '13:00',
          Amount: '1,000',
          TRN: 'D:Deposit',
          Status: 0,
          message: '12:00:45 Deposit $1,000*11',
          Saving: 'A1'
        },
        {
          number: '100002',
          Date: '2020/11/4',
          Time: '13:00',
          Amount: '1,000',
          TRN: 'D:Deposit',
          Status: 0,
          message: '12:00:45 Deposit $1,000*11',
          Saving: 'A2'
        },
        {
          number: '100003',
          Date: '2020/11/5',
          Time: '13:00',
          Amount: '1,000',
          TRN: 'D:Deposit',
          Status: 0,
          message: '12:00:45 Deposit $1,000*11',
          Saving: 'A3'
        },
        {
          number: '100004',
          Date: '2020/11/5',
          Time: '13:00',
          Amount: '1,000',
          TRN: 'D:Deposit',
          Status: 0,
          message: '12:00:45 Deposit $1,000*11',
          Saving: 'A4'
        }

      ]

    }
  },
  methods: {
    getColor (calories) {
      if (calories === '警告') return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    }
  }
}

</script>
<style lang="scss">
.diary .v-text-field .v-input__slot{
height: 20px;
padding: 8px ;
border-radius: 5px;
}
thead{
  background-color:#1976D2;

}
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th {
  color:#fff;
}
</style>
