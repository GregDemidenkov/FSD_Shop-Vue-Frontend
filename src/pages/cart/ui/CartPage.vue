<script setup lang="ts">
    import { watch } from 'vue'

    import { EmptyCart, EmptyCartNavigation } from '@pages/cart'
    import { CartTable } from '@widgets/CartTable'
    import { ClearCart } from '@features/ClearCart'
    import { Checkout } from '@features/Checkout'
    import { useAuthStore } from '@entities/auth'
    import { useCartStore } from '@entities/cart'

    
    const authStore = useAuthStore()
    const cartStore = useCartStore()

    watch(
        () => authStore.isAuth,
        () => {
            if(authStore.isAuth == true) {
                cartStore.getUserOrder(authStore.user.id)
            }
        },
        { immediate: true }
    )
</script>

<template>
    <div
        v-if="cartStore.productOrders.length < 1"
        class="empty-container" 
    >
       <EmptyCart />
       <div style="margin-top: 20px;">
            <EmptyCartNavigation :isAuth="authStore.isAuth"/>
       </div>
    </div>
    <div v-else>
        <v-row 
            justify="end"
            class="clear-cart-wrapper"
        >
            <ClearCart :userOrderId="cartStore.userOrderId"/>
        </v-row>
        <CartTable :productOrders="cartStore.productOrders"/>
        <div style="margin-top: 40px;">
            <Checkout 
                :check="cartStore.check"
                :userOrderId="cartStore.userOrderId"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .empty-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .clear-cart-wrapper {
        width: 100%;
        margin-bottom: 40px;
    }
</style>