<template>
<div>
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

    <!-- Contenido principal -->
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg" style="margin-top: 5%">
        <h2 class="text-h5 mb-4">Recupera tu cuenta</h2>
        <p class="text-body-1 mb-6">
            Por favor ingresa tu RUT sin puntos ni guión.
            <br>
            Si necesitas ayuda <a href="#" class="text-blue">pincha aquí</a> y completa el formulario de contacto.
        </p>

        <v-text-field v-model="email" density="compact" placeholder="Correo electrónico" prepend-inner-icon="mdi-email-outline" variant="outlined" :rules="emailRules" required></v-text-field>

        <v-btn color="blue" size="large" variant="tonal" block @click="continuar" :disabled="!email">
            Continuar
        </v-btn>
    </v-card>

    <!-- Footer -->
    <v-footer app class="bg-indigo-lighten-1 text-center">
        <v-container>
            <div class="mt-1">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </div>
        </v-container>
    </v-footer>
    <!-- /Footer -->

    <!-- Componente de diálogo -->
    <ItemRemember :dialog="dialog" @close="dialog = false" />
</div>
</template>

<script>
import ItemRemember from '@/components/ItemRemember.vue';

export default {
    components: {
        ItemRemember
    },
    data: () => ({
        email: '',
        dialog: false,
        logo: require('@/assets/preview.png'),
        emailRules: [
            v => !!v || 'El correo es obligatorio',
            v => /.+@.+\..+/.test(v) || 'El correo debe ser válido',
        ],
    }),
    methods: {
        continuar() {
            if (this.email) {
                this.dialog = true; // Mostrar el diálogo de confirmación
            } else {
                alert('Por favor, ingresa un correo electrónico válido.');
            }
        },
        goHome() {
            this.$router.push({
                name: 'home'
            });
        },
        goToHome() {
            this.$router.push({
                name: 'home'
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
</style>
