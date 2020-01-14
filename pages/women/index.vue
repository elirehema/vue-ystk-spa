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
        background:
          "http://www.cislcampania.it/cislcampania/wp-content/uploads/2013/10/centrobenessere.jpg",
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