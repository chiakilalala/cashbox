<template>
  <v-container
            class="diary"
            fluid
            height="768px"
    >
    <v-row justify="end" cols="12">
      <v-alert border="left" color="blue" class=" mr-5  white--text" dense >
        現金櫃統計資料 </v-alert
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
      class="elevation-1"
      color='red'
    >
    </v-data-table>
</div>
      </v-row>
  </v-container>
</template>
<script>
export default {

  name: 'CashboxTotal',
  data () {
    return {
      headers: [
        {
          text: '統計日期',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { text: '鈔票金額', value: 'price', sortable: false },
        { text: '取出金額', value: 'withdraw', sortable: false },
        { text: '存入金額', value: 'deposit', sortable: false },
        { text: '裝載金額', value: 'Loading', sortable: false },
        { text: '卸除金額', value: 'Offload', sortable: false },
        { text: '取出次數', value: 'takeOut', sortable: false },
        { text: '存入次數', value: 'Saving', sortable: false }
      ],
      desserts: [
        {
          name: '2020/11/1',
          price: 1000,
          withdraw: 1000,
          deposit: 1000,
          Loading: 1000,
          Offload: 1000,
          takeOut: 1,
          Saving: 1
        },
        {
          name: '2020/11/2',
          price: 1000,
          withdraw: 1000,
          deposit: 1000,
          Loading: 1000,
          Offload: 1000,
          takeOut: 1,
          Saving: 1
        },
        {
          name: '2020/11/3',
          price: 1000,
          withdraw: 1000,
          deposit: 1000,
          Loading: 1000,
          Offload: 1000,
          takeOut: 1,
          Saving: 1
        },
        {
          name: '2020/11/4',
          price: 1000,
          withdraw: 1000,
          deposit: 1000,
          Loading: 1000,
          Offload: 1000,
          takeOut: 1,
          Saving: 1
        }

      ]

    }
  },
  methods: {

  }
}

</script>
<style lang="">

</style>
