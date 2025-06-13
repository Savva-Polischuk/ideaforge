<template lang='pug'>
.Visual
    .glass
        h1 NEW AGE.
</template>

<script lang='ts' setup>

</script>

<style lang='sass' scoped>
.Visual
    +flex(row, center, center)
    height: 690px
    width: 100%
    background-image: url('/bgrd.png')
    background-repeat: no-repeat
    background-size: cover

    .glass
        +flex(row, flex-end, flex-end)
        padding: 60px
        box-sizing: border-box
        width: 1097px
        height: 564px
        border-radius: 52px
        background-color: rgba(255, 255, 255, .6)
        filter: none

        h1
            font-family: 'Poppins'
            color: #FF715B
            font-size: 128px
</style>