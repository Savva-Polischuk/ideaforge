<template lang='pug'>
Icon.Logo(:name="props.name")
</template>

<script lang='ts' setup>
interface Icon {
    name: string
}

const props = defineProps<Icon>()
</script>

<style lang='sass' scoped>
.Logo
    width: inherit
    height: 100%

    &.pointer
        cursor: pointer
</style>