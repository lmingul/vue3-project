import { createApp } from "vue";

import App from "./App.vue";

// import TheHeader from "./components/BadgeComponts/TheHeader.vue";
import BaseBadge from "./components/BadgeComponts/BaseBadge.vue";
// import BadgeList from "./components/BadgeComponts/BadgeList.vue";
// import UserInfo from "./components/BadgeComponts/UserInfo.vue";
import BaseCard from "./components/BadgeComponts/BaseCard.vue";

const app = createApp(App);

// 全局注册组件
// app.component("the-header", TheHeader);
app.component("base-badge", BaseBadge);
// app.component("badge-list", BadgeList);
// app.component("user-info", UserInfo);
app.component("base-card", BaseCard);

app.mount("#app");
