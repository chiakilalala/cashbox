<template>
  <v-container class="" height="768px">
    <v-row justify="end" cols="12">
      <v-alert border="left" color="blue mr-5 white-text" dense >
        現金櫃狀態 </v-alert
      >
    </v-row>
    <v-row justify="center" class="" cols="12"
                sm="10"
                md="10">
  <div class="w-full lg:2/1  p-4">

        <section class="shadow-lg">
          <header class="bg-blue-300 px-4 py-2 rounded-t text-center text-lg font-bold">
          {{getTodayDate}} 現金櫃狀態
          </header>
          <div class="p-4 bg-white rounded-b ">
            <table class="w-full text-base table-auto">
              <tr>
                <th class="text-left pb-1">存入鈔票水位</th>
                <td class="text-left">0: Normal</td>
              </tr>
              <tr>
                <th class="text-left pb-1">取出鈔票水位</th>
                <td class="text-left">0: Normal</td>
              </tr>
              <tr>
                <th class="text-left pb-1">鈔票狀態</th>
                <td class="text-left">0: Normal</td>
              </tr>
              <tr>
                <th class="text-left pb-1">鈔票錯誤代號</th>
                <td class="text-left">0: Normal</td>
              </tr>
              <tr>
                <th class="text-left pb-1">現金櫃狀態</th>
                <td class="text-left">DISABLED = (-7)</td>
              </tr>
              <tr>
                <th class="text-left pb-1">錯誤狀態</th>
                <td class="text-left">ENTRYEXIST = (-13) (No Available)</td>
              </tr>
              <tr>
                <th class="text-left pb-1">錯誤代號</th>
                <td class="text-left">TCR_ERROR_SEQUENCE = -101</td>
              </tr>
              <tr>
                <th class="text-left pb-1"><span class="text-red-700">*</span>鈔票金額</th>
                <td class="text-left">1,000</td>
              </tr>
              <tr>
                <th class="text-left pb-1"><span class="text-red-700">*</span>鈔票取出金額</th>
                <td class="text-left">1,000</td>
              </tr>
              <tr>
                <th class="text-left pb-1"><span class="text-red-700">*</span>鈔票存入金額</th>
                <td class="text-left">1,000</td>
              </tr>
              <tr>
                <th class="text-left pb-1"><span class="text-red-700">*</span>鈔票裝載金額</th>
                <td class="text-left">1,000</td>
              </tr>
              <tr>
                <th class="text-left pb-1"><span class="text-red-700">*</span>鈔票卸除金額</th>
                <td class="text-left">1,000</td>
              </tr>
                <tr>
                <th class="text-left pb-1"><span class="text-red-700">*</span>鈔票取出次數</th>
                <td class="text-left">1</td>
              </tr>
              <tr>
                <th class="text-left pb-1"><span class="text-red-700">*</span>鈔票存入次數</th>
                <td class="text-left">1</td>
              </tr>
            </table>
          <span class="text-left text-sm-subtitle-1"><span class="text-red-700">*</span> 表示當日統計資料 </span>
          </div>

        </section>

      </div>

    </v-row>
  </v-container>
</template>
<script>

export default {

  name: 'Cashbox',
  data () {
    return {
      keys: [
        '存入鈔票水位',
        '取出鈔票水位',
        '鈔票狀態',
        '鈔票錯誤代號',
        '現金櫃狀態',
        '錯誤狀態',
        '錯誤代號',
        '鈔票金額',
        '鈔票取出金額',
        '鈔票存入金額',
        '鈔票裝載金額',
        '鈔票卸除金額',
        '鈔票取出次數',
        '鈔票存入次數'
      ],
      desserts: [
        {

        }
      ]
    }
  },
  computed: {
    getTodayDate () {
      var fullDate = new Date()
      var yyyy = fullDate.getFullYear()
      var MM = (fullDate.getMonth() + 1) >= 10 ? (fullDate.getMonth() + 1) : ('0' + (fullDate.getMonth() + 1))
      var dd = fullDate.getDate() < 10 ? ('0' + fullDate.getDate()) : fullDate.getDate()
      var today = yyyy + '/' + MM + '/' + dd
      return today
    }

  }
}
</script>
<style lang="scss" scoped>

</style>
