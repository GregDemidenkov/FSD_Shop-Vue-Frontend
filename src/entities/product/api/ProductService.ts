import { Product } from '@entities/product'
import { axiosApi } from "@shared/api/axios"


class ProductService {

    getProducts(sort: string) {
        return axiosApi.get<Product[]>(`/products/all/${sort}`)
    }
}


export default new ProductService()