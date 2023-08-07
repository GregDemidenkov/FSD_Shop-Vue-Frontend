<script setup lang="ts">
    import { LoginForm } from '@features/LoginForm'
    import AuthCard from '@shared/ui/AuthCard.vue'
</script>

<template>
    <div class="login-page">
        <AuthCard title="Вход">
            <LoginForm />
        </AuthCard>
    </div>
</template>

<style scoped lang="scss">
    .login-page {
        display: flex;
        justify-content: center;
    }
</style>