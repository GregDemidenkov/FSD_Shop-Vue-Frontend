<script setup lang="ts">
    import { watch } from 'vue'

    import { EmptyCart, EmptyCartNavigation } from '@pages/cart'
    import { ClearCart } from '@features/ClearCart'
    import { useAuthStore } from '@entities/auth'
    import { useCartStore } from '@entities/cart'

    
    const authStore = useAuthStore()
    const cartStore = useCartStore()
    console.log(authStore.isAuth)

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
        class="empty-cintainer" 
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
        
    </div>
</template>

<style scoped lang="scss">
    .empty-cintainer {
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