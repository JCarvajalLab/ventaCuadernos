<template>
<ItemNavbar />
<div class="container">
    <h1>Todos los Productos</h1>
    <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="producto in productos" :key="producto.id">
            <v-card class="mx-auto" max-width="400">
                <v-img class="align-end text-white" height="200" :src="producto.url" cover>
                    <v-card-title>{{ producto.name }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pt-4">
                    Precio: {{ producto.precio }}
                </v-card-subtitle>

                <v-card-text>
                    <div>{{ producto.description }}</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="orange" text @click="agregarAlCarrito(producto)">Agregar al carrito</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>

    <!-- Componente de diálogo de confirmación -->
    <ItemCheckout :dialog="dialog" :product="selectedProduct" @close="dialog = false" @go-to-cart="irAlCarro" />
</div>
<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue'
import ItemFooter from '../components/ItemFooter.vue'
import {
    useStore
} from 'vuex'
import ItemCheckout from '../components/ItemAddCart.vue' // Importar el nuevo componente

export default {
    name: 'AllProductos',
    components: {
        ItemNavbar,
        ItemFooter,
        ItemCheckout // Registrar el nuevo componente
    },
    data() {
        return {
            dialog: false, // Controla la visibilidad del diálogo
            selectedProduct: {} // Almacena el producto seleccionado
        }
    },
    setup() {
        const store = useStore()
        const productos = store.state.productos

        return {
            productos,
            store
        }
    },
    methods: {
        agregarAlCarrito(producto) {
            this.selectedProduct = producto; // Guardar el producto seleccionado
            this.dialog = true; // Mostrar el diálogo
            this.store.commit('incrementarCantidad', producto.id); // Llamar a la mutación
        },
        seguirComprando() {
            this.dialog = false; // Cerrar el diálogo
        },
        irAlCarro() {
            this.dialog = false; // Cerrar el diálogo
            this.$router.push({
                name: 'carrito'
            }); // Redirigir al carrito
        }
    }
}
</script>

<style scoped>
.container {
    padding: 16px;
    /* Espaciado interno para el contenedor */
}
</style>
