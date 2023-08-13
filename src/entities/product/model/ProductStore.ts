import { ref } from "vue"
import { defineStore } from "pinia"

import { ProductService, Product, Sort } from '@entities/product'


export const useProductStore = defineStore("productStore", () => {
    const products = ref<Product[]>([])
    const sort = ref<Sort>('default')
    const activeProducts = ref<string[]>([])
    const isLoading = ref<boolean>(false)

    
    const setSort = (sortValue: Sort) => {
        sort.value = sortValue
    }

    const setActiveProducts = (productsId: string[]) => {
        activeProducts.value = productsId
    }


    const getProducts = async () => {
        isLoading.value = true
        try {
            const response = await ProductService.getProducts(sort.value)
            
            products.value = response.data
        } finally {
            isLoading.value = false
        }
    }


    return {
        products,
        sort,
        activeProducts,
        isLoading,
        setSort,
        setActiveProducts,
        getProducts
    }

})