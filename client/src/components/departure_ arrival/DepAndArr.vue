<template>
    <div class="container" v-if="this.$store.getters.getIataCode">
        <div class="appArrival">
            <app-arrival></app-arrival>
        </div>
        <div class="appDeparture">
            <app-departure></app-departure>
        </div>
                
                    
    </div>
</template>

<script>
import Arrival from './arrival/ArrivalList'
import Departure from './departure/DepartureList'
export default {
    data(){
        return{
            
        }
    },
    components:{
        appArrival: Arrival,
        appDeparture: Departure
    }
    
}
</script>


<style scoped>
.container {
    position:absolute;
    /* display: inline-block; */
    flex-wrap: wrap;
    align-items: center;
    z-index: 100;
    bottom:1px;
    width: 60%;
    right: 2px;
    background: rgba(29, 53, 87, 0.4);
    -moz-border-radius: 35px;
    border-radius: 35px; 
    margin: 4px; 
}

.appArrival{
    display: inline-block;
    width: 48%;
    /* background: rgba(255, 255, 255, 0.7); */
}


.appDeparture{
    display: inline-block;
    width: 48%;
    /* background: rgba(255, 255, 255, 0.7); */
    
}
</style>