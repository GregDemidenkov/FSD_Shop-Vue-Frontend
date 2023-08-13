import { ref } from "vue"

import { ProductOrderService, AddProductOrderDto } from "@entities/product-order"
import { useAuthStore } from "@entities/auth"
import { useActiveProducts } from "@shared/model/useActiveProducts"


export function useAddToCart() {
    const status = ref<boolean | null>(null)
    const authStore = useAuthStore()
    const { getActiveProducts } = useActiveProducts(authStore.user.id)


    const fetching = async (dto: AddProductOrderDto) => {
        try {
            await ProductOrderService.addProductOrder(dto)
            await getActiveProducts()

            status.value = true
        } catch (error) {
            status.value = false
        }
    }

    
    return {
        status,
        fetching
    }
}