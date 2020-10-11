import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Index/Home.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Index/Login.vue"),
    },
    {
        path: "/dashboard",
        name: "DashBoard",
        component: () => import("../views/DashBoard/Main.vue"),
    },
    {
        path: "/404",
        name: "404",
        component: () => import("../views/Error/404.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
