<template>
  <v-layout row wrap>
    <v-flex md12 xs12>
      <v-img
        height="100%"
        width="100%"
        fill-height
        fill-width
        src="https://www.healthline.com/hlcmsresource/images/topic_centers/stone_massage_woman-1200x628-facebook.jpg"
      >
        <v-container fill-height grid-list-md text-xs-center>
          <v-layout row wrap align-center>
            <v-flex shrink xs12 sm12 md5 order-md1 order-sm1>
              <address-component></address-component>
            </v-flex>
            <v-flex grow xs12 sm12 md2 order-md2 order-sm3></v-flex>

            <v-flex grow xs12 sm12 md5 order-md3 order-sm2>
              <v-card tile>
                <v-card-text color="white">
                  <v-container>
                    <v-form ref="form" color="white" v-model="valid" :lazy-validation="lazy">
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Name"
                        required
                      ></v-text-field>

                      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                      <v-textarea
                        v-model="message"
                        name="input-7-4"
                        label
                        placeholder="What do you want to tell us"
                      ></v-textarea>
                    </v-form>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-container fluid>
                    <v-btn
                      color="primary"
                      style="width: 72px; display: inline-block;"
                      wrap
                      @click="mailTo()"
                    >Send</v-btn>
                  </v-container>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
    </v-flex>
  </v-layout>
</template>
<script>
import AddressComponent from "./ContactAddress.vue";
export default {
  components: {
    AddressComponent
  },
  data() {
    return {
      name: null,
      email: null,
      message: "",
      lazy: false,
      valid:true,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    mailTo() {
    }
  }
};
</script>
