import { User } from "@entities/auth/model/types"


export type LoginDto = {
    email: string,
    password: string
}

export type LoginResponse = {
    accessToken: string,
    refreshToken: string,
    user: User
}