<template lang='pug'>
.Services
    Headline(text='УСЛУГИ')
    .Cards
        ServiceCard(
            v-for="card in cards" :key="card.id"
            :header='card.header'
            :items='card.items'
            :price='card.price')
</template>

<script lang='ts' setup>
const cards = [
    {
        header: 'РАЗРАБОТКА САЙТА', 
        items: ['СОЗДАНИЕ ДИЗАЙНА', 'РАЗРАБОТКА КОДА', 'ДЕПЛОЙ НА ХОСТИНГ'], 
        price: '100 000 ₽'
    },
    {
        header: 'ОПТИМИЗАЦИЯ САЙТА', 
        items: ['АНАЛИЗ САЙТА', 'ОПТИМИЗАЦИЯ КОДА', 'SEO ОПТИМИЗАЦИЯ'], 
        price: '60 000 ₽'
    },
    {
        header: 'РАЗРАБОТКА ЛЕНДИНГА', 
        items: ['СОЗДАНИЕ ДИЗАЙНА', 'РАЗРАБОТКА КОДА', 'ДЕПЛОЙ НА ХОСТИНГ'], 
        price: '50 000 ₽'
    },
    {
        header: 'АУДИТ САЙТА', 
        items: ['АНАЛИЗ САЙТА', 'СОСТАВЛЕНИЕ ОТЧЕТА'], 
        price: '5 000 ₽'
    },
]
</script>

<style lang='sass' scoped>
.Services
    +flex(column, $align-items: center, $gap: 40)
    width: 1091px

    .Cards
        +flex($wrap: wrap, $gap: 40)
</style>