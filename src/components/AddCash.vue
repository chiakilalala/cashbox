<template>
<v-container class="" fluid height="768px">
  <v-row justify="end" no-gutters>
    <v-alert border="left" class="mr-6  white--text" color="blue " dense>
      加鈔狀態</v-alert>
  </v-row>
  <v-row justify="center" cols="7" class="mb-3" no-gutters>

    <section class="shadow-lg ">
      <header class="bg-blue-400 px-4 py-2 rounded-t text-center text-lg font-bold">

      </header>
      <div class=" bg-white rounded-b">
        <v-col cols="12">
          <v-row align="center" class="mx-2">
            <div class="" style="padding:30px">
              <h1>請將鈔票放入進鈔口</h1>
            </div>
          </v-row>
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
      <v-container fluid height="300">
        <v-row align="center" justify="center">
          <v-col cols="12" align="center">
            <div v-if="AddCashStatus === 2" style="text-align: center; padding: 0x;">
              <v-list-item-content>
                <v-img :src="myImage" max-width="250" class="mx-auto"></v-img>

                <v-list-item-title class="subtitle-1">千元鈔： 1 張</v-list-item-title>
                <v-list-item-title class="subtitle-1">百元鈔： 1 張</v-list-item-title>
                <v-spacer></v-spacer>
                <v-list-item-title class="subtitle-1">總計金額 1100 元 </v-list-item-title>
              </v-list-item-content>
            </div>
            <div v-else style="text-align: center; padding: 60px;">
              <v-img :src="errorImage" max-width="250" class="mx-auto"></v-img>
              <v-toolbar-title>加鈔失敗</v-toolbar-title>
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
      addCashNotification: false,
      myImage: require('@/assets/img/succes.png'),
      errorImage: require('@/assets/img/error.png')
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
