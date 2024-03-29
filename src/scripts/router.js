import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup"
import Cart from "@/pages/Cart.vue";
import Order from "@/pages/Order";
import Orders from "@/pages/Orders";
import Products from "@/pages/Products";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/signup', component: Signup},
        {path: '/cart', component: Cart},
        {path: '/order', component: Order},
        {path: '/orders', component: Orders},
        {path: '/products', component: Products},
    ]
})

export default router;