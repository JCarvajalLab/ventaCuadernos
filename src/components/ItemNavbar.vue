<template>
<v-app-bar app class="bg-indigo-lighten-1" :elevation="0" rounded>
    <v-app-bar-title>
        <v-btn text @click="goToHome" style="padding: 0;">
            <img :src="logo" alt="Logo" class="logo" />
        </v-btn>
    </v-app-bar-title>

    <template v-slot:append>

        <v-btn text @click="goToHome" style="margin: 0 10px;">Inicio</v-btn>
        <v-btn text @click="goToProducts" style="margin: 0 10px;">Todos los Productos</v-btn>
        <v-btn text @click="goToInfo" style="margin: 0 10px;">Información</v-btn>
        <v-btn text @click="goToContact" style="margin: 0 10px;">Contacto</v-btn>
        <v-btn icon="mdi-account-key" style="margin: 0 10px;"></v-btn>
        <v-btn icon="mdi-cart-arrow-down" style="margin: 0 10px;"></v-btn>
    </template>
</v-app-bar>
</template>

<script>
export default {
    name: 'ItemNavbar',
    data() {
        return {
            logo: require('@/assets/preview.png') // Importa la imagen desde la carpeta assets
        };
    },
    methods: {
        goToHome() {
            this.$router.push({
                name: 'home'
            }); // Asegúrate de que 'home' sea el nombre correcto de tu ruta
        },
        goToProducts() {
            this.$router.push({
                name: 'allproductos'
            }); // Asegúrate de que 'products' sea el nombre correcto de tu ruta
        },
        goToInfo() {
            this.$router.push({
                name: 'informacion'
            }); // Asegúrate de que 'info' sea el nombre correcto de tu ruta
        },
        goToContact() {
            this.$router.push({
                name: 'contacto'
            }); // Asegúrate de que 'contact' sea el nombre correcto de tu ruta
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
