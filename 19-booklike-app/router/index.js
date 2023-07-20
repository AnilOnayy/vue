import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    
    { 
      name:"Home",
      path:"/",
      component : () => import("@/views/HomeView")  
    },
    { 
      name:"Login",
      path:"/login",
      component : () => import("@/views/LoginView")  
    },
    { 
      name:"Register",
      path:"/register",
      component : () => import("@/views/RegisterView")  
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})


export default router;