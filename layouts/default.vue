<template>
  <v-app dark>
    <v-app-bar
      app
      absolute
      color="primary"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-avatar>
        <img src="~assets/img/logo.png" alt="John" />
      </v-avatar>

      <v-spacer />

      <v-card
        v-if="$vuetify.breakpoint.mdAndUp"
        class="d-flex flex-row-reverse"
        color="primary"
        flat
        tile
      >
        <v-card tile flat color="primary">
          <v-btn
            v-for="(n, index) in draweritems"
            :key="index"
            small
            class="white--text text-uppercase font-weight-regular"
            dense
            text
            :to="n.to"
          >{{n.title}}</v-btn>
        </v-card>
      </v-card>
      <v-btn v-if="$vuetify.breakpoint.smAndDown" icon @click.stop="click">
        <v-icon color="white">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container ma-0 pa-0 fluid>
        <nuxt />
      </v-container>
    </v-content>
    <navigation-drawer-component :draweritems="draweritems" ref="childComponent"></navigation-drawer-component>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import FooterComponent from "~/components/FooterComponet.vue";
import NavigationDrawerComponent from "~/components/NavigationDrawerComponent.vue";
export default {
  components: {
    FooterComponent,
    NavigationDrawerComponent
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      draweritems: [
        {
          icon: "mdi-home-variant",
          iconClass: "primary lighten-1 white--text",
          title: "Home",
          subtitle: "Lorem ipsum dolor sit de amet ...",
          to: "/"
        },
        // {
        //   icon: "mdi-face-profile",
        //   iconClass: "primary lighten-1 white--text",
        //   title: "Salon",
        //   subtitle: "Lorem ipsum dolor sit de amet ...",
        //   to: "/salon"
        // },
        {
          icon: "mdi-face",
          iconClass: "primary lighten-1 white--text",
          title: "Men",
          subtitle: "Lorem ipsum dolor sit de amet ...",
          to: "/men"
        },
        {
          icon: "mdi-face-woman",
          iconClass: "primary lighten-1 white--text",
          title: "Women",
          subtitle: "Lorem ipsum dolor sit de amet ...",
          to: "/women"
        },
        {
          icon: "mdi-format-list-text",
          iconClass: "primary lighten-1 white--text",
          title: "Products",
          subtitle: "Lorem ipsum dolor sit de amet ...",
          to: "/products"
        },
        {
          icon: "mdi-file-phone",
          iconClass: "primary lighten-1 white--text",
          title: "Contact Us",
          subtitle: "Lorem ipsum dolor sit de amet ...",
          to: "/contact"
        }
      ],

      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  methods: {
    click: function() {
      this.$refs.childComponent.setValue();
    }
  }
};
</script>
<style scoped>
</style>