<template>
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

<div>
    <v-img class="mx-auto my-6" max-width="228" src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">Create Account</div>

        <v-text-field density="compact" placeholder="Full Name" prepend-inner-icon="mdi-account-outline" variant="outlined"></v-text-field>

        <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'" density="compact" placeholder="Create a password" prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

        <v-text-field :append-inner-icon="visibleConfirm ? 'mdi-eye-off' : 'mdi-eye'" :type="visibleConfirm ? 'text' : 'password'" density="compact" placeholder="Confirm your password" prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visibleConfirm = !visibleConfirm"></v-text-field>

        <v-card class="mb-12" color="surface-variant" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
                Note: Please ensure that your password is at least 8 characters long and contains a mix of letters, numbers, and special characters.
            </v-card-text>
        </v-card>

        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="createAccount">
            Sign Up
        </v-btn>

        <v-card-text class="text-center">
            <v-btn class="text-blue text-decoration-none" @click="goLogin">
                Already have an account? Log in <v-icon icon="mdi-chevron-right"></v-icon>
            </v-btn>
        </v-card-text>
    </v-card>
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
export default {
    data: () => ({
        visible: false,
        logo: require('@/assets/preview.png'),
        visibleConfirm: false,
    }),
    methods: {
        createAccount() {
            // Aquí puedes agregar la lógica para crear la cuenta
            console.log("Account creation logic goes here");
        },
        goLogin() {
            this.$router.push({
                name: 'login' // Asegúrate de que 'login' sea el nombre correcto de tu ruta de inicio de sesión
            });
        },
        goHome() {
            this.$router.push({
                name: 'home'
            }); // Asegúrate de que 'home' sea el nombre correcto de tu ruta
        },
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
</style>
