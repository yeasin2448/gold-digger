<template>
	<div class="container mx-auto flex bg-gray-100 items-center justify-center">
		<form @submit.prevent="onSubmit" class="p-8 bg-white shadow-lg flex flex-col w-96 space-y-4">
			<div
				v-if="error"
				class="bg-red-500 text-white rounded px-4 py-2 text-sm text-center mb-4"
			>{{error}}</div>
			<input
				type="email"
				v-model="email"
				placeholder="Enter email address"
				class="border border-gray-500 px-4 py-2 w-full"
			/>
			<input
				type="password"
				v-model="password"
				placeholder="Enter your password"
				class="border border-gray-500 px-4 py-2 w-full"
			/>
			<button
				type="submit"
				class="px-8 py-2 rounded uppercase tracking-wide text-sm bg-red-500 text-white"
			>Login</button>
		</form>
	</div>
</template>

<script>

const users = [
	{
		email: 'admin@gmail.com',
		password: '12345678'
	},
	{
		email: 'user@gmail.com',
		password: '12345678'
	}
]

export default {
	name: 'Login',
	data: () => ({
		email: '',
		password: '',

		error: null
	}),
	methods: {
		onSubmit() {
			let user = users.find(user => {
				if (user.email === this.email && user.password === this.password) {
					return true
				}
				else false
			})
			if (user) {
				this.error = null
				this.$router.replace('/')
			}
			else {
				this.error = 'Invalid email or password'
			}
		}
	}
}
</script>