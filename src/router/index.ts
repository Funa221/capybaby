import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from "vue-router";


import HomeView from "../views/HomeView.vue";
import CapyBaby from "../components/content/CapyBaby.vue";
import AboutView from "../components/content/AboutView.vue";
import MabinogiView from "../components/content/MabinogiView.vue";
import StarRailView from "../components/content/StarRailView.vue";
import { useStore } from "../stores/stores";

import { watch } from "vue";

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
        {
          name: "mabinogi",
          path: "mabinogi",
          component: MabinogiView,
        },
        {
          name: "starrail",
          path: "starrail",
          component: StarRailView,
        },
      ]
    },
  ]
});


// 判斷是否在相同路由，新舊SelectedPage來關閉菜單
router.afterEach((_, __) => {
  const SideBar = useStore();

    watch(
      () => SideBar.SelectedPage,
      (newValue: any, oldValue: any) => {
        if (newValue !== oldValue) {
          SideBar.isMenuOpen = false;
        }
      }
    );
});


router.beforeEach((_, __, next) => {
  //-------------------------------------
  const SideBar = useStore();

  SideBar.isMenuOpen = false;

  window.scrollTo(0, 0);
  next();
});

export default router;