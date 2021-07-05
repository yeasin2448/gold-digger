<template>
  <div id="golds" class="text-center">
    <ul>
      <li v-for="gold in golds" v-bind:key="gold.name" v-on:click="gold.show = !gold.show">
        <h3>{{ gold.name }}</h3>
        <h4 v-if="gold.show">{{ gold.speciality }}</h4>
      </li>
    </ul>
    <button v-on:click="deleteGolds" class="bg-yellow-500 rounded p-2 text-yellow-50 font-semibold mt-4">Delete Gold</button>
  </div>
</template>

<script>
  export default {
    props : {
      golds : {
        type : Array,
        required : true
      }
    },
    data() {
      return {    
        
      }
    },
    methods: {
      deleteGolds: function () {
        this.golds.pop();
      }
    }
  }
</script>


<style scoped>
#golds{
    width: 100%;
    max-width: 1200px;
    margin: 65px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
