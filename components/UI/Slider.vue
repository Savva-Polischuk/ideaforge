<template lang='pug'>
ClientOnly
    swiper-container(ref="containerRef")
        swiper-slide(
            v-for="slide in slides" :key="slide.id")
            img.slide(
                :src='slide'
                alt='slide')
</template>

<script lang='ts' setup>
const containerRef = ref()
const swiper = useSwiper(containerRef)

const slides = ref(["/slides/slide1.jpg", "/slides/slide2.jpg", "/slides/slide3.jpg", "/slides/slide4.jpg"])
</script>

<style lang='sass' scoped>
swiper-slide
    height: 566px
    border-radius: 40px
    overflow-y: auto
    -ms-overflow-style: none
    scrollbar-width: none

    .slide
        width: 100%
        background-color: #ccc

    &::-webkit-scrollbar
        width: 0
</style>