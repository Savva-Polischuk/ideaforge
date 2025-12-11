<template lang='pug'>
input.Input(
    v-model.trim="inputModel"
    :placeholder="props.placeholder"
    :name="props.name"
    :type="props.type"
    :required="props.isRequired"
    :disabled="props.isDisabled"
    :pattern="inputPattern(props.type)"
    maxlength="200")
</template>

<script lang='ts' setup>
type InputType = 'text' | 'tel' | 'email' 

interface Input {
    name: string // Уникальное название для input
    isRequired?: boolean // true если обязательно
    placeholder: string 
    type?: InputType // тип инпута (текст, телефон, почта) по-умолчанию текст
    isDisabled: boolean
}

const props = withDefaults(defineProps<Input>(), {
    type: 'text'
})
const inputModel = defineModel<string>()

const inputPattern = (type: InputType) => {
    switch (type) {
        case 'tel':
            return '^[\+]?[0-9 ]{3,45}$'
    }
}
</script>

<style lang='sass' scoped>
.Input
    border: none
    padding: 0 18px
    box-sizing: border-box
    width: 489px
    height: 74px
    font-size: 36px
    color: #4C5454
    outline: none
    font-family: 'Cascadia Code'
    border-radius: 15px
</style>