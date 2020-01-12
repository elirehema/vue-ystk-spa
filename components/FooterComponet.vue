<template>
  <v-footer dark padless>
    <v-card flat tile color="primary lighten-0" class="white--text text-center" width="100%">
      <v-card-title dense>
        <strong class="subheading white--text">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4 white--text"
          icon
          :href="icon.link"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text v-if="$vuetify.breakpoint.smAndUp" class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
        a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
        tempor vel ut orci. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;{{ new Date().getFullYear() }} —
        <strong class="white--text">MagicHands Massage</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: [
        {
          icon: "mdi-facebook",
          link: "https://web.facebook.com/magichandsmassagetz/"
        },
        { icon: "mdi-twitter", link: "https://twitter.com/massagetz" },
        { icon: "mdi-linkedin", link: "/" },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/massagemagichands/"
        }
      ]
    };
  }
};
</script>