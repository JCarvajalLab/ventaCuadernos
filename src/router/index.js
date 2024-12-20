import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ProductoView from '../views/ProductoView.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/LoginView.vue'
import CuentaView from '../views/CuentaView.vue'
import RegistroView from '../views/RegistroView.vue'
import NotFoundView from '../views/NotFoundView.vue' // Importa la vista de error 404

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: CatalogView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/producto/:id',
    name: 'producto',
    component: ProductoView
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CartView
  },
  {
    path: '/iniciar-sesion',
    name: 'iniciar-sesion',
    component: LoginView
  },
  {
    path: '/cuenta',
    name: 'cuenta',
    component: CuentaView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView
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