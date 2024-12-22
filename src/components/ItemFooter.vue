<template>
<v-footer app class="bg-indigo-lighten-1 text-center">
    <v-container>
        <v-row>
            <v-col cols="12" md="4" style="text-align:justify">
                <h3>Contáctanos</h3>
                <p>contacto@elefanteazull.com</p>
            </v-col>
            <v-col cols="12" md="4">
                <h3>Información</h3>
                <ul style="list-style: none; padding: 0; text-align:justify">
                    <li>Plazos Despachos</li>
                    <li>Condiciones Despachos</li>
                    <li>Políticas de Cambio y Devoluciones</li>
                </ul>
            </v-col>
            <v-col cols="12" md="4" style="text-align:justify">
                <h3>Síguenos</h3>
                <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" variant="text"></v-btn>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <div class="mt-1">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
    </v-container>
</v-footer>
</template>

<script>
export default {
    data() {
        return {
            icons: ['mdi-instagram', 'mdi-tiktok']
        }
    }
}
</script>

<style scoped>
h3{
    font-size: 1.5rem;
    text-align:justify
}



</style>
