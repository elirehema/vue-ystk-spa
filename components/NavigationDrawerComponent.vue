<template>
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.smAndDown"
    v-model="rightDrawer"
    right
    temporary
    fixed
    class="primary"
  >
    <v-list>
      <v-list-item v-for="(i, index) in draweritems" :key="index" :to="i.to">
        <v-list-item-avatar>
          <v-icon :class="[i.iconClass]" v-text="i.icon"></v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="i.title" class="white--text overline"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: ["draweritems"],
  data() {
    return {
      right: false,
      rightDrawer: false
    };
  },
  methods: {
    setValue: function() {
      this.rightDrawer = !this.rightDrawer;
    }
  }
};
</script>