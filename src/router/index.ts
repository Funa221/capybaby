import {
    createRouter,
    // createWebHistory,
    createWebHashHistory,
} from "vue-router";


import HomeView from "../views/HomeView.vue";
import CapyBaby from "../components/content/CapyBaby.vue";


const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            children: [
              {
                name: "main",
                path: "main",
                component: CapyBaby,
              },
              ]
        }]
});
export default router;