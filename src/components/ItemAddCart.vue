<template>
<v-dialog v-model="localDialog" max-width="600">
    <v-card>
        <v-card-title class="text-h5">Producto agregado al carro de compras</v-card-title>
        <v-card-text>
            <div>
                <strong>{{ product.name }}</strong><br>
                Precio: {{ product.precio }}<br>
                Descripción: {{ product.description }}<br>
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn color="blue" @click="seguirComprando">Seguir comprando</v-btn>
            <v-btn color="green" @click="irAlCarro">Ir al carro</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    name: 'ItemCheckout',
    props: {
        dialog: {
            type: Boolean,
            required: true
        },
        product: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            localDialog: this.dialog // Usar una variable local para controlar el diálogo
        }
    },
    watch: {
        dialog(newValue) {
            this.localDialog = newValue; // Sincronizar la variable local con la prop
        }
    },
    methods: {
        seguirComprando() {
            this.$emit('close'); // Emitir un evento para cerrar el diálogo
        },
        irAlCarro() {
            this.$emit('go-to-cart'); // Emitir un evento para ir al carrito
        }
    }
}
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
