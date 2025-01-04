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
<div>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg" style="margin-top: 5%">
        <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

        <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline" variant="outlined" v-model="user.correoElectronico"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Contraseña
            <v-btn class="text-caption text-decoration-none text-blue" text flat @click="goRecoverAccount">
                ¿Olvidaste tu contraseña?
            </v-btn>
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined" v-model="user.contrasena" @click:append-inner="visible = !visible"></v-text-field>

        <v-card class="mb-12" color="surface-variant" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
                Advertencia: después de 3 intentos de inicio de sesión fallidos consecutivos, su cuenta se bloqueará temporalmente durante tres horas.
            </v-card-text>
        </v-card>

        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="login">
            Inicia sesión
        </v-btn>

        <v-card-text class="text-center">
            <v-btn class="text-blue text-decoration-none" @click="goCreacion">
                Regístrate <v-icon icon="mdi-chevron-right"></v-icon>
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
import axios from "axios";
import {
    useStore
} from "vuex";

export default {
    name: "LoginView",
    data() {
        return {
            user: {
                correoElectronico: "",
                contrasena: "",
            },
            visible: false,
            logo: require("@/assets/preview.png"),
        };
    },
    setup() {
        const store = useStore();
        return {
            store
        };
    },
    methods: {
        async login() {
            if (!this.user.correoElectronico || !this.user.contrasena) {
                alert("Debes llenar todos los campos");
                return;
            }
            try {
                const response = await axios.get(
                    "https://raw.githubusercontent.com/JCarvajalLab/LoginJsonAxios/refs/heads/main/config.json"
                );
                if (
                    this.user.correoElectronico === response.data.login.correoElectronico &&
                    this.user.contrasena === response.data.login.contrasena
                ) {
                    alert("Logueado");
                    this.store.commit("setUser", {
                        correoElectronico: this.user.correoElectronico,
                        logueado: true,
                    });
                    this.$router.push({
                        name: "home"
                    });
                } else {
                    alert("Credenciales incorrectas");
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        },
        goCreacion() {
            this.$router.push({
                name: "cuenta"
            });
        },
        goHome() {
            this.$router.push({
                name: "home"
            });
        },
        goRecoverAccount() {
            this.$router.push({
                name: "recoverAccount"
            });
        },
    },
};
</script>

<style scoped>
.logo {
    height: 40px;
    margin: 0;
}
</style>
