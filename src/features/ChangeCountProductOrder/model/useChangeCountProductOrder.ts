import { useCartStore } from "@entities/cart"
import { ChangeCountProductOrderDto, ProductOrderService } from "@entities/product-order"


export function useChangeCountProductOrder() {
    const cartStore = useCartStore()

    const changeCountProductOrder = async (dto: ChangeCountProductOrderDto) => {
        await ProductOrderService.changeCountProductOrder(dto)

        cartStore.getUserOrder(dto.userId)
    }


    return {
        changeCountProductOrder
    }
}