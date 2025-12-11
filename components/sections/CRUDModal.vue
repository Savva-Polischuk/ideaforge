<template lang='pug'>
ClientOnly
    teleport(to="body")
        .CRUDModal(
        v-if="isShowCrudModal"
        role="dialog"
        aria-modal="true"
        @click.self="closeHandler"
        @keydown.esc="closeHandler")
            .modal-container
                .inputs(v-for="attributeName in Object.keys(props.row)" :key="attributeName.id")
                    p {{ attributeName }}
                    Input(
                        v-model="props.row[attributeName]"
                        :name='attributeName'
                        :isDisabled='attributeName === "id"')
                .buttons
                    button.delete Удалить
                    button.put Изменить
</template>

<script lang='ts' setup>
interface CRUDModal {
    row: object
}

const props =  defineProps<CRUDModal>()
const isShowCrudModal = defineModel<boolean>()


const closeHandler = () => {
    isShowCrudModal.value = false
}
</script>

<style lang='sass' scoped>
.CRUDModal
    position: fixed
    z-index: 9998
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
        +flex(column, $gap: 20)
        background: #4C5454
        border-radius: 40px
        padding: 60px
        box-sizing: border-box
        transition: all 0.3s ease
        overflow-y: auto
        max-width: 1091px
        max-height: 700px

        .inputs
            +flex($align-items: center, $gap: 20)

        .buttons
            +flex($align-self: flex-end, $gap: 20)

            button
                width: max-content
</style>