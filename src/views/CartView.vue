<template>
<ItemNavbar />
<div class="main-container">
    <!-- Contenedor principal para centrar -->
    <div class="cart-container mx-auto pa-6" max-width="600" rounded="lg" elevation="4">
        <div class="text-h6">Tu carro (0 productos)</div>
        <div class="icon-container text-center my-4">
            <!-- Contenedor para centrar el ícono -->
            <v-icon class="large" style="font-size: 150px;">mdi-cart-outline</v-icon> <!-- Aumentar el tamaño del ícono -->
        </div>
        <div class="text-body-1 text-center">
            Aún no tienes productos agregados.
            ¡Puedes ver nuestras categorías destacadas y hacer tu primera compra con nosotros!
        </div>
        <v-btn class="mt-4" color="blue" size="large" variant="tonal" block @click="goHome">
            Regresar al inicio
        </v-btn>
    </div>
</div>
<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue'
import ItemFooter from '../components/ItemFooter.vue'

export default {
    name: 'CartView',
    components: {
        ItemNavbar,
        ItemFooter
    },
    methods: {
        goHome() {
            this.$router.push({
                name: 'home'
            });
        }
    }
}
</script>

<style scoped>
.main-container {
    max-width: 1200px;
    /* Ancho máximo del contenedor principal */
    margin: 0 auto;
    /* Centrar horizontalmente */
    padding: 0 16px;
    /* Espaciado lateral */
    margin-top: 50px;
}

.cart-container {
    border: 1px solid #ccc;
    /* Borde alrededor del contenedor */
    border-radius: 8px;
    /* Bordes redondeados */
    padding: 16px;
    /* Espaciado interno */
    background-color: #f9f9f9;
    /* Color de fondo */
}

.icon-container {
    display: flex;
    /* Usar flexbox para centrar el ícono */
    justify-content: center;
    /* Centrar horizontalmente */
    align-items: center;
    /* Centrar verticalmente */
}
</style>
