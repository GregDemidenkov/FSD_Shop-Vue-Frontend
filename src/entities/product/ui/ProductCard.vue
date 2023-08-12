<script setup lang="ts">
    import { ProductCardProps } from '@entities/product'
    import priceFormatter from '@shared/lib/priceFormatter'
    import Message from '@shared/ui/Message.vue'
    import config from '@shared/routes/config'

    const props = defineProps<ProductCardProps>()
</script>

<template>
    <v-card class="card">
        <v-img
            :src="props.product.img"
            width="400px"
            cover
        ></v-img>

        <div class="card-body">
            <v-card-title class="title">
                {{ props.product.name }}
            </v-card-title>

            <v-card-subtitle class="info">
                <p><span>Страна:</span> {{ props.product.country }}</p>
                <p><span>Караты:</span> {{ props.product.carats }}</p>
                <p><span>Цена:</span> {{ priceFormatter(props.product.price) }} ₽</p>
            </v-card-subtitle>

            <div class="actions">
                <slot 
                    v-if="props.isAuth"
                    name="action" 
                />
                <Message
                    v-else 
                    type='info'
                >
                    <p><router-link :to="config.login">Войдите</router-link> в профиль, чтобы добавить товар в корзину</p>
                </Message>
            </div>
        </div>    
    </v-card>
</template>

<style scoped lang="scss">
    .card {
        width: 400px;
        box-shadow: rgb(188, 184, 181) 1px 4px 10px;

        .card-body {
            padding: 24px;
        }
    }

    .title {
        height: 60px;
        padding: 0;
        font-size: 16px;
        font-weight: 800;
        line-height: 24px;
        white-space: normal
    }

    .info {
        padding: 0;
        font-weight: 600;
        color: $dark-gray;
        opacity: 1;
        span {
            color: #000000;
        }
    }

    .actions {
        height: 50px; 
        padding: 0; 
        margin-top: 20px;   
    }
</style>