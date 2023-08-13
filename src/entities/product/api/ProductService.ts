import { Product } from '@entities/product'
import { axiosApi } from "@shared/api/axios"


export default new class ProductService {

    getProducts(sort: string) {
        return axiosApi.get<Product[]>(`/products/all/${sort}`)
    }
}