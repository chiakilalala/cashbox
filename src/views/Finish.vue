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
            <h2 class="subtitle texr-left">
              實際存入 </h2>  <br><h2 class="notice2"><span>百元鈔：</span>XXX 張</h2>

            <h2 class="notice2">  <span>千元鈔：</span>XXX 張</h2>
             <h2 class="page-title"> 總 計：XXXXXX 元</h2>
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
#main-col h2{
    font-size: 30px;
    color: #666666;
   text-align: unset;
}
h2.page-title {
    font-size: 30px !important;
    border-top: 4px #ccc solid;
    padding: 0 20px;
    width: 420px;
    margin: 0 auto;
    display: block;
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    }
    .notice2{
          margin: 0px 80px;
    }
</style>
