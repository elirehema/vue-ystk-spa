// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify/lib";
Vue.use(Vuetify);
export default ctx => {
  const vuetify = new Vuetify({
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#21CFF3",
          accent: "#FF4081",
          secondary: "#ffe18d",
          success: "#4CAF50",
          info: "#2196F3",
          warning: "#FB8C00",
          error: "#FF5252"
        },
        light: {
          primary: "#6e2020",
          accent: "#E91E63",
          secondary: "#30b1dc",
          success: "#4CAF50",
          info: "#2196F3",
          warning: "#FB8C00",
          error: "#FF5252"
        }
      }
    }
  });
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
