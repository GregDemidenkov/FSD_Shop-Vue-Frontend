<script setup lang="ts">
    import { CartTableProps } from '@widgets/CartTable'
    import { DeleteFromCart } from '@features/DeleteFromCart'
    import { ChangeCountProductOrder } from '@features/ChangeCountProductOrder'
    import { ProductRow } from '@entities/product-order'
    import { useAuthStore } from '@entities/auth'
    import priceFormatter from '@shared/lib/priceFormatter'


    const props = defineProps<CartTableProps>()
    const authStore = useAuthStore()
</script>

<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-center">
                    Товар
                </th>
                <th class="text-center">
                    Цена
                </th>
                <th class="text-center">
                    Количество
                </th>
                <th/>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="productOrder in props.productOrders"
                :key="productOrder._id"
            >
                <td>
                    <ProductRow 
                        :productInfo="{
                            name: productOrder.product_id.name,
                            img: productOrder.product_id.img,
                            country: productOrder.product_id.country,
                            carats: productOrder.product_id.carats,
                            price: productOrder.product_id.price
                        }"
                    />
                </td>
                <td class="text-center">
                    {{ priceFormatter(productOrder.full_price) }} ₽
                </td>
                <td class="text-center">
                    <ChangeCountProductOrder 
                        :count="productOrder.count"
                        :maxCount="productOrder.product_id.count"
                        :productOrderId="productOrder._id"
                        :userOrderId="productOrder.user_order_id"
                        :userId="authStore.user.id"
                    />
                </td>
                <td>
                    <DeleteFromCart 
                        :productOrderId="productOrder._id"
                        :userId="authStore.user.id"
                    />
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<style scoped lang="scss">
    td {
        padding: 16px !important;
    }
</style>