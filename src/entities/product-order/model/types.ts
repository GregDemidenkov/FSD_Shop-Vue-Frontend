import { Product } from "@entities/product"


export type ProductOrder = {
    _id: string,
    user_order_id: string,
    product_id: Product,
    count: number,
    full_price: number
}

export type AddProductOrderDto = {
    userId: string,
    productOrder: {
        id: string,
        count: number
    }
}

export type ChangeCountProductOrderDto = {
    userId: string,
    userOrderId: string,
    productOrderId: string,
    count: number,
    action: "delete" | "add"
}

export type ProductRowProps = {
    productInfo: {
        name: string,
        img: string,
        country: string,
        carats: number,
        price: number
    }
}