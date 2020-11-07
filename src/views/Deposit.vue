<template>
  <div>
    <body id="costomer">
      <Header/>
      <section id="main">
        <div class="container2">
          <div id="main-col">

            <h2 class="notice2">
              請從出鈔口取出鈔票<br>
              千元鈔XXX張<br>
              百元鈔XXX張<br>
              金額XXXXXX元
            </h2>
          </div>

        </div>
      </section>
    </body>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Deposit',
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
</style>
