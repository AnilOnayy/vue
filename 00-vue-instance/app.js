const app = Vue.createApp({
  data(){
    return {
      title : "Welcome To Vue",
      description : "lorem Ips incorrectly translated into something",
      object : {
        link :"http://vuejs.org/",
        title : "Welcome to Vue",
        target : "_blank",
        alt : "mufredat-vuejs"
      },
      coords :{
        x : "",
        y : ""
      }
    };
  },
  methods : {
    changeTitleValue(value){
      this.title = value;
    }
    ,
    updateCoords(event)
    {
      this.coords = {
        x :  event.x,
        y :  event.y
      }
   

    }
  }
}).mount("#app");