<template>
  <v-footer dark padless>
    <v-card flat tile color="primary lighten-0" class="white--text text-center" width="100%">
      <v-card-title dense>
        <h5 class="subheading white--text">Connect with us on social media!</h5>

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
              <a
                class="twitter-timeline"
                data-height="430"
                href="https://twitter.com/massagetz?ref_src=twsrc%5Etfw"
              >Tweets by massagetz</a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              <a
                href="https://twitter.com/massagetz?ref_src=twsrc%5Etfw"
                class="twitter-follow-button"
                data-show-count="false"
              >Follow @massagetz</a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                class="twitter-share-button"
                data-show-count="false"
              >Tweet</a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              <a
                href="https://twitter.com/intent/tweet?screen_name=massagetz&ref_src=twsrc%5Etfw"
                class="twitter-mention-button"
                data-show-count="false"
              >Tweet to @massagetz</a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              
            </v-flex>

            <v-flex xs12 sm12 md4 order-md2 order-sm2>
               <iframe src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2F176175273301461&width=600&colorscheme=light&show_faces=true&border_color&stream=true&header=true&height=435" 
               scrolling="yes" style="border:none; overflow:hidden; width:100%; height:430px; background: white; float:left; "
                allowtransparency="true" frameborder="0"></iframe>
                
            </v-flex>
            <v-flex xs12 sm12 md4 order-md3 order-sm3>
            <iframe width="320" height="440" src="http://instagram.com/p/qbq6fIJMVZ/embed" frameborder="0"></iframe>
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
        },
        {
          icon: "mdi-whatsapp",
          link: "https://api.whatsapp.com/send?phone=255767695999&text=I%27m%20interested%20in%20your%20service...%20&source=&data="
        }
      ]
    };
  }
};
</script>