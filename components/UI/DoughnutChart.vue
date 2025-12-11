<template lang='pug'>
.DoughnutChart
    ClientOnly
        Doughnut(
            :data='doughnutData'
            :options='options')
</template>

<script lang='ts' setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, DoughnutController } from 'chart.js'

// Регистрируем компоненты, которые будет использовать диаграмма
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, DoughnutController)

const doughnutData = computed(() => ({
    labels: labels.value,
    datasets: [{
        label: 'Количество человек',
        data: data.value,
        backgroundColor: labels.value.map(() => '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)),
        hoverOffset: 4
    }]
}))

const options = ref({
    responsive: true,
    maintainAspectRatio: false
})

const labels = ref([])
const data = ref([])

interface DepartmentEmployees {
    department_name: string,
    employees: number
}

const LoadData = async () => {
    await fetch(`http://127.0.0.1:8000/statistics/department_employees`, {
        method: 'GET'
    }).then(response => response.json())
    .then(res => {
        if (res) {
            labels.value = res.map((x: DepartmentEmployees) => x.department_name + ` (${x.employees} человек)`)
            data.value = res.map((x: DepartmentEmployees) => x.employees)
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
    await LoadData()
})
</script>

<style lang='sass' scoped>
.DoughnutChart
    width: 500px
</style>