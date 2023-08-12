<script setup lang="ts">
    import { CatalogProps } from '@widgets/Catalog'
    import { AddToCart } from '@features/AddToCart'
    import { SortProducts } from '@features/SortProducts'
    import { ProductCard } from '@entities/product'
    import { useAuthStore } from '@entities/auth'


    const props = defineProps<CatalogProps>()
    const authStore = useAuthStore()
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
                            :product-id="product._id"
                            :count="product.count"
                        />
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