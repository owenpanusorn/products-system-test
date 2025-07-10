import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/ProductsView/productsView.vue'),
            meta: {
                title: "รายการสินค้า",
              },
        },
    ]
})

router.beforeEach(async (to, from) => {
    document.title = `${to.meta.title}`;
  });
  
  export default router;