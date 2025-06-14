<template lang='pug'>
.About
    .about-headline
        Headline.center(text='О НАС')
        .titles
            .clients наши клиенты
            .portfolio портфолио
    .about-content
        p.about-text IDEAFORGE - МОЛОДАЯ IT КОМПАНИЯ, КОТОРАЯ ЗАНИМАЕТСЯ РАЗРАБОТКОЙ САЙТОВ И ВЕБ ПРИЛОЖЕНИЙ ДЛЯ ВАШЕГО БИЗНЕСА
        .clients-card
            p.clients-text ЗАКАЗЧИКИ
            .clients-logo
                Logo(
                    v-for="name in companies" :key="name.id"
                    :name='name')
    Slider
</template>

<script lang='ts' setup>
const companies = ['icon:riffizen', 'icon:sber', 'icon:s7', 'icon:aeroflot']
</script>

<style lang='sass' scoped>
.About
    +flex(column, $gap: 40)
    width: 1091px

    .about-headline
        +flex($gap: 40)
    
        .titles
            +flex($gap: 20)
            padding: 18px
            width: 100%
            background-color: #4C5454
            border-radius: 30px

            .clients, .portfolio
                +flex(row, center, center)
                border-radius: 20px
                color: #4C5454
                background-color: #fff
                padding: 0 40px
                white-space: nowrap

    .about-content
        +flex($align-items: center, $gap: 35)
        height: 511px
        background-color: #4C5454
        border-radius: 40px
        padding: 44px
        box-sizing: border-box

        .about-text
            width: 270px
            margin: 0 0 0 10px

        .clients-card
            +flex(row, space-between, center)
            width: 695px
            height: 100%
            background-color: #fff
            border-radius: 20px
            padding: 50px
            box-sizing: border-box

            .clients-text
                font-size: 64px
                font-weight: 500
                writing-mode: sideways-lr
                color: #4C5454

            .clients-logo
                +flex(column, space-between, flex-end)
                width: 100%
                height: 100%

                .Logo
                    height: 75px
</style>