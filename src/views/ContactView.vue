<template>
<ItemNavbar />
<div>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="600" rounded="lg" style="margin-top:5%">
        <div class="text-subtitle-1 text-medium-emphasis">Formulario de Contacto</div>

        <!-- Campo de nombre -->
        <v-text-field v-model="nombre" density="compact" placeholder="Nombre" prepend-inner-icon="mdi-account-outline" variant="outlined" :rules="nombreRules" required></v-text-field>

        <!-- Campo de email -->
        <v-text-field v-model="email" density="compact" placeholder="Email" prepend-inner-icon="mdi-email-outline" variant="outlined" :rules="emailRules" required></v-text-field>

        <!-- Campo de mensaje -->
        <v-textarea v-model="mensaje" density="compact" placeholder="Mensaje" prepend-inner-icon="mdi-message-outline" variant="outlined" rows="6" :rules="mensajeRules" required></v-textarea>

        <!-- Botón de enviar -->
        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="enviarFormulario">
            Enviar
        </v-btn>

        <!-- Botón para volver a la página principal -->
        <v-card-text class="text-center">
            <v-btn class="text-blue text-decoration-none" @click="goHome" block>
                Volver a la página principal <v-icon icon="mdi-chevron-right"></v-icon>
            </v-btn>
        </v-card-text>
    </v-card>
</div>

<!-- Componente de diálogo -->
<ItemContacto :dialog="dialog" :nombre="nombre" @close="dialog = false" />
<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue';
import ItemFooter from '../components/ItemFooter.vue';
import ItemContacto from '../components/ItemContacto.vue';

export default {
    name: 'ContactView',
    components: {
        ItemNavbar,
        ItemFooter,
        ItemContacto,
    },
    data() {
        return {
            nombre: '', // Almacenar el nombre
            email: '', // Almacenar el email
            mensaje: '', // Almacenar el mensaje
            dialog: false, // Controlar la visibilidad del diálogo
            nombreRules: [
                v => !!v || 'El nombre es obligatorio', // Validar que el campo no esté vacío
            ],
            emailRules: [
                v => !!v || 'El correo es obligatorio', // Validar que el campo no esté vacío
                v => /.+@.+\..+/.test(v) || 'El correo debe ser válido', // Validar formato de correo
            ],
            mensajeRules: [
                v => !!v || 'El mensaje es obligatorio', // Validar que el campo no esté vacío
            ],
        };
    },
    methods: {
        goHome() {
            this.$router.push({
                name: 'home',
            });
        },
        enviarFormulario() {
            // Validar todos los campos antes de mostrar el diálogo
            if (this.nombre && this.email && this.mensaje && /.+@.+\..+/.test(this.email)) {
                this.dialog = true; // Mostrar el diálogo si los campos son válidos
            } else {
                alert('Por favor, completa todos los campos correctamente.');
            }
        },
    },
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
