<template>
  <div>
   <article id="costomer" style="  background-color: #DBDCDC;">
    <header>
        <div class="container">
            <div id="branding">
                <img width="400px" src="@/assets/img/logo.png" />
            </div>
            <nav>
                <div>
                    <div>2020 年 09 月 30 日</div>
                    <div class="date">13:50 星期三</div><br>
                    <div class="circle"><span class="safe Status"> </span>設備正常服務</div>
                    <!-- <span class="danger Status"> </span>設備異常
                    <span class="warn Status"> </span>設備啟動中 -->
                </div>
            </nav>
        </div>
    </header>

    <section id="main">
        <div class="container2">
            <div id="main-col">

                <div class="relative w-100">

                <v-btn @click="left = !left" class="left">left</v-btn>
                <v-btn @click="right = !right" class="right">right</v-btn>
                <v-btn @click="bottomleft = !bottomleft" class="bottomleft">bottomleft</v-btn>
                <v-btn @click="bottomRight = !bottomRight" class="bottomright">bottomRight</v-btn>
                </div>
                <ul id="services">
                    <span class="" style="color: #DBDCDC;">{{goto}} </span>
                    <li>
                        <router-link to="/"><img :src="cashImage" class="e-img mx-auto"></router-link>
                    </li>

                </ul>

            </div>
        </div>
    </section>
   </article>
  </div>
</template>
<script>
export default {
  name: 'Costomer',

  data () {
    return {
      left: false,
      right: false,
      bottomleft: false,
      bottomRight: false,
      cashImage: require('@/assets/img/machine.png')
    }
  },
  methods: {

  },
  computed: {
    goto () {
      const { left, right, bottomleft, bottomRight } = this
      return { left, right, bottomleft, bottomRight }
    }
  },
  watch: {
    goto (e) {
      if (e.left && e.right && e.bottomleft && e.bottomRight) {
        // console.log('goto page')
        this.$router.push({ name: 'Login' })
      }
    }
  }

}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/costom.scss";
body div#costomer{
    background-color: #DBDCDC;
}
#costomer .v-btn--contained {
    box-shadow:none;
    /* box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12); */
}

#costomer .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
    background-color: transparent;
}
//  .v-btn__content {

//      color: rgba(0,0,0,0);
// }
#costomer .theme--light.v-btn {
    color: rgba(0,0,0,0);
}
article#costomer{
    font: 15px/1.5 Arial, Helvetica, sans-serif, 微軟正黑體;
    padding: 0;
    margin: 0;
    width: 100% !important;
height: 100vh;
    background-color: #DBDCDC;
    letter-spacing: 1px;
    /*background-image: url("paper.gif");*/
    background-image: url("~@/assets/img/header_bg.png");
    background-repeat: no-repeat;
    background-position: center top;
}
.left{
    right: 0;
    left: 19px;
    position: absolute;
    top: 30px;
}
.right{
    position: absolute;
    right: 0px;
    top: 29px;
}
.bottomleft{
    top: 250px;
    left: 0px;
    position: absolute;
}
.bottomright{
right: 0px;
   position: absolute;
    top: 250px;
}
 h2.page-title {
        font-size: 25px !important;
    }

    .e-img {
        width: 100%;
        width: 180px;
        margin-top: 0px;
    }

    ul#services li {
        padding: 40px;
        margin-bottom: 26px;
    }

    .total {
        padding: 17px 18px 10px 20px;
        background: #f1f1f1;
        margin-top: 40px 20px;
        border: none;
        margin-bottom: 26px;
        border-radius: 20px;
    }

    #main-col h2.total_title {
        display: flex;
        text-align: left;
        font-size: 25px;
    }

    .price {
        text-align: right;
        display: inline-flex;
        justify-content: flex-end;
        width: 73%;
    }

    .Status {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        display: inline-block;
        /* border: 1px solid #333; */
        margin-right: 10px;
    }

    .circle {
        float: right;
        clear: both;
        display: flex;
        align-items: center;
    }

    .safe {
        background-color: #93c903;
    }

    .danger {
        background-color: #cc3467;
    }

    .warn {
        background-color: #ffdf7c
    }

    .container2 {
        max-width: 750px;
    }

    .price_container {
        display: flex;
        justify-content: space-between;
        border-bottom: 4px #ccc solid;
        padding-top: 0px;
        margin-top: -2px;
    }
</style>
