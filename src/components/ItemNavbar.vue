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
            <v-menu v-if="logueado" offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on" style="margin: 0 10px;">
                        {{ correoElectronico }}
                        <v-icon right>mdi-chevron-down</v-icon>
                    </v-btn>
                    <!-- here -->
                    <v-list>
                        <v-list-item @click="cerrarSesion">
                            <v-list-item-title>Cerrar sesión</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </template> <!-- Este template va arriba, se estaba provando para ver la funcionalidad -->
            </v-menu>
            <v-btn v-else icon="mdi-account-key" text @click="goLogin" style="margin: 0 10px;"></v-btn>
            <div style="display: flex; align-items: center;">
                <v-btn icon="mdi-cart-arrow-down" text @click="goCarro" style="margin: 0 10px;"></v-btn>
                <v-badge v-if="totalCantidad > 0" color="red" :content="totalCantidad" style="margin-left: -10px; margin-right:10px"></v-badge>
            </div>
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
import {
    computed
} from 'vue';
import {
    useStore
} from 'vuex';

export default {
    data() {
        return {
            drawer: false,
            logo: require('@/assets/preview.png'),
        };
    },
    setup() {
        const store = useStore();

        // Computed property para obtener la cantidad total de productos en el carrito
        const totalCantidad = computed(() => {
            return store.state.productos.reduce((total, producto) => total + producto.cantidad, 0);
        });

        const logueado = computed(() => store.state.logueado);
        const correoElectronico = computed(() => store.state.correoElectronico);

        return {
            totalCantidad,
            logueado,
            correoElectronico,
            store
        };
    },
    methods: {
        goToHome() {
            this.$router.push({
                name: 'home'
            });
        },
        goHome() {
            this.$router.push({
                name: 'home'
            });
            this.drawer = false;
        },
        goProductos() {
            this.$router.push({
                name: 'allproductos'
            });
            this.drawer = false;
        },
        goInfo() {
            this.$router.push({
                name: 'informacion'
            });
            this.drawer = false;
        },
        goContacto() {
            this.$router.push({
                name: 'contacto'
            });
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
        },
        cerrarSesion() {
            this.store.commit('cerrarSesion');
            this.$router.push({
                name: 'home'
            });
        },
    }
};
</script>

<style scoped>
.logo {
    height: 40px;
    margin: 0;
}
</style>
