<script setup lang="ts">
    import { EmptyCartNavigateProps } from '@pages/cart'
    import config from '@shared/routes/config'


    const props = defineProps<EmptyCartNavigateProps>()
</script>

<template>
    <div>
        <p 
            v-if="props.isAuth"
        >
            Вернитесь в <router-link :to="config.catalog">каталог</router-link>, чтобы добавить товары в корзину
        </p>
        <p 
            v-else
        >
            <router-link :to="config.login">Войдите</router-link> в профиль, чтобы добавить товары в корзину
        </p>
    </div>
</template>

<style scoped>

</style>