<script setup lang="ts">
    import { ref } from 'vue'

    import { AddToCartProps } from '@features/AddToCart'
    import { theme } from '@shared/styles/constants'
    import Message from '@shared/ui/Message.vue'

    
    const props = defineProps<AddToCartProps>()
    const value = ref<number>(1)
</script>

<template>
    <div
        v-if="props.count" 
        class="add-to-cart-wrapper"
    >
        <p class="count">Осталось {{ props.count }} шт.</p>
        <v-btn
            type="submit"
            size="small"
            :color="theme.lightGreen"
        >
            В корзину
        </v-btn>
        <a-config-provider
            :theme="{token: {colorPrimary: '#66BB6A'}}"
        >
            <a-input-number
                class="count-input"
                v-model:value="value"
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