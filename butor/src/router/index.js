import { createRouter, createWebHistory } from 'vue-router'
import {useAuth} from "@/stores/auth.js";
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import AdminView from '../views/AdminView.vue'
import CategoryView from "@/views/CategoryView.vue";
import ProductView from "@/views/ProductView.vue";
import CartView from "@/views/CartView.vue";
import AdminLogin from "@/views/AdminLOgin.vue";
import LoginRegister from "@/views/LoginRegister.vue";
import UserRegister from "@/views/UserRegister.vue";
import UserLogin from "@/views/UserLogin.vue";
import CheckoutView from "@/views/CheckoutView.vue";



const isNumeric = (n)=>/^\d+$/.test(n);
const isOrderId = (n) => /^ORD-\d{4}$/.test(n)
const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/user-login',
        component: UserLogin,
        meta:{
            title: 'Bejelentkezés',
        }
    },
    {
        path: '/register',
        component: UserRegister,
        meta:{
            title: 'Regisztráció',
        }
    },
    {
        path: '/profile',
        component: ProfileView,
        meta: {
            role: ['user','admin']
        }
    },
    {
        path: '/admin',
        component: AdminLogin,
        meta: {
            role: ['admin']
        }
    },
    {
      path: '/nappali',
      component: CategoryView,
        props:{
          category: 'nappali',
        }
    },
    {
        path: '/konyha',
        component: CategoryView,
        props:{
            category: 'konyha',
        }
    },
    {
        path: '/haloszoba',
        component: CategoryView,
        props:{
            category: 'haloszoba',
        }
    },
    {
        path: '/product/:id',
        component: ProductView,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartView,
    },
    {
        path: '/login',
        name: 'Login',
        component: UserLogin,
    },
    /*{
        path: '/register',
        component: UserRegister,
    },*/
    {
        path: '/user-login',
        component: UserLogin
    },
    {
        path: '/admin-login',
        component: AdminLogin
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: CheckoutView,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem("role") || "guest"
    if (!to.meta.role) {
        next()
    }
    else if (to.meta.role.includes(role)) {
        next()
    }
    else {
        next("/login")
    }
})
export default router