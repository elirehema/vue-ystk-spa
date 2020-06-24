<template>
  <v-img height="100%" width="100%" fill-height fill-width :src="data.background">
    <v-container fluid class="py-0" fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex shrink xs12 sm12 md12 order-md1 order-sm1>
          <v-row>
            <v-col xs12 sm12 md8></v-col>
            <v-col xs12 sm12 md4>
              <v-card width="800" class="ma-0 pa-0 grey lighten-3" flat elevation="0" title>
                <v-img height="520" width="110%" :src="data.image"></v-img>
                <v-card-title class="headline " >{{data.subtitle}}</v-card-title>
                <v-card-text>{{data.description}}
                </v-card-text>
              </v-card>
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