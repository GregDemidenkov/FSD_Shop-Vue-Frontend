import { User } from "@entities/auth/model/types"


export interface MessageProps {
    type: 'info' | 'success' | 'error',
}

export type AuthResponse = {
    accessToken: string,
    user: User
}