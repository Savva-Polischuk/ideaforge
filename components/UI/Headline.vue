<template lang='pug'>
.Headline
    h2 {{ props.text }}
</template>

<script lang='ts' setup>
interface Headline {
    text: string
}

const props = defineProps<Headline>()
</script>

<style lang='sass' scoped>
.Headline
    +flex($align-items: center)
    height: 116px
    width: 100%
    background-color: #FF715B
    border-radius: 30px
    padding: 0 40px
    box-sizing: border-box

    h2
        font-size: 48px
        color: #4C5454

    &.center
        +flex(row, center, center)
</style>