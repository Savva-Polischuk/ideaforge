<template lang='pug'>
header.Header
    NuxtLink.logo(to="/")
        Logo.pointer(name="icon:logo")
    Navigation(v-model='isShowModal')

    Modal(v-model='isShowModal')
</template>

<script lang='ts' setup>
const isShowModal = ref(false)
</script>

<style lang='sass' scoped>
.Header
    +flex(row, space-between, center)
    height: 143px
    background-color: #4C5454
    padding: 0 91px

    .logo
        width: 263px
        height: 100%
</style>