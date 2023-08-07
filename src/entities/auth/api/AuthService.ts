import { LoginDto } from "@features/LoginForm"
import { LoginResponse } from "@features/LoginForm"
import { RegistrationDto } from "@features/RegistrationForm"
import protectedAxios, { axiosApi } from "@shared/api/axios"
import { AuthResponse } from "@shared/model/types"


class AuthService {

    authUrl = '/auth'


    registration(dto: RegistrationDto) {
        return axiosApi.post(`${this.authUrl}/registration`, dto)
    }

    login(dto: LoginDto){
        return axiosApi.post<LoginResponse>(`${this.authUrl}/login`, dto)
    }

    auth() {
        return protectedAxios.get<AuthResponse>(`${this.authUrl}/check-auth`,
            {headers: {Authorization: `Bearer ${localStorage.getItem("accessToken")}`}}
        )
    }

    refreshToken() {
        return axiosApi.get(`${this.authUrl}/refresh-token/${localStorage.getItem('refreshToken')}`)
    }
}


export default new AuthService()