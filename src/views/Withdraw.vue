<template>
<div>

  <body id="costomer">
    <Header />
    <section id="main" style="height:768px">
      <div class="container2">
        <div id="main-col">

          <h2 class="subtitle texr-left">請從出鈔口取出鈔票 </h2>
          <h2 class="notice2 m-0"><span>百元鈔：</span>XXX 張 <span class=" ml-5">仟元鈔：</span>XXX 張</h2>

          <h2 class="page-title"> 金 額：XXXXXX 元</h2>
          <ul id="services" class="mt-7 ">
            <li style="" class="flex py-5">
              <img class="services-img" src="https://fakeimg.pl/300x300/4f4e4e/fff" alt="">
              <img class="services-img" src="https://fakeimg.pl/300x300/4f4e4e/fff" alt="">
            </li>
          </ul>
        </div>

      </div>
    </section>
  </body>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Withdraw',
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

h2.page-title {
  font-size: 30px !important;
  border-top: 2px #ccc solid;
  padding: 0px;
  width: 481px;
  margin: 0 auto;
  display: block;
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

.notice2 {
  margin: 0px 40px;

  span {
    margin-left: 0px;
  }
}

div#main-col {
  margin-top: 46px;
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
