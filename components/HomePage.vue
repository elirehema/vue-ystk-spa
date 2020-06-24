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
        "Massage is no longer available only through luxury spas and upscale health clubs. "+
        "Today, massage therapy is offered in businesses, clinics, hospitals and even airports."+
        " If you've never tried massage,"+
        " learn about its possible health benefits and what to expect during a massage therapy session." +
        "Magic Hands offers a unique opportunity for professional massage therapists to enhance their skills and advance their practice in the acute care hospital setting. ",
      description_large:
        " Massage is no longer available only through luxury spas and upscale health clubs."+
        " Today, massage therapy is offered in businesses, clinics, hospitals and even airports."+
        " If you've never tried massage, learn about its possible health benefits and what to expect"+
        
        " during a massage therapy session. " +
        "Magic Hands offers a unique opportunity for professional massage therapists to enhance their"+
        " skills and advance their practice in the acute care hospital setting. ",
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
