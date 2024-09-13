import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("../views/WelcomePage/WelcomePage.vue"), // это ленивая загрузка. Компонент будет импортирован при необзодимости, поэтому не надо импортировать его сверху
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
