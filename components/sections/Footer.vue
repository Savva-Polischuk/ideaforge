<template lang='pug'>
footer.Footer
    .contacts
        Contact IDEAFORGE@EMAIL.COM
        Contact МОСКВА, УЛ ПУШКИНА, Д 1
    .contacts
        .messengers
            Messanger(
                v-for="messenger in messengers" :key="messenger.id"
                :name='"icon:" + messenger')
        Contact +7 495 123 23 45
</template>

<script lang='ts' setup>
const messengers = ['telegram', 'whatsapp', 'instagram', 'youtube', 'x']
</script>

<style lang='sass' scoped>
.Footer
    +flex(column, $gap: 40, $align-items: center)
    margin: 40px 0

    .contacts
        +flex($gap: 40, $align-items: center)

        .messengers
            +flex($gap: 18)

</style>