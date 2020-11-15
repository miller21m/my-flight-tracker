<template>
    <div>
        <div class="closeButton container" style="width: 15%; text-align: center; bottom:20px;" 
            @click="display = true" v-if="!display">
            Open Departure & Arrival
        </div>

    <div class="container" v-if="this.$store.getters.getIataCode && display">
        <div class="closeButton" @click="display = !display">X</div>
        <div class="appArrival">
            <app-arrival></app-arrival>
        </div>
        <div class="appDeparture">
            <app-departure></app-departure>
        </div>
                
                    
    </div>
    </div>
</template>

<script>
import Arrival from './arrival/ArrivalList'
import Departure from './departure/DepartureList'
export default {
    data(){
        return{
            display :true,
            data: this.$store.getters.getIataCode

        }
    },
    components:{
        appArrival: Arrival,
        appDeparture: Departure
    },
    watch:{
    data(){
        console.log('update');
        return this.display = true;
    }
        
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
}


.appDeparture{
    display: inline-block;
    width: 48%;
}

.closeButton{
    position:absolute;
    align-items:flex-end;
    right: 20px;
    color: white;
    border: 1px solid black;
    background: rgba(29, 53, 87, 0.8);
    -moz-border-radius: 35px;
    border-radius: 50px; 
    padding: 3px;
    margin: 5px;
}

.closeButton:hover{
    background: rgba(248, 248, 248, 0.8);
    color: goldenrod;
}
</style>