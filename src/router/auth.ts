import { RouteConfig } from "vue-router";
import LoginCard from '@/components/auth/LoginCard.vue';

export enum AuthPath {
  login = "/login",
  signup = "/login/signup"
}

export default [
  {
    path: "/login",
    component: () => import("@/views/Auth.vue"),
    children: [
      {
        path: '',
        component: LoginCard,
      },
      {
        path: 'signup',
        component: () => import("@/components/auth/SignupCard.vue"),
      },
    ],
  },
] as Array<RouteConfig>;