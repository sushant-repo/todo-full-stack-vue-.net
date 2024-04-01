import { createRouter, createWebHistory } from "vue-router";

import Inbox from "@/views/Inbox.vue";

const routes = [{ path: "/", component: Inbox }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
