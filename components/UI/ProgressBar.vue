<template lang='pug'>
.ProgressBar
    .progress(:style='{width: `${props.progress}%`}')
        p.label {{ `${props.progress}%` }}
</template>

<script lang='ts' setup>
interface ProgressBar {
    progress: number
}

const props = defineProps<ProgressBar>()
</script>

<style lang='sass' scoped>
.ProgressBar
    background-color: #4C5454 
    border-radius: 8px
    height: 36px

    .progress
        +flex(row, flex-end, center)
        background-color: #FF715B
        border-radius: 8px
        height: 100%
        padding: 0 5px
        box-sizing: border-box

        .label
            font-size: 20px
</style>