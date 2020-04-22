import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  
    {
      path: "/",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "auth" */ "../views/LoginView.vue")
    },
    {
      path: "/category",
      name: "category",
      component: () =>
        import(/* webpackChunkName: "category" */ "../views/CategoryView.vue")
    },
  
  ];

const router = new VueRouter({
    routes,
    base: process.env.BASE_URL,
    mode: "history",
    
  });
  
  export default router;