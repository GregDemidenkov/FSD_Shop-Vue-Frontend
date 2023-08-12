<script setup lang="ts">
    import { ref } from 'vue'

    import { useProductStore } from '@entities/product'

    
    const select = ref({ value: 'default', text: 'По умолчанию' })
    const items = ref([
        { value: 'default', text: 'По умолчанию' },
        { value: 'down', text: 'По цене(⇩)' },
        { value: 'up', text: 'По цене(⇧)' },
    ])
    const productStore = useProductStore()

    const handleChange = () => {
        productStore.setSort(select.value.value)
    }
</script>

<template>
    <v-select
        class="sort-products"
        density="compact"
        variant="solo"
        v-model="select"
        :items="items"
        item-title="text"
        item-value="value"
        return-object
        hide-details
        @update:modelValue="handleChange"
    ></v-select>
</template>

<style scoped lang="scss">
    .sort-products {
        max-width: 220px;
    }
</style>