export type Product = {
    _id: string,
    name: string,
    img: string,
    country: string
    carats: number,
    price: number,
    count: number
}

export type Sort = 'down' | 'up' | 'default'

export type ProductCardProps = {
    product: Product,
    isAuth: boolean
}

export type ProductTitleProps = {
    name: string
}

export type ProductInfoProps = {
    info: {
        country: string,
        carats: number,
        price: number
    }
}