<template lang='pug'>
.Messanger
    Logo.pointer(:name='props.name')
</template>

<script lang='ts' setup>
interface Messanger {
    name: string
}

const props = defineProps<Messanger>()
</script>

<style lang='sass' scoped>
.Messanger
    +flex(row, center, center)
    width: 110px
    border-radius: 50%
    height: 110px
    background-color: #4C5454

    .Logo
        height: 60%
</style>