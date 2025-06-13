<template lang='pug'>
form.Form(@submit.prevent="handleSubmitClick")
    h2 ОСТАВТЕ ЗАЯВКУ
    .info
        p.info-text НАПИШИТЕ НАМ ЗАЯВКУ #[br]НА ВЫБРАННУЮ УСЛУГУ #[br]С КРАТКИМ ОПИСАНИЕМ #[br]ДЕЯТЕЛЬНОСТИ КОМПАНИИ #[br]ИЛИ КОНЦЕПЦИЕЙ САЙТА
        .info-inputs
            Input(
                name='name'
                placeholder='фио')
            Input(
                name='email'
                placeholder='почта'
                type='email')
    textarea.description(placeholder='описание')
    button.submit(type="submit") ОТПРАВИТЬ
</template>

<script lang='ts' setup>

</script>

<style lang='sass' scoped>
.Form
    +flex(column, $gap: 30)
    background-color: #4C5454
    border-radius: 40px
    width: 1091px
    height: 743px
    padding: 66px
    box-sizing: border-box

    h2
        font-size: 36px

    .info
        +flex(row, space-between)

        .info-text
            white-space: nowrap
            font-size: 30px
        
        .info-inputs
            +flex(column, space-between)
            width: min-content
    
    .description
        width: 100%
        height: 248px
        resize: none
        border: none
        outline: none
        border-radius: 15px
        font-size: 36px
        padding: 22px
        box-sizing: border-box
        color: #4C5454
        font-family: 'CascadiaCode'

    .submit
        +flex(row, center, center, $align-self: end)
        width: 303px
        height: 74px
        border: none
        background-color: #FF715B
        color: #fff
        font-family: 'CascadiaCode'
        font-size: 36px
        border-radius: 13px
</style>