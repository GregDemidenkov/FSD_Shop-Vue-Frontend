<script setup lang="ts">
    import { onMounted } from 'vue'

    import { useAuthStore } from '@entities/auth/model/AuthStore'
    import Container from '@shared/ui/Container.vue'

    const authStore = useAuthStore()
    
    onMounted(() => {
        if (localStorage.getItem('accessToken')) {
            authStore.checkAuthAction()
        }
    })
</script>

<template>
    <v-layout ref="app">
        <slot name="header" />

        <v-main class="main">
            <Container>
                <slot name="main" />
            </Container>
        </v-main>

        <slot name="footer" />
    </v-layout>
</template>

<style scoped lang="scss">
    .main {
        margin-top: 40px;
    }
</style>