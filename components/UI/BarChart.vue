<template lang='pug'>
ClientOnly
    .BarChart
        Bar(
            :data='barData'
            :options='options')
</template>

<script lang='ts' setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// Зарегистрируйте все необходимые компоненты
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement, // Ключевой элемент для отображения столбцов
  CategoryScale, // Шкала для категорий (ось X)
  LinearScale // Линейная шкала для числовых значений (ось Y)
  // BarController явно регистрировать не нужно, он включается при регистрации BarElement
)

interface BarChart {
    labels: string[]
    data: number[]
    isProjects: boolean
}

const props = defineProps<BarChart>()

const barData = computed(() => ({
    labels: props.labels,
    datasets: [{
        label: props.isProjects ? 'Прогресс' : 'Количество занятых человек',
        data: props.data,
        backgroundColor: props.labels.map(() => '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)),
        hoverOffset: 4
    }]
}))

const options = ref({
    responsive: true,
    maintainAspectRatio: false,
    indexAxis:  props.isProjects ? 'y' : 'x',
    scales: {
        y: {
            beginAtZero: true,    // Начать ось с 0
            min: 0,               // Минимальное значение
            max:  props.isProjects ? 100 : null,             // Максимальное значение
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
})
</script>

<style lang='sass' scoped>
.BarChart
    width: 500px
</style>