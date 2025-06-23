<template lang='pug'>
ClientOnly
	teleport(to="body")
		.Modal(
		v-if="isShow"
		role="dialog"
		aria-modal="true"
		@click.self="closeHandler"
		@keydown.esc="closeHandler")
			.modal-container
				Input(
					v-model='fio'
					name='name'
					placeholder='фио')
				Input(
					v-model='email'
					name='email'
					placeholder='почта'
					type='email')
				Input(
					v-model='password'
					name='password'
					placeholder='пароль'
					type='password'
				)
				button.submit(type="submit") ВОЙТИ
</template>

<script lang='ts' setup>
const isShow = defineModel<boolean>()

const fio = ref('')
const email = ref('')
const password = ref('')

const closeHandler = () => {
    isShow.value = false
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
		+flex(column, $align-items: center, $gap: 32)
		background: #4C5454
		border-radius: 40px
		padding: 50px
		box-sizing: border-box
		transition: all 0.3s ease
		width: 600px
		height: 500px
		max-width: 600px
		max-height: 500px

		.submit
			+flex(row, center, center)
			width: 303px
			height: 74px
			border: none
			background-color: #FF715B
			color: #fff
			font-family: 'CascadiaCode'
			font-size: 36px
			border-radius: 13px
</style>