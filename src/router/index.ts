import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";


import HomeView from "../views/HomeView.vue";
import CapyBaby from "../components/content/CapyBaby.vue";
import AboutView from "../components/content/AboutView.vue";


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: HomeView,
      children: [
        {
          name: "home",
          path: "home",
          component: CapyBaby,
        },
        {
          name: "about",
          path: "about",
          component: AboutView,
        },
      ]
    },
  ]
});
export default router;