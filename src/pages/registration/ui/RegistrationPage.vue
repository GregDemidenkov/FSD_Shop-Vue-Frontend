<script setup lang="ts">
    import { RegistrationForm } from '@features/RegistrationForm'
    import AuthCard from '@shared/ui/AuthCard.vue'

</script>

<template>
    <div class="register-page">
        <AuthCard title="Регистрация">
            <RegistrationForm />
        </AuthCard>
    </div>
</template>

<style scoped lang="scss">
    .register-page {
        display: flex;
        justify-content: center;
    }
</style>