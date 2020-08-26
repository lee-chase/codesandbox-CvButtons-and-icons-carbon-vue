import Vue from "vue";
import App from "./src/App";

// All components at once
import CarbonComponentsVue from "@carbon/vue";
Vue.use(CarbonComponentsVue);

new Vue({
  el: "#app",
  render: h => h(App)
});
