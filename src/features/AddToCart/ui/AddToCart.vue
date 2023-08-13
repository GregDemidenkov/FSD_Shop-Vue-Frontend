<script setup lang="ts">
    import { ref } from 'vue'

    import { AddToCartProps, useAddToCart } from '@features/AddToCart'
    import { useAuthStore } from '@entities/auth'
    import { theme } from '@shared/styles/constants'
    import Message from '@shared/ui/Message.vue'

    
    const props = defineProps<AddToCartProps>()
    const currCount = ref<number>(1)
    const snackbar = ref(false)
    const textSnackbar = ref('')
    const authStore = useAuthStore()

    const handleClick = async () => {
        const { status, fetching } = useAddToCart()

        await fetching({
            userId: authStore.user.id,
            productOrder: {
                id: props.productId,
                count: currCount.value
            }
        })
        
        if(status.value) {
            textSnackbar.value = `Товар в количестве ${currCount.value} шт. добавлен в корзину!`
        } else {
            textSnackbar.value = `Произошла ошибка, попробуйте снова`
        }

        snackbar.value = true
    }
</script>

<template>
    <div
        v-if="props.count" 
        class="add-to-cart-wrapper"
    >
        <v-snackbar
            location="top"
            :timeout="3000"
            :color="theme.background"
            v-model="snackbar"
        >
            {{ textSnackbar }}
        </v-snackbar>
        <p class="count">Осталось {{ props.count }} шт.</p>
        <v-btn
            type="submit"
            size="small"
            :color="theme.lightGreen"
            @click="handleClick"
        >
            В корзину
        </v-btn>
        <a-config-provider
            :theme="{token: {colorPrimary: '#66BB6A'}}"
        >
            <a-input-number
                class="count-input"
                v-model:value="currCount"
                :min="1" 
                :max="props.count" 
            />
        </a-config-provider>
    </div>
    <Message
        v-else 
        type="error"
    >
        Товара нет в наличии
    </Message>
</template>

<style scoped lang="scss">
    .add-to-cart-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;

        .count {
            font-size: 12px;
            color: $dark-gray;
        }
    }

    .count-input {
        max-width: 60px;
    }
</style>