<script setup lang="ts">
    import { Header } from '@widgets/Header'
    import Layout from '@shared/ui/Layout.vue'
    import Footer from '@shared/ui/Footer.vue'
</script>

<template>
    <Layout>
        <template v-slot:header>
            <Header />
        </template>
        <template v-slot:main>
            <router-view />
        </template>
        <template v-slot:footer>
            <Footer />
        </template>
    </Layout>
</template>

<style scoped>

</style>
