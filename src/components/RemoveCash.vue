<template>

    <v-container class="" fluid height="768px">
    <v-row justify="end" no-gutters>
      <v-alert border="left" class="mr-6" color="blue white-text" dense >
      減鈔狀態</v-alert
      >
    </v-row>
      <v-row justify="center"  cols="7" class="mb-3" no-gutters>
      <div class="w-full lg:w-2/3">
        <section class="shadow-lg">
          <header class="bg-blue-500 px-4 py-2 rounded-t text-center text-lg font-bold">

          </header>
          <div class="p-4 bg-white rounded-b">
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            hint="輸入張數"
            label="仟元鈔"
            placeholder="請輸入張數"
            v-model="thousand"
            class="mb-8"
          ></v-text-field>

          <v-text-field
            hint="輸入張數"
            label="百元鈔"
            placeholder="請輸入張數"
            v-model="Hundred"
            class="mb-8"
          ></v-text-field>
        <label for="readonly" class="block text-grey-darkest text-base text-left -mb-8">總金額</label>
          <v-text-field
            single-line
            v-model="total"
            id="readonly"
            disabled
          ></v-text-field>
          <label for="readonly" class="block text-grey-darkest text-base text-left -mb-8">張數</label>
          <v-text-field
            id="readonlyPiece"
            v-model="pieces"
            single-line
            disabled
          ></v-text-field>
          <v-row align="center" class="mx-2"> </v-row>
          <v-row align="center" class="mx-2" justify="center">
          <v-btn depressed color="primary" :loadinalogg="loading" @click="dialog = true"> 開始減鈔 </v-btn>
          </v-row>
        </v-col>
          </div>
        </section>
      </div>
      </v-row>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="590"
    >
    <v-card>
        <v-card-title class="headline">
        <v-toolbar-title>實際取出</v-toolbar-title>
        </v-card-title>
        <v-card-text>

        <v-list-item-content>
          <v-list-item-title class="subtitle-1">仟元鈔：{{thousand}}  張</v-list-item-title>
        <v-list-item-title class="subtitle-1">百元鈔：{{Hundred}}  張</v-list-item-title>
              <v-spacer></v-spacer>
        <v-list-item-title class="subtitle-1">總計金額 {{total}} 元 </v-list-item-title>
      </v-list-item-content>
          </v-card-text>
        <v-card-actions>
          <v-btn
            color="green darken-1"
            text
            outlined
            @click="dialog = false"
          >
            取消
          </v-btn>
          <v-btn
            color="blue darken-1"
            @click="dialog = false"
          >
            減鈔完成
          </v-btn>
        </v-card-actions>
      </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
export default {
  name: 'RemoveCash',
  data () {
    return {
      Hundred: 0,
      thousand: 0,
      textErrors: 'Some error with the field',
      dialog: false,
      loader: null,
      loading: false
    }
  },
  created () {

  },
  watch: {

  },
  computed: {
    total () {
      return Number(this.Hundred * 100 + this.thousand * 1000)
    },
    pieces () {
      return Number(this.Hundred) + Number(this.thousand)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/add.scss";

.v-input #readonly {
  border: none;
}
</style>
