<template>
  <div id="golds">
    <ul>
      <li v-for="gold in golds" v-bind:key="gold.name" v-on:click="gold.show = !gold.show">
        <h3>{{ gold.name }}</h3>
        <h4 v-if="gold.show">{{ gold.speciality }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
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
