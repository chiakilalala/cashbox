<template>
<div>

  <body id="costomer">
    <Header />
    <section id="main" style="height:768px">
      <div class="container2">
        <div id="main-col">
          <h2 class="notice2">
            請將鈔票放入進鈔口，再按下按鈕
            <br>金額: XXXXXX元
          </h2>
          <a class="btn_red white--text" data-title="存款成功" @click="DepositNotification = true"> </a>
          <ul id="services" class="mt-7 ">
            <li style="" class="flex py-5">
              <img class="services-img" src="https://fakeimg.pl/300x300/4f4e4e/fff" alt="">
              <img class="services-img" src="https://fakeimg.pl/300x300/4f4e4e/fff" alt="">
            </li>
          </ul>
        </div>
      </div>
    </section>

    <v-dialog v-model="DepositNotification" persistent max-width="450">
      <v-card class="elevation-12">
        <v-container fluid height="300">
          <v-row align="center" justify="center">
            <v-col cols="12" align="center">
              <div style="text-align: center; padding: 0x;">
                <v-list-item-content>
                  <v-list-item-title class="title" style="color:#666">千元鈔： XX 張</v-list-item-title>
                  <v-spacer></v-spacer>
                  <v-list-item-title class="title" style="color:#666">總計金額 XXXX 元 </v-list-item-title>
                </v-list-item-content>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-layout justify-center>
          <v-card-actions>
            <v-spacer></v-spacer>
            <a class="btn_gray" @click="DepositNotification= false" data-title="關閉"></a>
          </v-card-actions>
        </v-layout>
      </v-card>
    </v-dialog>
  </body>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Deposit',
  data () {
    return {
      DepositNotification: false
    }
  },
  components: {
    Header
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/costom.scss";

body#costomer {
  font: 15px/1.5 Arial, Helvetica, sans-serif, 微軟正黑體;
  padding: 0;
  margin: 0;
  width: 100% !important;
  /*background-color:#f4f4f4;*/
  background-color: #DBDCDC;
  letter-spacing: 1px;

  /*background-image: url("paper.gif");*/
  background-image: url("~@/assets/img/header_bg.png");
  background-repeat: no-repeat;
  background-position: center top;
}

#costomer .container2 {
  width: 70%
}

div#main-col {
  margin-top: -110px;
}

.notice2 {
  margin: 171px auto 10px;
}

#services li {
  padding: 35px 40px;
  vertical-align: middle;
  justify-content: center;
}

.services-img {
  margin: 0 10px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
