<template>
    <v-main>
      <v-container fluid fill-height>
          <v-row justify="center"  cols="7" class="mb-3  align-center" no-gutters>
          <div class="max-w-md w-full mx-auto mb-3">
          <h1 class="text-4xl text-center mb-5 font-thin">現金櫃登入</h1>
            <div class="bg-white rounded-lg overflow-hidden shadow-2xl ">
                <div class="p-8">
                    <form method="POST" class="" action="#" onsubmit="return false;">
                        <div class="mb-5 text-base">
                            <label for="username" class="text-left  block mb-2 text-sm font-medium text-gray-600">行員編號</label>

                            <input type="text"  v-model="user.username" name="username" placeholder="請輸入您的編號" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none">
                        </div>

                        <div class="mb-5 text-base">
                            <label for="password" class="text-left  block mb-2 text-sm font-medium text-gray-600">密碼</label>

                            <input type="text" v-model="user.password" name="password" placeholder="請輸入您的密碼" class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none">
                        </div>

                        <button @click="login" class="text-base w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Login</button>
                    </form>
                </div>
            </div>
            </div>
            <v-dialog v-model="Dialog" persistent max-width="450" >
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat dense>
          <v-toolbar-title>登入失敗</v-toolbar-title>
        </v-toolbar>
        <v-container  fluid  height="300">
          <v-row align="center" justify="center">
            <v-col cols="12" align="center">
            <div  style="text-align: center; padding: 60px;">
              <v-img :src="errorImage" max-width="250" class="mx-auto"></v-img>
                    <v-list-item-title class="subtitle-1">請輸入正確的帳號密碼 </v-list-item-title>
                </div>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="Dialog= false">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-row>
      </v-container>
    </v-main>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      Dialog: false,
      errorImage: require('@/assets/img/error.png')

    }
  },
  methods: {
    login () {
      if (this.user.username !== '' && this.user.password !== '') {
        this.$router.push({ name: 'Home' })
      } else if (this.user.username === '' || this.user.password === '') {
        this.Dialog = true
      }
    }
  }
}

</script>
<style lang="scss" scoped>

</style>
