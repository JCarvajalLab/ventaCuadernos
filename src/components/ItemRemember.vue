<template>
<v-dialog v-model="localDialog" max-width="600">
    <v-card>
        <v-card-title class="text-h5">
            <v-icon left color="green">mdi-email-send-outline</v-icon>
            Correo enviado
        </v-card-title>
        <v-card-text>
            Se ha enviado un correo electrónico con las instrucciones para recuperar tu cuenta.
        </v-card-text>
        <v-card-actions>
            <v-btn color="blue" @click="cerrar">Cerrar</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    name: 'ItemRemember',
    props: {
        dialog: {
            type: Boolean,
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
        cerrar() {
            this.$emit('close'); // Emitir un evento para cerrar el diálogo
        }
    }
}
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
