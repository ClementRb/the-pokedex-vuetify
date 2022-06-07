import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

import VueCompositionAPI from "@vue/composition-api";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);
library.add(far);
dom.watch();

Vue.config.productionTip = false;

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueCompositionAPI);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
