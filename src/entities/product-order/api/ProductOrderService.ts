import { AddProductOrderDto, ChangeCountProductOrderDto } from '@entities/product-order'
import protectedAxios from "@shared/api/axios"


export default new class ProductOrderService {

    productOrderUrl = '/product-order'


    addProductOrder(dto: AddProductOrderDto) {
        return protectedAxios.post(`${this.productOrderUrl}/create`, dto)
    }

    deleteFromCart(productOrderId: string) {
        return protectedAxios.delete(`${this.productOrderUrl}/${productOrderId}`)
    }

    changeCountProductOrder(dto: ChangeCountProductOrderDto) {
        return protectedAxios.patch(`${this.productOrderUrl}/update-count`, {
            userOrderId: dto.userOrderId,
            productOrderId: dto.productOrderId,
            count: dto.count,
            action: dto.action
        })
    }
}