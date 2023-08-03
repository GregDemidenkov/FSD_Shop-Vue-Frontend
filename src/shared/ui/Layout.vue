<script setup lang="ts">
    import Container from '@shared/ui/Container.vue'
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

<style scoped>
    .main {
        margin-top: 40px;
    }
</style>