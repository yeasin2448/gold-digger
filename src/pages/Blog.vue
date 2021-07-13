<template>
	<div class='Blog'>
		<h4 class="font-bold text-yellow-500 text-center mt-10">This is Blog component</h4>
		<div class="container m-auto px-10 py-10">
			<div class="grid md:grid-cols-3 lg:grid-cols-4 mt-14 gap-4">
				<Cards v-for="(card, cardIndex) in cards" :key="cardIndex" :card="card" />
			</div>
		</div>
	</div>
</template>

<script>
import Cards from '../components/Cards.vue'
export default {
	name:'Blog',
	components: {
		Cards
	},
	data () {
		return  {
			cards: [
				{
					title: 'Anik is our Teacher',
					img: require ('../assets/images/blog/01.jpg'),
					des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab sequi dicta nobis accusantium omnis.'
				},
				{
					title: 'Istique is Gold Digger',
					img: require ('../assets/images/blog/02.png'),
					des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab sequi dicta nobis accusantium omnis.'
				},
				{
					title: 'Asif is Top Digger',
					img: require ('../assets/images/blog/03.jpg'),
					des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab sequi dicta nobis accusantium omnis.'
				},
				{
					title: 'Yeasin is Top Digger',
					img: require ('../assets/images/blog/04.jpg'),
					des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab sequi dicta nobis accusantium omnis.'
				}
			]
		}
	}
}
</script>