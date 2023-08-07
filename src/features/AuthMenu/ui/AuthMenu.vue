<script setup lang="ts">
    import { Welcome } from '@features/AuthMenu'
    import { useAuthStore } from '@entities/auth/model/AuthStore'
    import config from '@shared/routes/config'


    const authStore = useAuthStore()

    const logoutHandler = () => {
        authStore.logout()
    }
</script>

<template>
    <div class="auth-menu">
        <template v-if="!authStore.isAuth">
            <router-link 
                :to="config.login"
                class="auth-link"
                :class="{
                    'active': $route.path === config.login
                }"
            >
                Вход
            </router-link>
            <router-link 
                :to="config.registration"
                class="auth-link"
                :class="{
                    'active': $route.path === config.registration
                }"
            >
                Регистрация
            </router-link>
        </template>
        <template v-else>
            <div class="me-4">
                <Welcome :name="authStore.user.name"/>
            </div>
            <router-link 
                @click="logoutHandler"
                :to="config.login"
                class="auth-link"
            >
                Выход
            </router-link>
        </template>
    </div>
</template>

<style scoped lang="scss">
    .auth-menu {
        min-width: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
    }

    .auth-link {
        text-transform: uppercase;
        text-decoration: none;
        color: #FFFFFF;
        transition: all 0.3s ease-out;
    }

    .active {
        color: $light-green;
    }

    .active:hover, .auth-link:hover {
        color: $light-green;
    }
</style>