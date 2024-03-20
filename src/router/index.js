import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";
import LandingPageView from "@/views/LandingView.vue";
import ProfileView from "@/views/ProfileView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import { createRouter, createWebHistory } from "vue-router";

// TODO: implement authentication
// https://medium.com/@tahnyybelguith/authentication-and-authorization-implementation-with-vue-js-6afcbb821c85

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/welcome",
      name: "welcome",
      component: LandingPageView,
      alias: "/intro",
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      alias: "/home",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignInView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const userData = sessionStorage.getItem("user");
    if (userData !== null) {
      // User is authenticated, allow access if the path is not signin or signup
      if (to.name === "signin" || to.name === "signup") {
        next("/home");
      } else {
        next();
      }
    } else {
      // User is not authenticated, redirect to login
      next("/welcome");
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router;
