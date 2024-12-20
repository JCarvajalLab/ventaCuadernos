<template>
<ItemNavbar />
<div>
    <h1>
        Todos los Productos
    </h1>
</div>

<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue'
import ItemFooter from '../components/ItemFooter.vue'

export default {
    name: 'AllProductos',
    components: {
        ItemNavbar,
        ItemFooter
    }
}
</script>

<style scoped>

</style>
