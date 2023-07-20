import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        name : "HomePage",
        path: "/" , 
        component : () => import("@/views/HomePage")  
    },
    {
        name : "NewBookmarkPage",
        path :"/add",
        component : () => import("@/views/NewBookMark")
    }
];

const router = createRouter({
    routes,
    history : createWebHashHistory()
})

export default router;