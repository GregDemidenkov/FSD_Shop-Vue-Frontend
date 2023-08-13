import { ProductOrder } from "@entities/product-order"

 
export type FullUserOrder = {
    _id: string,
    user_id: string,
    products: ProductOrder[],
    check: number,
    status: 'pending' | 'closed'
}