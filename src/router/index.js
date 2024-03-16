import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

// TODO: implement authentication
// https://medium.com/@tahnyybelguith/authentication-and-authorization-implementation-with-vue-js-6afcbb821c85

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/home',
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignInView.vue')
    }, 
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      // User is authenticated, allow access if the path is not signin or signup
      if (to.name === 'signin' || to.name === 'signup') {
        next('/home');
      } else {
        next();
      }
    } else {
      // User is not authenticated, redirect to login
      // next('/signin');
      next();
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router;
