import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/Inbox.vue") },
  {
    path: "/settings/color",
    component: () => import("@/views/ColorPalettesBuilder.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
