<template lang='pug'>
header.Header
    NuxtLink.logo(to="/")
        Logo.pointer(name="icon:logo")
    Navigation(v-model='isShowEnterModal')

    Modal(
        v-model='isShowRegistrationModal'
        isRegistration
        @openEnter='handleOpenEnter')
    Modal(
        v-model='isShowEnterModal'
        @openRegistration='handleOpenRegistration')
</template>

<script lang='ts' setup>
const isShowRegistrationModal = ref(false)
const isShowEnterModal = ref(false)

const handleOpenEnter = () => {
    isShowRegistrationModal.value = false
    isShowEnterModal.value = true
}

const handleOpenRegistration = () => {
    isShowEnterModal.value = false
    isShowRegistrationModal.value = true
}
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