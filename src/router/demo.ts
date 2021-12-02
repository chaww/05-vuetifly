import { RouteConfig } from "vue-router";

export default [
  {
    path: "/demo",
    component: () => import("../_demo/views/Demo.vue"),
  },
] as Array<RouteConfig>;