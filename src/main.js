import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import iconAssets from "./assets/icons/iconAssets.vue";

createApp(App)
  .component("icon", iconAssets)
  .use(store)
  .use(router)
  .mount("#app");
