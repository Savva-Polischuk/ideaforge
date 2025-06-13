<template lang='pug'>
.ServiceCard
    h3 {{ props.header }}
    ul 
        li(v-for="item in props.items" :key="item.id") {{ item }}
    .price {{ props.price }}
</template>

<script lang='ts' setup>
interface ServiceCard {
    header: string
    items: string[]
    price: string
}

const props = defineProps<ServiceCard>()
</script>

<style lang='sass' scoped>
.ServiceCard
    +flex(column, space-between, center)
    width: 525px
    aspect-ratio: 1
    background-color: #4C5454
    border-radius: 40px
    padding: 62px 0
    box-sizing: border-box

    h3
        font-size: 36px
        font-weight: 400

    ul
        list-style-type: disc

    .price
        +flex(row, center, center)
        white-space: nowrap
        background-color: #FF715B
        border-radius: 13px
        width: 265px
        height: 93px
</style>