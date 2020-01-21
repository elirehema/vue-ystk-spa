<template>
  <v-expansion-panel expand flat class="transparent elevation-0 vuse-expansion">
    <v-expansion-panel-content class="expansionbg">
      <div slot="header">Attachments ({{mediaList.length}})</div>
      <v-card flat>
        <v-card-text class="overflow-hidden py-0">
          <v-layout row align-content-center v-vuse-scrollbar:x>
            <v-flex v-for="media in mediaList" :key="media.id" px-1 pb-2 class="flex-0">
              <div class="pos-relative">
                <img :src="media.src" height="133" width="133px" />

                <v-btn
                  small
                  icon
                  class="pos-absolute remove-media"
                  color="basetext"
                  @click="removeMedia(media.id)"
                >
                  <v-icon color="white">close</v-icon>
                </v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  data() {
    return {
      mediaList: [
        {
          id: 1,
          src:
            "https://answersafrica.com/wp-content/uploads/2015/01/somalia.jpg"
        },
        {
          id: 1,
          src:
            "https://answersafrica.com/wp-content/uploads/2015/01/somalia.jpg"
        }
      ]
    };
  }
};
</script>