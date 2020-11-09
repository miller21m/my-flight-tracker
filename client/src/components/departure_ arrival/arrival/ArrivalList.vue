<template>
    <div>
        <div>
          <h4 class="title">Arrival</h4>
        </div>
        <div class="container">
            <arrival-item v-for="arrive in this.$store.getters.getStoreArrivel" :key="arrive.length" :flight="arrive"></arrival-item>
        </div>
    </div>
</template>

<script>
import ArrivalItem from './ArrivalItem'
export default {
    components:{
        arrivalItem: ArrivalItem
    }
    
}
</script>


<style scoped>
.container{
    width: 100%;
    height: 200px;
    overflow-y: scroll;
    overflow-x:hidden;
    /* border: 1px solid black; */
}

.scrollable-element {
  scrollbar-color: red yellow;
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