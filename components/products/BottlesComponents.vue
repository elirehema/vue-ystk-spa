<template>
  <v-card class="mx-auto" color="grey lighten-3">
    <v-img :src="product.image" height="344px"></v-img>

    <v-card-title>
      <p class="overline">{{product.title}}</p>
      <v-spacer></v-spacer>
      <p class="overline">{{product.price ? '$ '+ product.price : '$ 0.0'}}</p>
    </v-card-title>

    <v-card-subtitle class="font-weight-light caption">{{ product.subtitle }}</v-card-subtitle>

    <v-card-actions>
      <v-btn color="primary" @click="view = !view" text>Explore</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
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
          <p>{{product.description}}</p>

          <p class="body-2 font-weight-bold primary--text">Composition</p>
          <v-divider></v-divider>
          <p class="caption font-weight-thin">{{ product.composition }}</p>
        </v-card-text>
      </div>
    </v-expand-transition>
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