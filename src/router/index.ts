import {
  createRouter,
  // createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from "vue-router";


import HomeView from "../views/HomeView.vue";
import CapyBaby from "../components/content/CapyBaby.vue";
import AboutView from "../components/content/AboutView.vue";
import MabinogiView from "../components/content/MabinogiView.vue";
import LoginView from "../components/content/LoginView.vue";
import MemberView from "../components/content/MemberView.vue";
import { useStore } from "../stores/stores";

import { watch } from "vue";

const routes: Array<RouteRecordRaw> = [
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
        name: "login",
        path: "login",
        component: LoginView,
      },
      {
        name: "member",
        path: "member",
        component: MemberView,
      },
    ],
  }];

// const router = createRouter({
//   // history: createWebHistory(import.meta.env.BASE_URL),
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       name: "main",
//       component: HomeView,
//       children: [
//         {
//           name: "home",
//           path: "home",
//           component: CapyBaby,
//         },
//         {
//           name: "about",
//           path: "about",
//           component: AboutView,
//         },
//         {
//           name: "mabinogi",
//           path: "mabinogi",
//           component: MabinogiView,
//         },
//         {
//           name: "starrail",
//           path: "starrail",
//           component: StarRailView,
//         },
//       ]
//     },
//   ]
// });

const router = createRouter({
    history: createWebHashHistory(),
    routes,
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