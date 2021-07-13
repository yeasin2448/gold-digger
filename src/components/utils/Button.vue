<template>
	<button
		:type="type"
		:class="{
			'bg-blue-500 text-white hover:bg-blue-700': !outlined,
			'bg-transparent br-blue-500 border border-blue-500 text-gray-800 hover:bg-blue-500 hover:text-white': outlined,
			'rounded-full':rounded
		}"
		@click="onClickButton"
		class="button flex items-center justify-center px-5 py-3"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		rounded: Boolean,
		outlined: Boolean,
		type: {
			type: String,
			default: 'button'
		},
		to: {
			default: false,
			type: [Boolean, String],
		}
	},
	methods: {
		onClickButton(event) {
			if (this.to) {
				return this.$router.push(this.to)
			}
			this.$emit('click', event)
		}
	}
}
</script>

<style lang='scss' scoped>
	
</style>