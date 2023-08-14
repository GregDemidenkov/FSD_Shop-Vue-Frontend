import { ref } from "vue"
import { defineStore } from "pinia"

import { ProductOrder } from "@entities/product-order"
import { UserOrderService } from "@entities/cart"


export const useCartStore = defineStore("cartStore", () => {
    const userOrderId = ref<string>("")
    const productOrders = ref<ProductOrder[]>([])
    const check = ref<number>(0)
    const isLoading = ref<boolean>(false)

    
    const clearState = () => {
        productOrders.value = []
        userOrderId.value = ""
    }

    const getUserOrder = async (userId: string) => {
        isLoading.value = true
        try {
            const response = await UserOrderService.getUserOrder(userId)
            
            userOrderId.value = response.data._id ? response.data._id : ""
            productOrders.value = response.data.products ? response.data.products : []
            check.value = response.data.check

        } finally {
            isLoading.value = false
        }
    }

    const clearCart = async (userOrderId: string) => {
        isLoading.value = true
        try {
            await UserOrderService.clearCart(userOrderId)
            
            clearState()

        } finally {
            isLoading.value = false
        }
    }


    return {
        userOrderId,
        productOrders,
        check,
        isLoading,
        clearState,
        getUserOrder,
        clearCart
    }

})