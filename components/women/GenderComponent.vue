<template>
  <v-img height="100%" width="100%" fill-height fill-width :src="data.background">
    <v-container fluid class="py-0" fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex shrink xs12 sm12 md12 order-md1 order-sm1>
          <v-row>
            <v-col xs12 sm12 md8></v-col>
            <v-col xs12 sm12 md4>
              <v-card width="800" class="ma-0 pa-0 grey lighten-3" flat elevation="1" title>
                <v-card-text>
                  <v-img height="520" width="100%" :src="data.image"></v-img>
                </v-card-text>
                <v-card-actions class="grey lighten-3 align-content-center">
                  <v-container fill-height>
                    <v-row align="center" justify="center space-around">
                      <p
                        cols="12"
                        sm="12"
                        class="text-uppercase title font-weight-bold"
                      >{{data.subtitle}}</p>
                      <v-spacer></v-spacer>
                      <v-avatar size="36" color="primary">
                        <v-icon dark>mdi-vanish</v-icon>
                      </v-avatar>&nbsp;
                      <v-avatar size="36" color="green lighten-2">
                        <v-icon dark>mdi-gender-female</v-icon>
                      </v-avatar>
                    </v-row>
                  </v-container>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
        <v-flex xs12 sm12 md12 order-md2 order-sm2 class="white">
          <v-row>
            <v-col cols="12" md="3" sm="12" wrap>
              <v-layout>
                <v-img
                  height="300"
                  width="300"
                  src="http://oasisbeautywellness.net/wp-content/uploads/2011/09/home1.png"
                ></v-img>
              </v-layout>
            </v-col>
            <v-col cols="12" md="9" sm="12" wrap>
              <p justify="center" align="center">
                <v-img
                  height="20%"
                  width="20%"
                  class="ma-2"
                  src="http://www.pngall.com/wp-content/uploads/4/Welcome-Logo-Transparent.png"
                ></v-img>
                {{data.description}}
              </p>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {};
  }
};
</script>