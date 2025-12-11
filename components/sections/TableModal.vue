<template lang='pug'>
ClientOnly
    teleport(to="body")
        .TableModel(
        v-if="isShow"
        role="dialog"
        aria-modal="true"
        @click.self="closeHandler"
        @keydown.esc="closeHandler")
            .modal-container
                table(v-if='props.data')
                    tr
                        th(
                            v-for="column in Object.keys(props.data[0])" :key="column.id"
                            scope='column') {{ column }}
                    tr(
                        v-for="item in props.data" :key="item.id"
                        @click='handleRowClick(item)')
                        td(
                            v-for="row in item"
                            :scope='row === item[0] ? "row" : false') {{ row }}

                CRUDModal(
                    v-model='isShowCrudModal'
                    :row='clickedRow')
</template>

<script lang='ts' setup>
interface TableModel {
    data: object[]
}

const props = defineProps<TableModel>()
const isShow = defineModel<boolean>()
const isShowCrudModal = ref(false)
const clickedRow = ref<object>()

const closeHandler = () => {
    isShow.value = false
}

const handleRowClick = (item: object) => {
    clickedRow.value = Object.assign({}, item)
    if (clickedRow.value) {
        isShowCrudModal.value = true
    }
}

</script>

<style lang='sass' scoped>
.TableModel
    position: fixed
    z-index: 99
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 0.5)
    display: flex
    align-items: center
    justify-content: center
    transition: opacity 0.3s ease

    .modal-container
        background: #4C5454
        border-radius: 40px
        padding: 60px
        box-sizing: border-box
        transition: all 0.3s ease
        overflow-y: auto
        width: 1091px
        height: 700px
        max-width: 1091px
        max-height: 700px

        table         

            th, td
                border: 1px solid
                background-color: #fff
                color: #4C5454
                padding: 10px
</style>