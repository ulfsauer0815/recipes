import { createApp } from "vue";
import { createPinia } from "pinia";
import Popper from "vue3-popper";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("Popper", Popper); // eslint-disable-line vue/multi-word-component-names

app.use(createPinia());
app.use(router);

app.mount("#app");
