import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import InvoiceView from '../view/InvoiceView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/invoice/:invoiceId',
    name: 'Invoice',
    component: InvoiceView,
  },
];

const router = createRouter({
  //   history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
