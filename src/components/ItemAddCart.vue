<template>
    <v-dialog v-model="localDialog" max-width="600">
        <v-card>
            <v-card-title class="text-h5" >  <v-icon left color="green">mdi-check-decagram-outline</v-icon> Producto agregado al carro de compras</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-img :src="product.url" height="150" contain></v-img> <!-- Imagen del producto -->
                    </v-col>
                    <v-col cols="12" md="8">
                        <div>
                            <strong>{{ product.name }}</strong><br>
                            <span>Precio: <strong>{{ product.precio }}</strong></span><br>
                            <span>Descripción: {{ product.description }}</span><br>
                        </div>
                    </v-col>
                </v-row>
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