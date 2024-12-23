<template>
<!-- Navbar -->
<v-app-bar app class="bg-indigo-lighten-1" :elevation="0" rounded>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>
    <v-app-bar-title>
        <v-btn text @click="goToHome" style="padding: 0;">
            <img :src="logo" alt="Logo" class="logo" />
        </v-btn>
    </v-app-bar-title>
    <template v-slot:append>
        <div class="d-none d-md-flex">
            <v-btn text @click="goHome" style="margin: 0 10px;">Inicio</v-btn>
        </div>
    </template>
</v-app-bar>
<!-- /Navbar -->
<div>
    <h1>Checkout</h1>
</div>

<div class="checkout-container">
    <div class="checkout-left">
        <div class="login-container">
            <h2>¿Ya eres cliente?</h2>
            <p>Ingresa con tu datos</p>
            <p>Inicia sesión para una compra más rápida.</p>
            <v-btn @click="iniciarSesion">Iniciar sesión</v-btn>
        </div>
        <div class="divider"></div>
        <div class="guest-container">
            <h2>¿Todavía no tienes una cuenta?</h2>
            <p>No te preocupes. Sigue tu compra como invitado.</p>
            <v-btn @click="continuarComoInvitado">Continuar como invitado</v-btn>
            <p>
                <router-link to="/crear-cuenta">Crear nueva cuenta</router-link>
            </p>
        </div>
    </div>
    <div class="checkout-right">
        <div class="resumen-compra">
            <h2>Resumen de tu compra</h2>
            <p>Tu carro ({{ totalProducts }} productos)</p>
            <v-btn @click="goCarro">Volver al carro</v-btn>
            <div class="producto" v-for="producto in cartItems" :key="producto.id">
                <h3>{{ producto.name }}</h3>
                <p>Cantidad: {{ producto.cantidad }}</p>

                <p>Total: {{ formatoMoneda(parseFloat(producto.precio.replace("$", "")) * producto.cantidad) }}</p>
            </div>
            <p>Total de todos los productos: {{ formatoMoneda(totalCompra) }}</p>
        </div>
    </div>
</div>

<!-- Footer -->
<v-footer app class="bg-indigo-lighten-1 text-center">
    <v-container>
        <div class="mt-1">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
    </v-container>
</v-footer>
<!-- /Footer -->
</template>

<script>
import {
    computed
} from "vue";
import {
    useStore
} from "vuex";

export default {
    name: "CheckoutView",
    data: () => ({
        visible: false,
        logo: require('@/assets/preview.png'),
    }),
    components: {},
    setup() {
        const store = useStore();
        const cartItems = computed(() => store.state.productos.filter((producto) => producto.cantidad > 0));
        const totalProducts = computed(() => cartItems.value.reduce((total, producto) => total + producto.cantidad, 0));
        const totalCompra = computed(() => {
            return cartItems.value.reduce((total, producto) => {
                return total + parseFloat(producto.precio.replace("$", "")) * producto.cantidad;
            }, 0);
        });

        const formatoMoneda = (valor) => {
            return `$ ${Math.round(valor)}`;
        };

        const iniciarSesion = () => {
            // Lógica para iniciar sesión
        };

        const continuarComoInvitado = () => {
            // Lógica para continuar como invitado
        };

        return {
            cartItems,
            totalProducts,
            totalCompra,
            formatoMoneda,
            iniciarSesion,
            continuarComoInvitado,
        };
    },
    methods: {
        goHome() {
            this.$router.push({
                name: 'home'
            }); // Asegúrate de que 'home' sea el nombre correcto de tu ruta
        },
        goCarro() {
            this.$router.push({
                name: 'carrito'
            });
        }
    }
}
</script>

<style scoped>
.logo {
    height: 40px;
    /* Ajusta la altura de la imagen según sea necesario */
    margin: 0;
    /* Elimina márgenes si es necesario */
}

.checkout-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.checkout-left {
    width: 50%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.checkout-right {
    width: 40%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-container {
    margin-bottom: 20px;
}

.divider {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
}

.guest-container {
    margin-bottom: 20px;
}

.resumen-compra {
    margin-bottom: 20px;
}

.producto {
    margin-bottom: 20px;
}
</style>
