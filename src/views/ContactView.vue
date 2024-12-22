<template>
<ItemNavbar />
<div>
    <v-img class="mx-auto my-6" max-width="228" src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="600" rounded="lg">
        <!-- Aumentar el max-width -->
        <div class="text-subtitle-1 text-medium-emphasis">Formulario de Contacto</div>

        <v-text-field density="compact" placeholder="Nombre" prepend-inner-icon="mdi-account-outline" variant="outlined"></v-text-field>

        <v-text-field density="compact" placeholder="Email" prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

        <v-textarea density="compact" placeholder="Mensaje" prepend-inner-icon="mdi-message-outline" variant="outlined" rows="6"></v-textarea>

        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
            Enviar
        </v-btn>

        <v-card-text class="text-center">
            <v-btn class="text-blue text-decoration-none" @click="goHome" block>
                Volver a la página principal <v-icon icon="mdi-chevron-right"></v-icon>
            </v-btn>
        </v-card-text>
    </v-card>
</div>
<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue'
import ItemFooter from '../components/ItemFooter.vue'

export default {
    name: 'ContactView',
    components: {
        ItemNavbar,
        ItemFooter
    },
    methods: {
        goHome() {
            this.$router.push({
                name: 'home'
            });
        }
    }
}
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
