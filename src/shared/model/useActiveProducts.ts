import { UserOrderService } from "@entities/cart"
import { useProductStore } from "@entities/product"


export function useActiveProducts(userId: string) {
    const productStore = useProductStore()

    const getActiveProducts = async () => {
        const response = await UserOrderService.getUserOrder(userId)

        let activeProducts: string[] = []
        response.data.products.forEach((productOrder) => {
            activeProducts.push(productOrder.product_id._id)
        })

        productStore.setActiveProducts(activeProducts)
    }

    return {
        getActiveProducts
    }
}