<template>
	<header class="bg-red-600 p-5 flex justify-between">
		<h1 class="text-white text-xl font-bold">{{ title }}</h1>
		<ul class="flex space-x-3 items-center">
			<li v-for="menu in menus" :key="menu.name">
				<router-link :to="menu.link" class="text-gray-50">{{ menu.name }}</router-link>
			</li>
		</ul>
	</header>
</template>

<script>
export default {
	data() {
		return {
			title: 'Gold digger',
			menus: [
				{ name: 'Home', link: '/' },
				{ name: 'About', link: '/about' },
				{ name: 'Services', link: '/services' },
				{ name: 'Blog', link: '/blog' },
				{ name: 'Contact', link: '/contact' }
			]
		}
	}
}
</script>