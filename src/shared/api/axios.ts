import axios from "axios"

import AuthService from "@entities/auth/api/AuthService"


export const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_PORT,
})

const protectedAxios = axios.create({
    baseURL: import.meta.env.VITE_PORT,
    headers: {
        Authorization : `Bearer ${localStorage.getItem('accessToken')}`
    }
})

protectedAxios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
    
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            const result = await AuthService.refreshToken()
            const token = result.data.accessToken
            localStorage.setItem('accessToken', token)
            
            originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
            return axios(originalRequest)
        }

        localStorage.removeItem('accessToken')

        return Promise.reject(error)
    }
)

export default protectedAxios