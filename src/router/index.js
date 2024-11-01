import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Catalog from "@/components/pages/Catalog.vue";
import Contact from "@/components/pages/Contact.vue";
import CatalogProduct from "@/components/pages/CatalogProduct.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/catalogue', component: Catalog},
    {path: '/catalogue/:id', component: CatalogProduct},
    {path: '/contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        return { top: 0 };
    },
})

export default router