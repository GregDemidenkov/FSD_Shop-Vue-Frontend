<script setup lang="ts">
    import { onMounted, reactive, watch } from 'vue'

    import router from '@app/rootRouter'
    import { RegistrationDto } from '@features/RegistrationForm'
    import { useAuthStore } from '@entities/auth/model/AuthStore'
    import { theme } from '@shared/styles/constants'
    import Message from '@shared/ui/Message.vue'
    import config from '@shared/routes/config'


    const authStore = useAuthStore()
    const initialState = {
        name: '',
        email: '',
        password: ''
    }
    const state = reactive({ ...initialState })

    const registrationHandle = () => {
        authStore.registrationAction({...state} as RegistrationDto)
    }

    onMounted(() => {
        authStore.setMessage({type: null, text: ''})
    })

    watch(
        () => authStore.isLoading === false && authStore.message.type === 'success',
        () => {
            router.push(config.login)
        }
    )
</script>

<template>
    <form @submit.prevent = "registrationHandle">
        <Message
            class="mb-4"
            v-if="authStore.message.type === 'error'"
            :type="authStore.message.type"
            :text="authStore.message.text"
        />
        <v-text-field
            v-model="state.name"
            label="Имя"
            variant="outlined"
            required
        />

        <v-text-field
            v-model="state.email"
            label="Почта"
            variant="outlined"
            type="email"
            required
        />

        <v-text-field
            v-model="state.password"
            label="Пароль"
            variant="outlined"
            type="password"
            required
        />

        <v-btn
            type="submit"
            :color="theme.lightGreen"
        >
            Регистрация
        </v-btn>

        <p>Есть аккаунта? 
            <router-link :to="config.login">Войти</router-link>
        </p>
    </form>
</template>

<style scoped lang="scss">
    button {
        display: block;
        margin: 0 auto;
    }

    p {
        margin: 20px 0;
    }
</style>