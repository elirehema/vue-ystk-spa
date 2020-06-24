<template>
  <v-app dark>
    <v-card flat tile>
      <v-toolbar color="primary" dark flat>
        <v-avatar>
          <img src="~assets/img/logo.png" alt="John" />
        </v-avatar>
        
        <v-toolbar-title>&nbsp;{{title}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-slot:extension>
          <v-tabs v-model="tab" right>
            <v-tabs-slider color="yellow"></v-tabs-slider>

            <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <home-component></home-component>
        </v-tab-item>
        <v-tab-item>  <gender-component :data="maleinfos"></gender-component></v-tab-item>
        <v-tab-item>  <gender-component :data="femaleinfos"></gender-component></v-tab-item>
        <v-tab-item><bottle-component></bottle-component>
        </v-tab-item>
        <v-tab-item>  <contact-us-component></contact-us-component></v-tab-item>
      </v-tabs-items>
    </v-card>
    <footer-component></footer-component>
  </v-app>
</template>

<script>
import ContactUsComponent from "~/components/contacts/ContactFormComponent.vue";
import BottleComponent from "~/components/products/products.vue";
import GenderComponent from "~/components/women/GenderComponent.vue";
import FooterComponent from "~/components/FooterComponet.vue";
import HomeComponent from "~/components/HomePage.vue";
export default {
  components: {
    ContactUsComponent,
    BottleComponent,
    GenderComponent,
    FooterComponent,
    HomeComponent
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      tab: null,
      title:'Magic Hands Massage',
      items: ["Home", "Male", "Female", "Products", "Contact Us"],
       maleinfos: {
        title: "",
        subtitle: "Massage Therapy for Men",
        background: "https://img.wallpapersafari.com/desktop/1920/1080/30/72/RY0iap.jpg",
        image: "http://femaletomalebodymassageinmumbai.com/img/second.jpg",
        description: "Massage is a necessity for men who play physical sports. Massage not only eases the onset of muscle soreness, but can speed healing by boosting the body’s circulatory and immune system.  A sports massage is specifically designed to improve athletic performance."
          
      },
      femaleinfos: {
        title: "",
        subtitle: "Massage Therapy for Women",
        background:
          "https://img.wallpapersafari.com/desktop/1920/1080/30/72/RY0iap.jpg",
        image:
          "https://www.aaby-beautyacademy.co.uk/wp-content/uploads/2016/01/body-massage.jpg",
        description:"Benefits of Massage for Women Massage can lower blood pressure by lowering your overall heart rate. Massage can boost your immune system, stimulating your killer cells"
      }
      };
  }
};
</script>
