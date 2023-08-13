<script setup lang="ts">
    import { EmptyCart, EmptyCartNavigation } from '@pages/cart'
    import { useAuthStore } from '@entities/auth';

    
    const authStore = useAuthStore()
</script>

<template>
    <div
        class="empty-cintainer" 
    >
       <EmptyCart />
       <div style="margin-top: 20px;">
            <EmptyCartNavigation :isAuth="authStore.isAuth"/>
       </div>
    </div>
</template>

<style scoped lang="scss">
    .empty-cintainer {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>