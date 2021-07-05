<template>
	<div class="Home">
		<h4 class="font-bold text-yellow-500 text-center mt-10">This is Home component</h4>
		<Golds v-bind:golds="golds" />
	</div>
</template>

<script>
import Golds from '../components/Golds.vue'
export default {
	name: 'Home',
	components: {
		Golds
	},
	data () {
		return {
			golds : [ 
				{name: 'Anik', speciality: 'Frontend Master', show: false},
				{name: 'Istiaque', speciality: 'Frontend developer', show: false},
				{name: 'Asif', speciality: 'Django developer', show: false},
				{name: 'Arman Vai', speciality: 'WordPress Master', show: false},
				{name: 'Ridwan', speciality: 'WordPress Devloper', show: false},
				{name: 'Yeasin', speciality: 'Web designer', show: false}
			]
		}
	}
}
</script>