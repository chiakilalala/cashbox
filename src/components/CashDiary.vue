<template>
  <v-container
            class=" diary"
            fluid
    >
      <v-row justify="end" cols="12">
      <v-alert border="left" color="blue" class=" mr-5  white--text" dense >
        現金櫃日誌 </v-alert
      >
    </v-row>
      <v-row
              justify="center"
              class=""
              no-gutters
      >
    <div class="w-full  p-0">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1 text-center text-gray-200 p-0"

    >
      <template v-slot:item.TRN="{ item }">
        <v-chip label :color="getColor(item.TRN)" dark small>{{ item.TRN }}</v-chip>
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
          value: 'SNO'

        },
        { text: '交易日期', value: 'Date', sortable: false },
        { text: '交易時間', value: 'Time', sortable: false },
        { text: '交易金額', value: 'Amount', sortable: false },
        { text: '交易類型', value: 'TRN', sortable: false },
        { text: '交易狀態', value: 'Status', sortable: false },
        { text: '交易說明', value: 'Message', sortable: false },
        { text: '交易人員', value: 'EID', sortable: false }
      ],
      desserts: [
        {
          SNO: '100001',
          Date: '2020/11/3',
          Time: '13:00',
          Amount: '1,000',
          TRN: 'D:Deposit',
          Status: 0,
          Message: '12:00:45 Deposit $1,000*11',
          EID: 'A1'
        },
        {
          SNO: '100002',
          Date: '2020/11/4',
          Time: '13:00',
          Amount: '1,000',
          TRN: 'W:Withdraw',
          Status: 0,
          Message: '12:00:45 Deposit $1,000*11',
          EID: 'A2'
        },
        {
          SNO: '100003',
          Date: '2020/11/5',
          Time: '13:00',
          Amount: '1,000',
          TRN: 'I:Initialization',
          Status: 0,
          Message: '12:00:45 Deposit $1,000*11',
          EID: 'A3'
        },
        {
          SNO: '100004',
          Date: '2020/11/5',
          Time: '13:00',
          Amount: '1,000',
          TRN: 'Lij:Load',
          Status: 0,
          Message: '12:00:45 Deposit $1,000*11',
          EID: 'A4'
        }

      ]

    }
  },
  methods: {
    getColor (TRN) {
      if (TRN === 'D:Deposit') return 'red'
      else if (TRN === 'W:Withdraw') return 'orange'
      else return 'blue'
    }
  }
}

</script>
<style lang="scss" >
 .v-data-table>.v-data-table__wrapper>table>thead>tr>th{
   padding: 0 5px;
 }
.diary .v-text-field .v-input__slot{
height: 20px;
padding: 8px ;
border-radius: 5px;
}
thead{
  background-color:#1976D2;
  padding: 0px ;

}
.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th {
  color:#fff;
}
</style>
