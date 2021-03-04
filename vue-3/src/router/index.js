import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Test",
    component: () => import("@/views/test/Test")
  },
  {
    path: "/api/reactive",
    name: "ReactiveApiTest",
    component: () => import("@/views/api/reactive-api/ReactiveApiTest")
  },
  {
    path: "/api/reactive2",
    name: "RefsApiTest",
    component: () => import("@/views/api/reactive-api/RefsApiTest")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
