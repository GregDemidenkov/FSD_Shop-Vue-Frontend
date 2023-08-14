<script setup lang="ts">
    import { ref } from 'vue'

    import { useChangeCountProductOrder, ChangeCountProductOrderProps } from '@features/ChangeCountProductOrder'


    const props = defineProps<ChangeCountProductOrderProps>()
    const currCount = ref<number>(props.count)
    const { changeCountProductOrder } = useChangeCountProductOrder()

    const handleChange = () => {
        let value = currCount.value === null ? 1 : currCount.value
        const action = value > props.count ? "add" : "delete" 
        
        changeCountProductOrder({
            userId: props.userId,
            userOrderId: props.userOrderId,
            productOrderId: props.productOrderId,
            count: value ? value : props.count,
            action: action
        })
    }
</script>

<template>
    <a-config-provider
        :theme="{token: {colorPrimary: '#66BB6A'}}"
    >
        <a-input-number
            class="count-input"
            v-model:value="currCount"
            :min="1" 
            :max="props.maxCount"
            @change="handleChange"
        />
    </a-config-provider>
</template>

<style scoped lang="scss">
    .count-input {
        max-width: 60px;
    }
</style>