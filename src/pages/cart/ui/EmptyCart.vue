<template>
    <div class="empty-cart">
        <v-icon 
            size="120"
            icon="mdi-emoticon-sad-outline"
        />
        <p>Ваша корзина пуста</p>
    </div>
</template>

<style scoped lang="scss">
    .empty-cart {
        width: 100%;
        height: 100%;
        text-align: center;

        p {
            font-size: 30px;
            font-weight: 700;
        }
    }
</style>