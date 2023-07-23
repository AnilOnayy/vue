import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

const routes = [
    
    { 
      name:"Home",
      path:"/",
      component : () => import("@/views/Home")  
    },
    { 
      name:"Login",
      path:"/login",
      component : () => import("@/views/Login")  
    },
    { 
      name:"Register",
      path:"/register",
      component : () => import("@/views/Register")  
    },
    { 
      name:"NewBookmark",
      path:"/add",
      component : () => import("@/views/Account")  
    },
    { 
      name:"Favorites",
      path:"/favorites",
      meta : {
        componentName: "favorites"
      },
      component : () => import("@/views/Account")  
    },
    { 
      name:"Likes",
      path:"/likes",
      meta : {
        componentName: "likes"
      },
      component : () => import("@/views/Account")  
    },
    { 
      name:"Settings",
      path:"/settings",
      meta : {
        componentName: "settings"
      },
      component : () => import("@/views/Account")  
    },

]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to,from,next) => {
  const authRequiredRoutes = ["Home"];

  const mustNotAuthenticated = ["Login","Register"]

  const _isAuthenticated = store.getters._isAuthenticated;
  
  if( authRequiredRoutes.includes(to.name)) // If user in the AuthRequired Pages
  {
     if(_isAuthenticated) next();
     else next({name :"Login"});
  }
  else if(mustNotAuthenticated.includes(to.name) && _isAuthenticated) next(false); // If user in the Authentication Pages and Is Authenticated
  
  else{
    next();
  } 
  

});


export default router;