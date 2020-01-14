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

      <v-card-text class="white--text pt-0">
        <v-container fluid fill-height grid-list-md text-xs-center>
          <v-layout row wrap align-center>
            <v-flex xs12 sm12 md4 order-md1 order-sm1>
              <v-card dark tile flat color="rgb(255, 0, 0, 0)">
                <v-card-title class="justify-center black--text">Lorem Ipsum dolor sit de amet</v-card-title>
                <v-card-text class="justify-center black--text">
                  Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
                  Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
                  accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
                  a sit amet dui.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4 order-md2 order-sm2>
              <v-card dark tile flat color="rgb(255, 0, 0, 0)">
                <v-card-title class="justify-center">Lorem Ipsum dolor sit de amet</v-card-title>
                <v-card-text class="justify-center">
                  Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
                  Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
                  accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
                  a sit amet dui.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4 order-md3 order-sm3>
              <v-card dark tile flat color="rgb(255, 0, 0, 0)">
                <v-card-title class="justify-center black--text">Lorem Ipsum dolor sit de amet</v-card-title>
                <v-card-text class="justify-center black--text">
                  Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
                  Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
                  accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
                  a sit amet dui.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
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