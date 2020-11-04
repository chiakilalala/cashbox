<template>
    <v-main>
      <v-container fluid fill-height>
          <v-row justify="center"  cols="7" class="mb-3" no-gutters>
        <v-layout align-center justify-center>
          <v-flex xs12 >
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>現金櫃介面登入</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="行員編號" name="login" prepend-inner-icon="mdi-person" type="text" placeholder="請輸入您的編號"></v-text-field>
                  <v-text-field id="password" label="密碼" name="password" prepend-inner-icon="mdi-map-person" type="password" placeholder="請輸入您的密碼"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
          </v-row>
      </v-container>
    </v-main>
</template>
<script>
export default {

}
</script>
<style lang="scss">

</style>
