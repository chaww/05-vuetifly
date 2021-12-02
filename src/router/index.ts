import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import authRoutes from '@/router/auth';
import demoRoutes from '@/router/demo'


// declare module 'vue-router/types/router' {
//   interface _RouteConfigBase {
//     layout?: string,
//   }
// }

Vue.use(VueRouter);

const metaDefault = {
  layout: 'default',
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
    // meta: { ...metaDefault }
  },
  ...authRoutes,
  ...demoRoutes,
  // {
  //   path: "/login",
  //   component: () => import("@/components/auth/LoginCard.vue"),
  //   meta: { ...metaDefault, layout: 'auth' },
  //   props: {
  //     test: () => {
  //       console.log('test')
  //     }
  //   }
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
