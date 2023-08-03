<script setup lang="ts">
    import config from '@shared/routes/config'
</script>

<template>
    <div class="header-menu">
        <router-link 
            :to="config.catalog"
            class="link"
            :class="{
                'active': $route.href == config.catalog
            }"
        >
            <div class="menu-item">Каталог</div>
        </router-link>
        <router-link 
            :to="config.cart"
            class="link"
            :class="{
                'active': $route.href == config.cart
            }"
        >
            <div class="menu-item">Корзина</div>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
    .header-menu {
        height: 100%;
        display: flex;
        font-size: 14px;
    }

    .link {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        text-decoration: none;
        padding: 16px;
        transition: all 0.4s ease-out;
    }

    .active {
        background-color: $light-green;
    }

    .menu-item {
        color: #FFFFFF;
        text-transform: uppercase;
    }
</style>