<template>
	<div class="Home">
		<h4>This is Home component</h4>
		<Golds />
	</div>
</template>

<script>
import Golds from '../components/Golds.vue'
export default {
	name: 'Home',
	components: {
		Golds
	}
}
</script>