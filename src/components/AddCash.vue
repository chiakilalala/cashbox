<template>

    <v-container class="fill-height" fluid height="768px">
    <v-row justify="end" no-gutters>
      <v-alert border="left" class="mr-6" color="blue white-text" dense >
      加鈔狀態</v-alert>
    </v-row>
        <v-row justify="center"  cols="7" class="mb-3" no-gutters>
          <section class="shadow-lg">
          <header class="bg-blue-400 px-4 py-2 rounded-t text-center text-lg font-bold">

          </header>
            <div class="p-2 bg-white rounded-b">
        <v-col cols="12" >

          <v-row align="center" class="mx-2">
            <v-img
      :src="require('../assets/img/animation.gif')"
    ></v-img> </v-row>
          <v-row align="center" class="mx-2" justify="center">

            <v-btn depressed color="primary" @click="addCashNotification = true"> 加鈔完成 </v-btn>
          </v-row>
        </v-col>
            </div>
          </section>
      </v-row>
  <v-dialog v-model="addCashNotification" persistent max-width="450">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat dense>
          <v-toolbar-title>加鈔成功</v-toolbar-title>
        </v-toolbar>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="10" md="10">
              <div class="home">
                <div v-if="AddCashStatus === 2" style="text-align: center; padding: 60px;">
      <v-list-item-content>
          <v-list-item-title class="subtitle-1">千元鈔： 1 張</v-list-item-title>
        <v-list-item-title class="subtitle-1">百元鈔： 1 張</v-list-item-title>
              <v-spacer></v-spacer>
        <v-list-item-title class="subtitle-1">總計金額 1100 元 </v-list-item-title>
      </v-list-item-content>
                </div>
                <div v-else style="text-align: center; padding: 60px;">
                    <v-toolbar-title>加鈔失敗</v-toolbar-title>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="addCashNotification= false">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-container>

</template>
<script>
export default {
  name: 'AddCash',
  data () {
    return {
      width: '300px',
      Hundred: 0,
      thousand: 0,
      AddCashStatus: 2,
      addCashNotification: false
    }
  },
  computed: {

  }
}
</script>

<style lang="scss">

.v-input #readonly {
  border: none;
}
</style>
