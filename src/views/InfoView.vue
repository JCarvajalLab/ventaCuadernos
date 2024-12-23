<template>
    <ItemNavbar />
    <v-container class="main-container" fluid>
        <h1 class="text-center">Información sobre Nuestra Empresa</h1>
        
        <v-card class="mx-auto pa-6" max-width="800" rounded="lg" elevation="4">
            <v-card-text>
                <div class="text-body-1">
                    Bienvenidos a <strong>Cuadernos Creativos</strong>, donde nuestra pasión por la escritura se encuentra con la innovación. 
                    Fundada en 2020, nuestra empresa se ha dedicado a la creación y distribución de cuadernos de alta calidad 
                    que inspiran la creatividad y la organización en cada página.
                </div>
                <br />
                <div class="text-body-1">
                    En <strong>Cuadernos Creativos</strong>, creemos que cada idea merece un espacio especial. Nuestros cuadernos están 
                    diseñados con materiales sostenibles y un enfoque en la funcionalidad, ofreciendo una variedad de estilos 
                    y tamaños para satisfacer las necesidades de estudiantes, profesionales y artistas.
                </div>
                <br />
                <div class="text-body-1">
                    Nos enorgullece colaborar con proveedores locales y utilizar procesos de producción responsables, 
                    asegurando que cada cuaderno que sale de nuestra fábrica no solo sea hermoso, sino también ético. 
                    Nuestro compromiso con la calidad y la sostenibilidad nos ha permitido construir una comunidad de 
                    clientes leales que valoran la excelencia en cada producto.
                </div>
                <br />
                <div class="text-body-1">
                    Gracias por elegir <strong>Cuadernos Creativos</strong>. Juntos, podemos hacer que cada página cuente.
                </div>
            </v-card-text>
        </v-card>
    </v-container>
    <ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue'
import ItemFooter from '../components/ItemFooter.vue'

export default {
    name: 'InfoView',
    components: {
        ItemNavbar,
        ItemFooter
    }
}
</script>

<style scoped>
.main-container {
    max-width: 800px; /* Ancho máximo del contenedor principal */
    margin: 0 auto; /* Centrar horizontalmente */
    padding: 0 16px; /* Espaciado lateral */
}
</style>