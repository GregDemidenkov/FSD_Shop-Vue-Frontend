<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <v-card 
        class="auth-card" 
    >
        <template 
            v-slot:title
        >
            <div class="title">
                {{ props.title }}
            </div>
            <v-divider class="divider"/>
        </template>
        <slot></slot>
    </v-card>
</template>

<style scoped lang="scss">
    .auth-card {
        min-width: 550px;
        padding: 24px;
        text-align: center;
    }

    .title {
        font-weight: 700;
        color: $dark-green;
    }

    .divider {
        margin: 20px 0;
    }
</style>