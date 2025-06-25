<template lang='pug'>
.TableCard(@click='handleTableClick')
    h2 {{ props.text }}
</template>

<script lang='ts' setup>
interface TableCard {
    name: 'client' | 'project' | 'department' | 'employee' | 'project_employment'
    text: string
}

const props = defineProps<TableCard>()
const emit = defineEmits(['cardClick'])


const handleTableClick = async () => {
      await fetch(`http://127.0.0.1:8000/admin/${props.name}`, {
        method: 'GET'
    }).then(response => response.json())
    .then(res => {
        if (res) {
			emit('cardClick', res)
        } 
        else {
            alert("Ошибка")
        }
		console.log(res)
    })
    .catch(error => {
        console.error(`Error: ${error}`)
    })
    // navigateTo(`/admin/?${new URLSearchParams({ id: props.name })}`)
}
</script>

<style lang='sass' scoped>
.TableCard
    padding: 40px 50px
    box-sizing: border-box
    width: 529px
    height: 384px
    background-color: #4C5454
    color: #fff
    border-radius: 40px
    cursor: pointer
</style>