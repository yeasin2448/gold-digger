<template>
	<div class="Blog">
		<h4 class="font-bold text-yellow-500 text-center mt-10">This is Blog component</h4>
		<div class="container m-auto px-10 py-10">
			<div class="flex space-x-2">
				<Button :key="catIndex" v-for="(cat,catIndex) in categories" class="capitalize">{{cat}}</Button>
				<div class="flex-1 flex justify-end">
					<input type="text" placeholder="Filter" class="ml-auto border rouded px-2 border-black" />
				</div>
			</div>
			<div class="grid md:grid-cols-3 lg:grid-cols-4 mt-14 gap-4">
				<Cards
					:card="card"
					:key="cardIndex"
					@delete="onDeleteCard($event, cardIndex)"
					v-for="(card, cardIndex) in cards"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Cards from '../components/Cards.vue'
export default {
	name: 'Blog',
	components: {
		Cards
	},
	data() {
		return {
			categories: ['all', 'One', 'Two'],
			cards: [
				{
					id: 1,
					categoty: 'One',
					title: 'Anik is our Teacher',
					img: require('../assets/images/blog/01.jpg'),
					des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab sequi dicta nobis accusantium omnis.'
				},
				{
					id: 2,
					categoty: 'One',
					title: 'Istique is Gold Digger',
					img: require('../assets/images/blog/02.png'),
					des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab sequi dicta nobis accusantium omnis.'
				},
				{
					id: 3,
					categoty: 'Two',
					title: 'Asif is Top Digger',
					img: require('../assets/images/blog/03.jpg'),
					des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab sequi dicta nobis accusantium omnis.'
				},
				{
					id: 4,
					categoty: 'Two',
					title: 'Yeasin is Top Digger',
					img: require('../assets/images/blog/04.jpg'),
					des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab sequi dicta nobis accusantium omnis.'
				}
			]
		}
	},
	methods: {
		onDeleteCard(card,/*index*/) {
			// this.cards.splice(index, 1)

			// let index = this.cards.findIndex(c => c.id == card.id)
			// index !== -1 && this.cards.splice(index, 1)

			this.cards = this.cards.filter((c) => {
				return c.id !== card.id
			})
		}
	}
}
</script>