<template>
  <v-card class="mx-auto" color="grey lighten-3">
    <v-container fill-height pa-0>
      <v-img :src="product.image" :lazy-src="product.image" height="300px">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
        <!--<v-row align="end" class="fill-height">
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>-->
      </v-img>

      <v-card-title>
        <v-list-item dense>
          <v-list-item-avatar color="grey">
            <img :src="product.image" alt="John" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="subhead">{{product.subtitle}}</v-list-item-title>
            <v-list-item-subtitle
              class="overline"
            >Price: {{ product.price ? "$ " + product.price : "$ 0.0" }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card-title>

      <v-card-subtitle class="font-weight-light caption">{{ product.subhead }}</v-card-subtitle>

      <v-card-actions>
        <v-btn color="primary" @click="view = !view" text>Explore</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div>
          <v-divider></v-divider>

          <v-card-text v-show="view">
            <p class="body-2 font-weight-bold primary--text">Features</p>
            <ul style="list-style-type:disc;">
              <li v-for="(p, index) in product.features" :key="index" class="caption">{{ p }}</li>
            </ul>
          </v-card-text>
          <v-card-text v-show="show">
            <p class="body-2 font-weight-bold primary--text">About Product</p>
            <v-divider></v-divider>
            <p>{{ product.description }}</p>

            <p class="body-2 font-weight-bold primary--text">Composition</p>
            <v-divider></v-divider>
            <p class="caption font-weight-thin">{{ product.composition }}</p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      show: false,
      view: false,
      p: [{}, {}, {}, {}]
    };
  }
};
</script>
