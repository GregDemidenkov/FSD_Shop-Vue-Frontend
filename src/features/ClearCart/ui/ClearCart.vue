<script setup lang="ts">
    import { ClearCartProps } from '@features/ClearCart'
    import { useCartStore } from '@entities/cart'
    import { theme } from '@shared/styles/constants'


    const props = defineProps<ClearCartProps>()
    const cartStore = useCartStore()

    const clickHandler = () => {
        cartStore.clearCart(props.userOrderId)
    }
</script>

<template>
    <v-btn
        variant="outlined"
        size="large"
        :color="theme.red"
        @click="clickHandler"
    >
        Очистить корзину
    </v-btn>
</template>

<style scoped lang="scss">

</style>