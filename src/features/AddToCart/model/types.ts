export type AddToCartProps = {
    productId: string,
    count: number,
}

export type UserOrder = {
    id: string,
    userId: string,
    products: string[],
    check: number,
    status: 'pending' | 'closed'
}