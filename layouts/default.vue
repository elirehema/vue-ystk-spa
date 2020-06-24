<template>
  <v-app dark>
    <v-card flat>
      <v-toolbar color="primary" dark flat>
        <v-avatar>
          <img src="~assets/img/logo.png" alt="John" />
        </v-avatar>

        <v-toolbar-title>Your Dashboard</v-toolbar-title>

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
      items: ["Home", "Male", "Female", "Products", "Contact Us"],
       maleinfos: {
        title: "",
        subtitle: "SiTAMET CONSTECTETUR ADIPISCI VELIT",
        background: "https://img.wallpapersafari.com/desktop/1920/1080/30/72/RY0iap.jpg",
        image: "http://femaletomalebodymassageinmumbai.com/img/second.jpg",
        description:
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui." +
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui." +
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui." +
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui." +
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui."
      },
      femaleinfos: {
        title: "",
        subtitle: "SiTAMET CONSTECTETUR ADIPISCI VELIT",
        background:
          "https://img.wallpapersafari.com/desktop/1920/1080/30/72/RY0iap.jpg",
        image:
          "https://www.aaby-beautyacademy.co.uk/wp-content/uploads/2016/01/body-massage.jpg",
        description:
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui." +
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui." +
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui." +
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui." +
          "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet." +
          "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus" +
          "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim" +
          "a sit amet dui."
      }
      };
  }
};
</script>
