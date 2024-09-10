import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: () => import("../views/WelcomePage/WelcomePage.vue"), // это ленивая загрузка. Компонент будет импортирован при необзодимости, поэтому не надо импортировать его сверху
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/WelcomePage/LoginForm/LoginForm.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/WelcomePage/SignUpForm/SignUpForm.vue"),
    },
  ],
})

export default router
