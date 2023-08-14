<script setup lang="ts">
    import { ref } from 'vue'
    import { notification } from 'ant-design-vue'

    import { CheckoutProps } from '@features/Checkout'
    import { useCartStore } from '@entities/cart'
    import priceFormatter from '@shared/lib/priceFormatter'
    import { theme } from '@shared/styles/constants'


    const props = defineProps<CheckoutProps>()
    const cartStore = useCartStore()

    const openNotification = (access: boolean) => {
        notification.open({
            message: `Заказ № ${props.userOrderId}`,
            description:
                access ? 
                'Заказ успешно оформлен, следите за его статусом' 
                : 'Недостаточно товара на скаладе'
        })
    }

    const handleClick = async () => {
        const result = await cartStore.checkout()

        if(result) {
            openNotification(true)
        } else {
            openNotification(false)
        }
    }
</script>

<template>
    <v-row
        justify="space-between"
        align="center" 
    >
        <v-col>
            <h2><span>Итого к оплате: </span>{{ priceFormatter(props.check) }} ₽</h2>
        </v-col>
        <v-col class="checkout-btn">
            <v-btn
                size="large"
                :color="theme.lightGreen"
                @click="handleClick"
            >
                Оформить заказ
            </v-btn>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">
    h2 {
        font-size: 24px;
        color: $dark-green;

        span {
            font-weight: 700;
            color: $light-green;
        }
    }

    .checkout-btn {
        display: flex;
        justify-content: end;
    }
</style>