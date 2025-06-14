<template lang='pug'>
.Projects
    ProjectCard(
        v-for="project in projects" :key="project.id"
        :name='project.name'
        :description='project.description'
        :stage='project.stage'
        :progress='project.progress')
</template>

<script lang='ts' setup>
const projects = [
    {
        name: 'Главный сайт', 
        description: 'Сайт цветочного магазина', 
        stage: 'Разработка кода', 
        progress: 45
    },
    {
        name: 'АКЦИЯ', 
        description: 'САЙТ НА 8 МАРТА', 
        stage: 'РАЗРАБОТКА ДИЗАЙНА', 
        progress: 75
    },
    {
        name: 'ОПТИМИЗАЦИЯ', 
        description: 'ОПТИМИЗАЦИЯ САЙТА ЦВЕТОЧНОГО МАГАЗИНА', 
        stage: 'SEO ОПТИМИЗАЦИЯ', 
        progress: 75
    },
    {
        name: 'РАЗРАБОТКА ЛЕНДИНГА', 
        description: 'ЛЕНДИНГ СЕЗОННЫХ ЦВЕТОВ', 
        stage: 'ДЕПЛОЙ НА ХОСТИНГ', 
        progress: 75
    }
]
</script>

<style lang='sass' scoped>
.Projects
    +flex($wrap: wrap, $gap: 40)
    width: 1091px
</style>