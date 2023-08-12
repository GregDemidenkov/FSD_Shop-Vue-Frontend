<script setup lang="ts">
    import { MessageProps } from '../model/types'
    const props = defineProps<MessageProps>()
</script>

<template>
    <v-alert
        :type="props.type"
        variant="tonal"
        class="message"
    >
        <slot />
    </v-alert>
</template>

<style scoped lang="scss">
    .message {
        padding: 10px;
        font-size: 13px;
        p {
            width: 100%;
        }
    }
</style>