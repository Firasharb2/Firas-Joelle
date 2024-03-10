import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserSignUp from "../views/UserSignUp.vue"; // Check the filename casing here
import UserLogin from "../views/UserLogin.vue";
import test from "../views/test.vue";
import TheOne from "../views/TheOne.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/UserSignUp",
    name: "SignUp",
    component: UserSignUp,
  },
  {
    path: "/Login",
    name: "Login",
    component: UserLogin,
  },
  {
    path: "/test",
    name: "Test",
    component: test,
  },
  {
    path: "/TheOne",
    name: "TheOne",
    component: TheOne,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
