import { DeleteFromCartDto } from "@features/DeleteFromCart"
import { ProductOrderService } from "@entities/product-order"
import { useCartStore } from "@entities/cart"


export function useDeleteFromCart() {
    const cartStore = useCartStore()

    const deleteFromCart = async (dto: DeleteFromCartDto) => {
        await ProductOrderService.deleteFromCart(dto.productOrderId)

        cartStore.getUserOrder(dto.userId)
    }

    
    return {
        deleteFromCart
    }
}