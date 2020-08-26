<template>
  <div id="app" class="app">
    <!-- <cv-button icon="anIc">Hello world</cv-button> -->
    <!-- <cv-button
      :icon="ChevronRight16"
    >I am a button</cv-button>-->
    <test-component/>
  </div>
</template>

<script>
// import Edit16 from "@carbon/icons-vue/es/edit/16.js";
// import AddFilled16 from "@carbon/icons-vue/es/add--filled/16";
import TestComponent from "./TestComponent.vue";

export default {
  name: "App",
  components: { TestComponent }
};
</script>

<style lang="scss">
.app {
  padding: 50px;
}
</style>
