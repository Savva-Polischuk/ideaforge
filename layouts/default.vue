<template lang='pug'>
Header
.page
    slot
Footer
</template>

<style lang='sass' scoped>
.page
    +flex(column, $align-items: center, $gap: 40)
</style>
