<template>
<ItemNavbar />
<div class="main-container">
    <div class="cart-container mx-auto pa-6" max-width="600" rounded="lg" elevation="4">
        <div class="text-h6">Tu carro ({{ totalProducts }} productos)</div>
        <div v-if="totalProducts === 0" class="icon-container text-center my-4">
            <v-icon class="large" style="font-size: 150px">mdi-cart-outline</v-icon>
        </div>
        <div v-if="totalProducts === 0" class="text-body-1 text-center">
            Aún no tienes productos agregados. ¡Puedes ver nuestras categorías
            destacadas y hacer tu primera compra con nosotros!
        </div>
        <v-btn v-if="totalProducts === 0" class="mt-4" color="blue" size="large" variant="tonal" block @click="goHome">
            Regresar al inicio
        </v-btn>

        <v-table v-if="totalProducts > 0" class="mt-4">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in cartItems" :key="index">
                    <td>
                        <v-row align="center">
                            <v-col cols="4">
                                <v-img :src="item.url" height="90" width="80" contain></v-img>
                            </v-col>
                            <v-col cols="8">
                                <div>{{ item.name }}</div>
                                <div class="text-caption">{{ item.description }}</div>
                            </v-col>
                        </v-row>
                    </td>
                    <td>
                        <v-select :items="cantidades" v-model="item.cantidad">
                            {{ cantidad }}</v-select>
                    </td>
                    <td>
                        {{ formatoMoneda(parseFloat(item.precio.replace("$", ""))) }}
                    </td>
                    <td>
                        {{formatoMoneda(parseFloat(item.precio.replace("$", "")) * item.cantidad)}}
                    </td>
                    <td>
                        <v-btn icon @click="removeFromCart(item)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</div>

<div class="resumen-compra">
    <h2>Resumen de tu compra</h2>
    <p>Total de la compra: $ {{ totalCompra }}</p>
    <v-btn @click="$router.push({ name: 'allproductos' })">Agregar más productos</v-btn>
    <v-btn @click="$router.push({ name: 'checkout' })">Continuar</v-btn>
</div>
<ItemFooter />
</template>

<script>
import ItemNavbar from "../components/ItemNavbar.vue";
import ItemFooter from "../components/ItemFooter.vue";
import {
    computed
} from "vue";
import {
    useStore
} from "vuex";

export default {
    name: "CartView",
    components: {
        ItemNavbar,
        ItemFooter,
    },
    data() {
        return {
            cantidades: Array.from({
                    length: 10,
                },
                (_, i) => i + 1
            ),
        };
    },
    methods: {
        formatoMoneda(valor) {
            return `$ ${Math.round(valor)}`;
        },
    },
    setup() {
        const store = useStore();

        // Computed property para obtener los productos en el carrito
        const cartItems = computed(() => {
            return store.state.productos.filter((producto) => producto.cantidad > 0);
        });

        // Computed property para contar el total de productos
        const totalProducts = computed(() => {
            return cartItems.value.reduce(
                (total, producto) => total + producto.cantidad,
                0
            );
        });
        const totalCompra = computed(() => {
            return cartItems.value.reduce(
                (total, item) =>
                total + parseFloat(item.precio.replace("$", "")) * item.cantidad,
                0
            );
        });
        const incrementQuantity = (item) => {
            if (item.cantidad < 10) {
                item.cantidad++;
            }
        };

        const decrementQuantity = (item) => {
            if (item.cantidad > 1) {
                item.cantidad--;
            }
        };

        const removeFromCart = (item) => {
            item.cantidad = 0; // Eliminar el producto del carrito
        };

        const goHome = () => {
            this.$router.push({
                name: "home",
            });
        };

        return {
            cartItems,
            totalProducts,
            incrementQuantity,
            decrementQuantity,
            removeFromCart,
            goHome,
            totalCompra,
        };
    },
};
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
    /* Espaciado superior */
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

.text-caption {
    font-size: 0.7em;
    /* Ajusta el tamaño de la fuente según sea necesario */
    color: #666;
    /* Color gris para la descripción */
    margin-top: 4px;
    /* Reduce el espacio superior si es necesario */
    margin-bottom: 0;
    /* Elimina el espacio inferior si es necesario */
    margin-right: 100px;
    text-align: justify;
}

.v-select {
    width: 100%;
}

.v-select .v-select__selection {
    font-size: 16px;
}

.v-select .v-select__menu {
    max-height: 200px;
    overflow-y: auto;
}

.resumen-compra {
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 16px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.resumen-compra h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.resumen-compra p {
    font-size: 16px;
    margin-bottom: 20px;
}

.resumen-compra .v-btn {
    margin: 10px 0;
}
</style>
