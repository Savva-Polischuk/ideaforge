<template lang='pug'>
h1 ЗДРАВСТВУЙТЕ, {{ userName }}!
Projects
</template>

<script lang='ts' setup>
const userName = ref('')

onBeforeMount(() => {
    if (localStorage.getItem('user') !== null) {
        userName.value = JSON.parse(localStorage.getItem('user')).name.toUpperCase()
    }
    else {
        navigateTo('/')
    }
})
</script>

<style lang='sass' scoped>
h1
    +flex($align-self: start)
    margin-left: 111px
    color: #4C5454
    margin-top: 40px
</style>