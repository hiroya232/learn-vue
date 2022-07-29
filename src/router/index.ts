import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Login from "../pages/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "hello-world",
      component: HelloWorld,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
