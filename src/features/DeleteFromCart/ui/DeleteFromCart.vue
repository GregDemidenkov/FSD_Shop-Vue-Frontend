<script setup lang="ts">
    import { useDeleteFromCart, DeleteFromCartProps } from '@features/DeleteFromCart'
    import { theme } from '@shared/styles/constants'


    const props = defineProps<DeleteFromCartProps>()
    const { deleteFromCart } = useDeleteFromCart()

    const handleClick = () => {
        deleteFromCart(props)
    }
</script>

<template>
    <v-btn 
        icon="mdi-delete-outline"
        :color="theme.red"
        @click="handleClick"
    />
</template>

<style scoped lang="scss">

</style>