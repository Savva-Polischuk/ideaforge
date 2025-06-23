<template lang='pug'>
form.Form(@submit.prevent="handleSubmitClick")
    h2 ОСТАВЬТЕ ЗАЯВКУ
    .info
        p.info-text НАПИШИТЕ НАМ ЗАЯВКУ #[br]НА ВЫБРАННУЮ УСЛУГУ #[br]С КРАТКИМ ОПИСАНИЕМ #[br]ДЕЯТЕЛЬНОСТИ КОМПАНИИ #[br]ИЛИ КОНЦЕПЦИЕЙ САЙТА
        .info-inputs
            Input(
                v-model="clientName"
                name='name'
                placeholder='фио')
            Input(
                v-model="clientEmail"
                name='email'
                placeholder='почта'
                type='email')
    textarea.description(
        v-model='clientAppeal'
        placeholder='описание')
    button.submit(type="submit") ОТПРАВИТЬ
</template>

<script lang='ts' setup>
const clientName = ref('')
const clientEmail = ref('')
const clientAppeal = ref('')

const resetForm = () => {
    clientName.value = ''
    clientEmail.value = ''
    clientAppeal.value = ''
}

const handleSubmitClick = async () => {
    await fetch('api/telegramBot', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: clientName.value,
            email: clientEmail.value,
            appeal: clientAppeal.value
        })
    }).then(response => response.json())
    .then(res => {
        if (res.ok) {
            alert("Данные успешно отправленны")
            navigateTo('/')
            resetForm()
        } 
        else {
            alert("Произошла ошибка, повторите отправку")
        }
    })
    .catch(error => {
        console.error(`Error: ${error}`)
    })
}
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