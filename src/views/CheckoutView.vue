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

<div class="checkout-container">
    <!-- ¿Ya eres cliente? -->
    <div class="checkout-left" style="overflow: auto; max-height: 190px;">
        <div class="login-container">
            <h2>¿Ya eres cliente?</h2>
            <p>Ingresa con tu datos</p>
            <p>Inicia sesión para una compra más rápida.</p>
            <v-btn @click="iniciarSesion">Iniciar sesión</v-btn>
        </div>
    </div>
    <div class="divider"></div>
    <!-- ¿Todavía no tienes una cuenta? -->
    <div class="checkout-left2" style="overflow: auto; max-height: 190px;">
        <div class="guest-container">
            <h2>¿Todavía no tienes una cuenta?</h2>
            <p>No te preocupes. Sigue tu compra como invitado.</p>
            <v-btn @click="continuarComoInvitado">Continuar como invitado</v-btn>
            <p>
                <router-link to="/crear-cuenta">Crear nueva cuenta</router-link>
            </p>
        </div>
    </div>

    <!-- Resumen de tu Compra -->
    <div class="checkout-right">
        <div class="resumen-compra">
            <h2>Resumen de tu compra</h2>
            <p>Tu carro ({{ totalProducts }} productos) <v-btn @click="goCarro" style="margin-left:60px">Volver al carro</v-btn>
            </p>
            <div class="productosList" style="overflow: auto; max-height: 400px; margin-top:20px">
                <div class="producto" v-for="producto in cartItems" :key="producto.id">
                    <img :src="producto.url" alt="Imagen del producto" style="width: 50px; height: 50px; margin-right: 10px;" />
                    <div style="display: inline-block;">
                        <h3>{{ producto.name }}</h3>
                        <p>Cantidad: {{ producto.cantidad }}</p>
                        <p>Total: {{ formatoMoneda(parseFloat(producto.precio.replace("$", "")) * producto.cantidad) }}</p>
                    </div>
                </div>
                <p>Total de todos los productos: {{ formatoMoneda(totalCompra) }}</p>
            </div>
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
    margin: 0;
}

.checkout-container {
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.checkout-left,
.checkout-left2 {
    width: 25%;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 0;
}

.checkout-left {
    margin-left: 100px;
}

.divider {
    border-bottom: 1px solid #ccc;
    margin: 0;
    height: 20px;
}

.login-container,
.guest-container {
    margin-bottom: 0;
}

.checkout-right {
    width: 25%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.guest-container {
    margin-bottom: 20px;
}

.resumen-compra {
    margin-bottom: 20px;
}

.producto {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    /* Alinea verticalmente la imagen y el texto */
}

.producto img {
    width: 50px;
    /* Ajusta el tamaño de la imagen */
    height: 50px;
    /* Ajusta el tamaño de la imagen */
    margin-right: 10px;
    /* Espacio entre la imagen y el texto */
}
</style>
