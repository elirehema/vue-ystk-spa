<template>
  <gender-component :data="infos"></gender-component>
</template>
<script>
import GenderComponent from "~/components/women/GenderComponent.vue";
export default {
  components: {
    GenderComponent
  },
  data() {
    return {
      infos: {
        title: "",
        subtitle: "SiTAMET CONSTECTETUR ADIPISCI VELIT",
        background: "https://www.apexdspa.in/assets/img/slider/main-xs-3.jpg",
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
      }
    };
  }
};
</script>