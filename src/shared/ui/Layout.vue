<script setup lang="ts">
    import { onMounted } from 'vue'

    import { useAuthStore } from '@entities/auth'
    import Container from '@shared/ui/Container.vue'

    const authStore = useAuthStore()
    
    onMounted(() => {
        if (localStorage.getItem('accessToken')) {
            authStore.checkAuthAction()
        }
    })
</script>

<template>
    <v-layout class="layout">
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
        margin: 36px 0;
        min-height: calc(100vh - 135px);
    }

    .layout {
        display: flex;
        flex-direction: column;
    }
</style>