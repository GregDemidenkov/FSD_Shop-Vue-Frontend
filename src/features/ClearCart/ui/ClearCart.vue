<script setup lang="ts">
    import { theme } from '@shared/styles/constants'
    import { ClearCartProps } from '@features/ClearCart'
    import { useCartStore } from '@entities/cart'

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