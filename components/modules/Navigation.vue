<template lang='pug'>
.Navigation
    nav
        NuxtLink.nav-el(
            v-for="el in navElements" :key="el.id"
            :to='el[1]') {{ el[0] }}
    Logo(name='icon:profile')
</template>

<script lang='ts' setup>
const navElements = [
    ['О НАС', '#'], 
    ['УСЛУГИ', '#'], 
    ['КОНТАКТЫ', '#'], 
    ['СОТРУДНИКИ', '#']
]
</script>

<style lang='sass' scoped>
.Navigation
    +flex($align-items: center, $gap: 25)

    nav
        +flex($gap: 20)

        .nav-el
            font-size: 20px
    
    .Logo
        width: 85px
        aspect-ratio: 1
</style>