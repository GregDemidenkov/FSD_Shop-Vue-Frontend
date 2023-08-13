import { FullUserOrder } from "@entities/cart"
import protectedAxios from "@shared/api/axios"


export default new class UserOrderService {

    userOrderUrl = '/user-order'


    getUserOrder(userId: string) {
        return protectedAxios.get<FullUserOrder>(`${this.userOrderUrl}/${userId}`)
    }

    clearCart(userOrderId: string) {
        return protectedAxios.delete(`${this.userOrderUrl}/${userOrderId}`)
    }

    checkout(userOrderId: string) {
        return protectedAxios.patch(`${this.userOrderUrl}/${userOrderId}`)
    }
}