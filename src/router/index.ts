import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // Используем hash-историю вместо history
  routes: [
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("../views/WelcomePage/WelcomePage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import("../views/WelcomePage/AuthModals/LoginForm/LoginForm.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import("../views/WelcomePage/AuthModals/SignUpForm/SignUpForm.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomePage/HomePage.vue"),
    },
    {
      path: "/home/start",
      name: "start",
      component: () => import("../views/GetStart/GetStart.vue"),
    },
    {
      path: "/home/main",
      name: "main",
      component: () => import("../views/CardList/CardList.vue"),
    },
  ],
})

export default router
