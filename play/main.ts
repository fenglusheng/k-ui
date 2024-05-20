import { createApp } from "vue";
import App from "./app.vue";
import kui from "@k-ui/components";
const app = createApp(App);
app.use(kui);
app.mount("#app");
