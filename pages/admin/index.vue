<template lang='pug'>
.tables
    TableCard(
        v-for="table in tables" :key="table.id"
        :name='table.name'
        :text='table.text'
        @cardClick='handleCardClick')

TableModal(
    v-model='isShowModal'
    :data='data')
</template>

<script lang='ts' setup>
const isShowModal = ref(false)
const data = ref()

const tables = [
    {
        name: 'client',
        text: 'Клиенты'
    },
    {
        name: 'employee',
        text: 'Сотрудники'
    },
    {
        name: 'project',
        text: 'Проекты'
    },
    {
        name: 'department',
        text: 'Отделы'
    },
    {
        name: 'project_employment',
        text: 'Проектная занятость'
    }
]

const handleCardClick = (rows: object[]) => {
    data.value = rows
    if (data.value) {
        isShowModal.value = true
    }
    console.log(isShowModal.value)
    // console.log(data.value);
    // isShow.value = true
}
</script>

<style lang='sass' scoped>
.tables
    +flex($wrap: wrap, $gap: 38)
    margin: 77px 0
    width: 1097px
</style>