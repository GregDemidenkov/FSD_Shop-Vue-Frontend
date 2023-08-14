<script setup lang="ts">
    import { ProductRowProps } from '@entities/product-order'
    import priceFormatter from '@shared/lib/priceFormatter'

    const props = defineProps<ProductRowProps>()
</script>

<template>
    <div class="product-info">
        <img :src="props.productInfo.img" alt="" style="width: 180px" />
        <div>
            <h2>{{ props.productInfo.name }}</h2>
            <div class="info">
                <p><span>Страна: </span>{{ props.productInfo.country }}</p>
                <p><span>Караты: </span>{{ props.productInfo.carats }}</p>
                <p><span>Цена: </span>{{ priceFormatter(props.productInfo.price) }} ₽</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .product-info {
        display: flex;

        img {
            margin-right: 30px;
        }

        h2 {
            font-size: 18px;
            font-weight: 700;
        }

        .info {
            margin-top: 10px;
            line-height: 30px;
        }
    }
</style>