<script setup lang="ts">
    import { WelcomeProps } from '@features/AuthMenu'


    const props = defineProps<WelcomeProps>()
</script>

<template>
    <p>Welocme! {{ props.name }}</p>
</template>

<style scoped lang="scss">
    p {
        font-size: 14px;
        font-weight: 700;
        color: $light-green;
    }
</style>