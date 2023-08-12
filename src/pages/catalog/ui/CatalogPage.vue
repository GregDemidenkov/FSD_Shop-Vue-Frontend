<script setup lang="ts">
    import { onMounted, watch } from 'vue'

    import { Catalog } from '@widgets/Catalog'
    import { useProductStore } from '@entities/product'


    const productStore = useProductStore()
    
    onMounted(() => {
        productStore.getProducts()
    })

    watch(
        () => productStore.sort,
        () => {
            productStore.getProducts()
        }
    )
</script>

<template>
    <Catalog :products="productStore.products"/>
</template>