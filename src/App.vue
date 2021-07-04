<template>
	<div class="flex flex-col min-h-screen">
		<app-header class="flex-none"></app-header>
		<!-- <app-header></app-header>
		<app-golds></app-golds>
		<app-footer></app-footer>-->
		<router-view class="flex-1" />
		<app-footer class="flex-none"></app-footer>
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

		}
	},
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
