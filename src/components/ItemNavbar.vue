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
            <v-btn text @click="goProductos" style="margin: 0 10px;">Todos los Productos</v-btn>
            <v-btn text @click="goInfo" style="margin: 0 10px;">Información</v-btn>
            <v-btn text @click="goContacto" style="margin: 0 10px;">Contacto</v-btn>
        </div>
        <div class="d-flex justify-space-between">
            <v-btn icon="mdi-account-key" text @click="goLogin" style="margin: 0 10px;"></v-btn>
            <v-btn icon="mdi-cart-arrow-down" text @click="goCarro" style="margin: 0 10px;"></v-btn>
        </div>
    </template>
</v-app-bar>

<v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
        <v-list-item @click="goHome">
            <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="goProductos">
            <v-list-item-title>Todos los Productos</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="goInfo">
            <v-list-item-title>Información</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="goContacto">
            <v-list-item-title>Contacto</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
    </v-list>
    
</v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            logo: require('@/assets/preview.png') // Importa la imagen desde la carpeta assets
        }
    },
    methods: {
        goToHome() {
            this.$router.push({
                name: 'home'
            }); // Asegúrate de que 'home' sea el nombre correcto de tu ruta
        },
        goHome() {
            this.$router.push({
                name: 'home'
            }); // Asegúrate de que 'home' sea el nombre correcto de tu ruta
            this.drawer = false;
        },
        goProductos() {
            this.$router.push({
                name: 'allproductos'
            }); // Asegúrate de que 'products' sea el nombre correcto de tu ruta
            this.drawer = false;
        },
        goInfo() {
            this.$router.push({
                name: 'informacion'
            }); // Asegúrate de que 'info' sea el nombre correcto de tu ruta
            this.drawer = false;
        },
        goContacto() {
            this.$router.push({
                name: 'contacto'
            }); // Asegúrate de que 'contact' sea el nombre correcto de tu ruta
            this.drawer = false;
        },
        goLogin() {
            this.$router.push({
                name: 'login'
            });
            this.drawer = false;
        },
        goCarro() {
            this.$router.push({
                name: 'carrito'
            });
            this.drawer = false;
        }
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
