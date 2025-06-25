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
const projects = ref([
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
])


const handleLoadProjects = async (clientId: string) => {
    await fetch(`http://127.0.0.1:8000/profile?${new URLSearchParams({ client_id: clientId })}`, {
        method: 'GET'
    }).then(response => response.json())
    .then(res => {
        if (res) {
            projects.value = res
        } 
        else {
            alert("Произошла ошибка")
        }
		console.log(res)
    })
    .catch(error => {
        console.error(`Error: ${error}`)
    })
}

onMounted(() => {
    if (localStorage.getItem('user') !== null) {
        handleLoadProjects(JSON.parse(localStorage.getItem('user')).client_id)
    }    
})
</script>

<style lang='sass' scoped>
.Projects
    +flex($wrap: wrap, $gap: 40)
    width: 1091px
</style>