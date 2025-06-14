<template lang='pug'>
.ProjectCard
    h2.name-project {{ props.name }}
    .card-content
        p.card-description {{ props.description }}
        .card-statistic
            p.stage {{ props.stage }}
            ProgressBar(:progress='props.progress')
</template>

<script lang='ts' setup>
interface ProjectCard {
    name: string
    description: string
    stage: string
    progress: number
}

const props = defineProps<ProjectCard>()
</script>

<style lang='sass' scoped>
.ProjectCard
    +flex(column, space-between)
    width: 525px
    height: 525px
    background-color: #4C5454
    color: #fff
    border-radius: 40px
    padding: 51px
    box-sizing: border-box

    .name-project
        margin-left: 5px

    .card-content
        +flex(column, $gap: 25)

        .card-description
            margin-left: 5px
            font-size: 24px

        .card-statistic
            +flex(column, center, $gap: 16)
            background-color: #fff
            border-radius: 13px
            height: 200px
            color: #4C5454
            padding: 32px
            box-sizing: border-box

            .stage
                font-size: 24px
                margin-left: 5px
</style>