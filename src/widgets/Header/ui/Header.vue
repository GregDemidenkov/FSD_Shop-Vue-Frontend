<script setup lang="ts">
    import { Logo } from '@widgets/Header'
    import { HeaderMenu } from '@features/HeaderMenu'
    import { AuthMenu } from '@features/AuthMenu'
    import { theme } from '@shared/styles/constants'
    import Container from '@shared/ui/Container.vue'
</script>

<template>
    <v-app-bar :color="theme.darkGreen" name="app-bar">
        <Container>
            <div class="content">
                <Logo />
                <div class="menu">
                    <HeaderMenu />
                    <AuthMenu />
                </div>
            </div>
        </Container>
    </v-app-bar>
</template>

<style scoped>
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 85%;
        height: 100%;
    }
</style>