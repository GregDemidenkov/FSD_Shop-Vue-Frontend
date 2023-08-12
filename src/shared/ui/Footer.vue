<script setup lang="ts">
    import { theme } from '@shared/styles/constants'
</script>

<template>
    <v-footer 
        app
        :color="theme.lightGray"
        class="footer"
    >
        FSD-Vue-Shop ©2023 Created by&nbsp;
        <a href = "https://github.com/GregDemidenkov" target = "_blank" :color="theme.darkGreen">podlunoy</a>
    </v-footer>
</template>

<style scoped lang="scss">
    .footer {
        position: static !important;
        width: 100%;
        height: 64px;
        padding: 20px 0;
        display: flex;
        justify-content: center;
    }

    a {
        color: $light-green;
        text-decoration: none;
    }
</style>