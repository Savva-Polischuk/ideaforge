<template lang='pug'>
ClientOnly
	teleport(to="body")
		.Modal(
		v-if="isShow"
		role="dialog"
		aria-modal="true"
		@click.self="closeHandler"
		@keydown.esc="closeHandler")
			.modal-container(:class='props.isRegistration ? "registration" : false')
				Input(
					v-if='props.isRegistration'
					v-model='username'
					isRequired
					name='name'
					placeholder='Имя')
				Input(
					v-if='props.isRegistration'
					v-model='surname'
					isRequired
					name='name'
					placeholder='Фамилия')
				Input(
					v-model='email'
					isRequired
					name='email'
					placeholder='почта'
					type='email')
				Input(
					v-model='password'
					isRequired
					name='password'
					placeholder='пароль'
					type='password')
				p.description(@click='handleDescriptionClick') {{ props.isRegistration ? 'вход' : 'регистрация' }}
				button.submit(
					@click='handleSubmitClick'
					type="submit"
					) {{ props.isRegistration ? 'ЗАРЕГИСТРИРОВАТЬСЯ' : 'ВОЙТИ' }}
</template>

<script lang='ts' setup>
interface Modal {
	isRegistration: boolean
}

const isShow = defineModel<boolean>()
const props = defineProps<Modal>()
const emit = defineEmits(['openRegistration', 'openEnter'])

const username = ref('')
const surname = ref('')
const email = ref('')
const password = ref('')

const closeHandler = () => {
    isShow.value = false
}

const handleSubmitClick = async () => {
	if (!props.isRegistration) {
		await fetch(`http://127.0.0.1:8000/?${new URLSearchParams({ email: email.value, password: password.value})}`, {
        method: 'POST'
		}).then(response => response.json())
		.then(res => {
			if (res) {
				alert("успешно")
				navigateTo('/profile')
				isShow.value = false
				localStorage.setItem('user', JSON.stringify(res))
			} 
			else {
				alert("Неправильная почта или пароль")
			}
			console.log(res)
		})
		.catch(error => {
			console.error(`Error: ${error}`)
		})
	}
	else {
		await fetch(`http://127.0.0.1:8000/admin/client`, {
        method: 'POST',
		headers: {
			"Content-Type": "application/json",
			},
		body: JSON.stringify({
			name: username.value, 
			surname: surname.value, 
			email: email.value, 
			password: password.value})
		}).then(response => response.json())
		.then(res => {
			if (res.status_code === 200 || res.status_code === 201) {
				alert("успешно")
				navigateTo('/profile')
				isShow.value = false
				localStorage.setItem('user', JSON.stringify(res))
			} 
			else {
				alert("Ошибка регистрации, повторите попытку позже")
			}
			console.log(res)
		})
		.catch(error => {
			console.error(`Error: ${error}`)
		})
	}
}

const handleDescriptionClick = () => {
	if (props.isRegistration) {
		emit('openEnter')
	}
	else {
		emit('openRegistration')
	}
}
</script>

<style lang='sass' scoped>
.Modal
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
		+flex(column, center, center, $gap: 32)
		background: #4C5454
		border-radius: 40px
		padding: 50px
		box-sizing: border-box
		transition: all 0.3s ease
		width: 600px
		height: 500px
		max-width: 600px
		max-height: 500px

		.description
			font-size: 30px
			cursor: pointer

		.submit
			+flex(row, center, center)
			min-width: 303px
			width: max-content
			padding: 0 30px
			height: 74px
			border: none
			background-color: #FF715B
			color: #fff
			font-family: 'CascadiaCode'
			font-size: 36px
			border-radius: 13px
		
		&.registration
			gap: 22px
			height: 600px
			max-height: 600px
</style>