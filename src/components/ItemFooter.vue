<template>
<v-footer app class="bg-indigo-lighten-1 text-center d-flex flex-column">
    <div class="d-flex justify-space-between mb-1">
        <div class="mr-10">
            <h3>Contáctanos</h3>
            <p>contacto@elefanteazull.com</p>
        </div>
        <div class="mr-10">
            <h3>Información</h3>
            <ul style="list-style: none; padding: 0; text-align:justify">
                <li>Plazos Despachos</li>
                <li>Condiciones Despachos</li>
                <li>Políticas de Cambio y Devoluciones</li>
            </ul>
        </div>
        <div>
            <h3>Síguenos</h3>
            <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" variant="text"></v-btn>
        </div>
    </div>

    <v-divider></v-divider>

    <div class="mt-10">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
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
