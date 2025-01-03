import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/LoginView.vue'
import CuentaView from '../views/CreateUserView.vue'
import ContactView from '../views/ContactView.vue'
import InfoView from '../views/InfoView.vue'
import AllProductosView from '../views/AllProductosView.vue'
import RecoverAccount from '../views/RecoverAccount.vue'
import NotFoundView from '../views/NotFoundView.vue' // Importa la vista de error 404

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/allproductos',
    name: 'allproductos',
    component: AllProductosView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactView
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CartView
  },
  {
    path: '/informacion',
    name: 'informacion',
    component: InfoView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cuenta',
    name: 'cuenta',
    component: CuentaView
  },
  {
    path: '/recoverAccount',
    name: 'recoverAccount',
    component: RecoverAccount
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router