import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import NotFound from '@/views/NotFound.vue' 
import ProductDetails from '@/views/ProductDetails.vue'
import Products from '@/views/Products.vue'
import MyCard from '@/views/MyCard.vue'

 
const routes =
[
  { 
    path: '/', component: Home 
  },
  { 
    path: '/about', component: About 
  },
  { 
    path: '/products', component: Products
  },
  { 
    path: '/mycard', component: MyCard 
  },
  {
    path: "/products/:id", 
    name: "ProductDetail", 
    component: ProductDetails, 
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 