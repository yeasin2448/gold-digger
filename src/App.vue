<template>
	<div class="flex flex-col min-h-screen">
		<app-header class="flex-none" :title="title" @titleOn="updateGold($event)"></app-header>
		<!-- <app-header></app-header>
		<app-golds></app-golds>
		<app-footer></app-footer>-->
		<router-view class="flex-1" />
		<app-footer class="flex-none" :title="title"></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import Golds from './components/Golds.vue'

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
		// 'app-golds': Golds
	},
	data() {
		return {
			title: 'Gold Digger'
		}
	},
	methods: {
		updateGold(newTitle) {
			this.title = newTitle
		},
		// updateGold: () => {
		// 	console.log('updateGold', this)
		// },
		// updateGold: function (data) {
		// 	console.log('updateGold', this, data)
		// 	// this.title = updatedGolds;
		// }
	}
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
