import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';
import CartView from '../views/CartView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/product/:id', name: 'product-detail', component: ProductDetailView, props: true },
  { path: '/cart', name: 'cart', component: CartView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
