import { defineStore } from "pinia"
import { ref } from "vue"

import { Message, User } from "./types"
import AuthService from "../api/AuthService"
import { RegistrationDto } from "@features/RegistrationForm"
import { LoginDto } from "@features/LoginForm"


export const useAuthStore = defineStore("authStore", () => {
    const user = ref<User>({} as User)
    const isAuth = ref<boolean>(false)
    const isLoading = ref<boolean>(false)
    const message = ref<Message>(
        {
            type: null,
            text: ""
        }
    )


    const logout = () => {
        localStorage.removeItem('accessToken')
        isAuth.value = false
    }

    const setMessage = ((dto: Message) => {
        message.value.type = dto.type
        message.value.text = dto.text
    })

    const registrationAction = async (dto: RegistrationDto) => {
        isLoading.value = true
        try {
            await AuthService.registration(dto)

            setMessage({type: 'success', text: 'Регистрация прошла успешно'})
        } catch (error) {
            setMessage({type: 'error', text: 'Произошла ошибка, попробуйте снова'})
        } finally {
            isLoading.value = false
        }
    }

    const loginAction = async (dto: LoginDto) => {
        isLoading.value = true
        try {
            const response = await AuthService.login(dto)
            
            isLoading.value = false
            user.value = response.data.user
            isAuth.value = true
            console.log(response.data.accessToken, response.data.refreshToken)
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)

            setMessage({type: null, text: ''})
        } catch (error) {
            setMessage({type: 'error', text: 'Неправильная почта или пароль'})
        } finally {
            isLoading.value = false
        }
    }

    const checkAuthAction = async () => {
        isLoading.value = true
        try {
            const response = await AuthService.auth()
            
            isLoading.value = false
            user.value = response.data.user
            isAuth.value = true
            localStorage.setItem('accessToken', response.data.accessToken)
        } finally {
            isLoading.value = false
        }
    }


    return {
        user,
        isAuth,
        isLoading,
        message,
        logout,
        setMessage,
        registrationAction,
        loginAction,
        checkAuthAction
    }

})