<template lang='pug'>
.Contact
    slot
</template>

<script lang='ts' setup>

</script>

<style lang='sass' scoped>
.Contact
    +flex(row, center, center)
    white-space: nowrap
    border-radius: 30px
    padding: 0 40px
    box-sizing: border-box
    width: min-content
    height: 130px
    background-color: #4C5454
</style>