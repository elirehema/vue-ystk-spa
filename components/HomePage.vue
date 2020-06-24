<template>
  <v-layout row wrap>
    <v-flex md12 xs12>
      <v-img
        height="800"
        width="100%"
        fill-height
        fill-width
        src="https://img.wallpapersafari.com/desktop/1920/1080/30/72/RY0iap.jpg"
      >
        <v-container fill-height grid-list-md text-xs-center>
          <v-layout row wrap align-center>
            <v-flex shrink xs12 sm6 md5 order-md1 order-sm1>
              <v-card dark tile flat color="rgb(255, 0, 0, 0)">
                <v-card-title
                  v-if="$vuetify.breakpoint.mdAndUp"
                  class="black--text font-weight-bold display-1 justify-center"
                >{{title}}</v-card-title>
                <v-card-title
                  v-if="$vuetify.breakpoint.smAndDown"
                  class="black--text font-weight-bold title"
                >{{title}}</v-card-title>
              </v-card>
            </v-flex>
            <v-flex grow xs12 sm6 md7 order-md2 order-sm2>
              <v-card dark tile flat color="rgb(255, 0, 0, 0.1)">
                <v-card-text class="black--text">
                  <span v-if="$vuetify.breakpoint.smAndDown">{{ description }}</span>
                  <span v-if="$vuetify.breakpoint.mdAndUp">{{ description_large }}</span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
    </v-flex>
  </v-layout>
</template>

<script>

export default {

  data() {
    return {
      description:
        "Magic Hands Massage — spa website design inspiration, spa" +
        "website design ideas, spa website layout, spa, beauty," +
        "health, white, grey, turquoise, fresh, clean, feminine," +
        "minimal, web design, website design, professional, brand design, brand identity," +
        "website design inspiration, feminine branding design",
      description_large:
        "Magic Hands Massage — spa website design inspiration, spawebsite design ideas, spa website layout, spa, beauty,health, white, grey, turquoise, fresh, clean, feminine,minimal, web design, website design, professional, brand design, brand identity,website design inspiration, feminine branding designIf you’re quite active on Instagram, you probably know just howcommon inspirational quotes are on the platform. The truth is, they work.They never cease to get engagement. But this doesn’t just happen on Instagram:people simply love relating to positive statements! That’s also why many salonsand spas these days will have light boxes sitting at the front desk, displayinga fun or inspiring saying. So whether you’re looking for social media material,a bank of spa quotes to insert at the bottom of amarketing email or display on your light box, we’ve got you covered! Magic Hands Massage — spa website design inspiration, spawebsite design ideas, spa website layout, spa, beauty,health, white, grey, turquoise, fresh, clean, feminine,minimal, web design, website design, professional, brand design, brand identity,website design inspiration, feminine branding designIf you’re quite active on Instagram, you probably know just howcommon inspirational quotes are on the platform. The truth is, they work.They never cease to get engagement. But this doesn’t just happen on Instagram:people simply love relating to positive statements! That’s also why many salonsand spas these days will have light boxes sitting at the front desk, displayinga fun or inspiring saying. So whether you’re looking for social media material,a bank of spa quotes to insert at the bottom of amarketing email or display on your light box, we’ve got you covered!",
      title: "Magic Hands Massage"
    };
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
