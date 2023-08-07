export type User = {
    id: string,
    name: string,
    email: string
}

export interface Message {
    type: 'success' | 'error' | null,
    text: string
}