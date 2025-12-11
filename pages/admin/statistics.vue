<template lang='pug'>
.statistics
    DoughnutChart
    BarChart(
        isProjects
        :labels='projectBarLabels'
        :data='projectBarData')
    BarChart(
        :labels='employeeOnProjectBarLabels'
        :data='employeeOnProjectBarData')
</template>

<script lang='ts' setup>
const projectBarLabels = ref([])
const projectBarData = ref([])
const employeeOnProjectBarLabels = ref([])
const employeeOnProjectBarData = ref([])

interface Project {
    client_id: number
    name: string
    description: string
    stage: string
    progress: number
    completion: string | null
}

const LoadProjectData = async () => {
    await fetch(`http://127.0.0.1:8000/admin/project`, {
        method: 'GET'
    }).then(response => response.json())
    .then(res => {
        if (res) {
            projectBarLabels.value = res.map((x: Project) => x.name + ` ${x.progress}%`)
            projectBarData.value = res.map((x: Project) => x.progress)
        }
        else {
            alert("Произошла ошибка")
        }
    })
    .catch(error => {
        console.error(`Error: ${error}`)
    })
}

interface EmployeesOnProject {
    project_name: string,
    employees: number
}

const LoadEmployeeOnProjectData = async () => {
    await fetch(`http://127.0.0.1:8000/statistics/project_employees`, {
        method: 'GET'
    }).then(response => response.json())
    .then(res => {
        if (res) {            
            employeeOnProjectBarLabels.value = res.map((x: EmployeesOnProject) =>  x.project_name + ` (${x.employees} человек)`)
            employeeOnProjectBarData.value = res.map((x: EmployeesOnProject) => x.employees)
        }
        else {
            alert("Произошла ошибка")
        }
    })
    .catch(error => {
        console.error(`Error: ${error}`)
    })
}


onMounted(async() => {
    await LoadProjectData()
    await LoadEmployeeOnProjectData()
})
</script>

<style lang='sass' scoped>
.statistics
    +flex($wrap: wrap, $gap: 40)
</style>