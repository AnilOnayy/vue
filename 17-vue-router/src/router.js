import { createRouter, createWebHashHistory } from "vue-router";

// import Home from '@/views/Home.vue';


const routes = [
    {
        name : "HomePage",
        path : "/",
        // component : Home
        component : () => import("@/views/HomeView")
    },
    {
        name : "AboutPage",
        path :"/about",
        component : () => import("@/views/AboutView")
    }
    ,
    {
        name : "DetailPage",
        path :"/detail/:id",
        component : () => import("@/views/DetailsView")
    }
];


const router = createRouter({
    routes,
    // history : createWebHistory()
    history : createWebHashHistory()
});


export default router;