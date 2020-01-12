<template>
  <v-layout row wrap>
    <v-flex md12 xs12>
      <v-img
        height="100%"
        width="100%"
        fill-height
        fill-width
        src="https://cdn.pixabay.com/photo/2017/09/06/20/35/massage-2722936_960_720.jpg"
      >
        <v-container fill-height grid-list-md text-xs-center>
          <v-layout row wrap align-center>
            <v-flex shrink xs12 sm6 md5 order-md1 order-sm1>
              <v-card dark tile flat color="rgb(255, 0, 0, 0)">
                <v-card-text class="black--text font-weight-bold display-1">Maggic Hands Massage</v-card-text>
              </v-card>
            </v-flex>
            <v-flex grow xs12 sm6 md7 order-md2 order-sm2>
              <v-card dark tile flat color="rgb(255, 0, 0, 0.1)">
                <v-card-text class="black--text">{{ title1}} {{ title1}}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <!--<v-card class="elevation-20" height="100%">
        <v-toolbar dark color="primary">
          <v-toolbar-title>I want this to take up the whole space with slight padding</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text></v-card-text>
      </v-card>-->
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      title1:
        "Magic Hands Massage — spa website design inspiration, spa" +
        "website design ideas, spa website layout, spa, beauty," +
        "health, white, grey, turquoise, fresh, clean, feminine," +
        "minimal, web design, website design, professional, brand design, brand identity," +
        "website design inspiration, feminine branding design" +
        "If you’re quite active on Instagram, you probably know just how" +
        "common inspirational quotes are on the platform. The truth is, they work." +
        "They never cease to get engagement. But this doesn’t just happen on Instagram:" +
        "people simply love relating to positive statements! That’s also why many salons" +
        "and spas these days will have light boxes sitting at the front desk, displaying" +
        "a fun or inspiring saying. So whether you’re looking for social media material," +
        "a bank of spa quotes to insert at the bottom of a" +
        "marketing email or display on your light box, we’ve got you covered!"
    };
  }
};
</script>
