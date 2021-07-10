<template>
	<div class="container mx-auto py-12 flex flex-col">
		<div class="flex space-x-4 justify-center items-center flex-1">

			<Button to="/">Normal Button</Button>
			<Button to="/">Normal Button</Button>

			<Button outlined to="/">I am outlined</Button>
			<Button rounded to="/">I am rounded</Button>
			<Button rounded outlined to="/">I am outlined rounded</Button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Components',
}
</script>