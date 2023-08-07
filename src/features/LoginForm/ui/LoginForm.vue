<script setup lang="ts">
    import { reactive, watch } from 'vue'
    
    import router from '@app/rootRouter'
    import { LoginDto } from '@features/LoginForm'
    import { useAuthStore } from '@entities/auth/model/AuthStore'
    import config from '@shared/routes/config'
    import { theme } from '@shared/styles/constants'
    import Message from '@shared/ui/Message.vue'


    const authStore = useAuthStore()
    const initialState = {
        email: '',
        password: ''
    }
    const state = reactive({ ...initialState })

    const loginHandler = () => {
        authStore.loginAction({...state} as LoginDto)
    }

    watch(
        () => authStore.isAuth,
        () => {
            router.push(config.catalog)
        },
    )
</script>

<template>
    <form @submit.prevent = "loginHandler">
        <Message
            class="mb-4"
            v-if="authStore.message.type"
            :type="authStore.message.type"
            :text="authStore.message.text"
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
            Войти
        </v-btn>

        <p>Нет аккаунта? 
            <router-link :to="config.registration">Зарегистрируйтесь</router-link>
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