<script setup lang="ts">
    import { MessageProps } from '../model/types'
    const props = defineProps<MessageProps>()
</script>

<template>
    <v-alert
        :type="props.type"
        :text="props.text"
        closable
        variant="tonal"
        icon="none"
    />
</template>