import { User } from "@entities/auth/model/types"


export interface MessageProps {
    type: 'info' | 'success' | 'error',
    text: string
}

export type AuthResponse = {
    accessToken: string,
    user: User
}