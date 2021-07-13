<template>
    <div id="bCard">
        <div class="shadow-lg rounded-lg overflow-hidden">
            <div>
                <img :src="card.img" class="w-full" alt="" />
            </div>
            <div class="p-3">
                <h4 class="m-0 pb-2 text-lg font-bold">{{ card.title }}</h4>
                <p class="text-sm">{{ card.des }}</p>
            </div>
            <div class="border-t-2 p-3">
                <Button v-on:click="deleteCard">Delete</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    props: {
        card : {
            type: Object,
            required: true
        }
    },
    methods: {
        // deleteCard: function () {
            
        // }
    }
    
}
</script>