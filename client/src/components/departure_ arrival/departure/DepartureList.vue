<template>
<div>
    <div>
          <h4 class="title">Departure</h4>
    </div>
    
    <div class="container">
        <dep-item v-for="dep in this.$store.getters.getStoreDep" :key="dep.length" :depItem="dep"></dep-item>
    </div>
</div>
</template>

<script>
import DeparttureItem from './DepartureItem'
export default {
    components:{
        depItem: DeparttureItem
    },
    data(){
        return{
        departures: this.$store.getters.getStoreDep
        }
    }
}
</script>


<style scoped>
.container{
    width: 100%;
    height: 200px;
    overflow-y: scroll;
    overflow-x:hidden;
}


.title{
    text-align:center;
    border: 1px solid black;
    margin-bottom: 3px;
    background: gold;
    -moz-border-radius: 35px;
    border-radius: 35px; 
    font-size:large;
    font-family:Arial, Helvetica, sans-serif;
    width: 90%;
    margin-left: 3%;
    background: rgba(29, 53, 87, 0.8);
    color: white;
}

</style>