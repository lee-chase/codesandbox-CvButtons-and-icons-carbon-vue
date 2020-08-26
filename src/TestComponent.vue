<template>
  <div>
    <cv-link href="javascript:void(0)">The following icon should be the color of this text.
      <Edit16/>
    </cv-link>
    <br>
    <br>
    <span class="green">This is just some text with an icon after it.
      <Edit16/>
    </span>

    <br>
    <br>
    <cv-button>Hello world
      <Edit16/>
    </cv-button>
    <br>
    <br>
    <cv-button :icon="MyEdit16">Hello world</cv-button>

    <br>
    <br>
    <cv-button :icon="anEdit16">Hello world</cv-button>

    <br>
    <br>
    <cv-button :icon="AddFilled16">Hello world</cv-button>
  </div>
</template>

<script>
import Edit16 from "@carbon/icons-vue/es/edit/16";
import AddFilled16 from "@carbon/icons-vue/es/add--filled/16";

export default {
  name: "TestComponent",
  components: { Edit16 },
  created() {
    this.anEdit16 = Edit16;
  },
  data() {
    return {
      AddFilled16
    };
  },
  computed: {
    MyEdit16() {
      return Edit16;
    }
  }
};
</script>

<style scoped>
.green {
  color: green;
}
</style>
