import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/ProductsView/productsView.vue"),
      meta: {
        title: "รายการสินค้า",
        requiresAuth: true
      },
    },
    {
      path: "/signin",
      component: () => import("@/views/login/signin.view.vue"),
      meta: {
        title: "เข้าสู่ระบบ",
      },
    },
    {
      path: "/signup",
      component: () => import("@/views/login/signup.view.vue"),
      meta: {
        title: "เข้าสู่ระบบ",
      },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title}`;

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const currentUser = await getCurrentUser();

   if (requiresAuth && !currentUser) {
    next('/signin');
  } else {
    next(); 
  }
});

export default router;
