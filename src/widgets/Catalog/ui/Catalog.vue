<script setup lang="ts">
    import { watch } from 'vue'

    import { CatalogProps } from '@widgets/Catalog'
    import { AddToCart } from '@features/AddToCart'
    import { SortProducts } from '@features/SortProducts'
    import { ProductCard, useProductStore } from '@entities/product'
    import { useAuthStore } from '@entities/auth'
    import { useActiveProducts } from '@shared/model/useActiveProducts'
    import Message from '@shared/ui/Message.vue'


    const props = defineProps<CatalogProps>()
    const authStore = useAuthStore()
    const productStore = useProductStore()

    watch(
        () => authStore.isAuth === true,
        () => {
            const { getActiveProducts } = useActiveProducts(authStore.user.id)
            getActiveProducts()
        }
    )
</script>

<template>
    <div>
        <v-row justify="end" style="margin: 12px 0 40px;">
            <SortProducts />
        </v-row>
        <v-row 
            class="catalog-row"
            justify="start"
        >
        <v-col
            v-for="product in props.products"
            :key="product._id"
            cols="4"
            class="catalog-col"
        >
            <div class="card-container">
            <ProductCard 
                :product="product"
                :isAuth="authStore.isAuth"
            >
                    <template v-slot:action>

                        <AddToCart
                            v-if="!productStore.activeProducts.includes(product._id)"
                            :product-id="product._id"
                            :count="product.count"
                        />
                        <Message
                            v-else 
                            type="info"
                        >
                            Товар добавлен в корзину
                        </Message>
                    </template>
            </ProductCard>
            </div>
        </v-col>
        </v-row>
    </div>
</template>

<style scoped lang="scss">
    .catalog-row {
        row-gap: 40px;
    }

    .catalog-col {
        padding-top: 0;
        padding-bottom: 0;
    }

    .card-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>