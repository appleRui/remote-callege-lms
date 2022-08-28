import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

// Register Vue-Router
app.use(router);

// Register Antd-Design-Vue
app.use(Antd);

app.mount("#app");
