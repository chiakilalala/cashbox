<template>
  <div>
    <body id="costomer">
      <header>
        <div class="container">
          <div id="branding">
            <img width="400px" src="@/assets/img/logo.png" />
          </div>
          <nav>
            <div>
              <div>2020 年 11 月 04 日</div>
              <div class="date">13:50 星期三</div>
            </div>
          </nav>
        </div>
      </header>

      <section id="main">
        <div class="container2">
          <div id="main-col">

            <h2 class="notice2">
              實際存入，<br>百元鈔XXX張<br>
              千元鈔XXX張<br>
              總計XXXXXX元
            </h2>
          </div>

        </div>
      </section>
    </body>
  </div>
</template>
<script>
export default {
  name: 'Finish'
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
