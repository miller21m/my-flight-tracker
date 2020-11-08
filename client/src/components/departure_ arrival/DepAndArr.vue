<template>
    <div class="container">
        <div class="appArrival">
            <app-arrival></app-arrival>
        </div>
        <div class="appDeparture">
            <app-departure></app-departure>
        </div>
                
                    
    </div>
</template>

<script>
import Arrival from './Arrival'
import Departure from './Departure'
export default {
    components:{
        appArrival: Arrival,
        appDeparture: Departure
    }
    
}
</script>


<style scoped>
.container {
    position: relative;
    /* display: inline-block; */
    flex-wrap: wrap;
    align-items: center;
  z-index: 100;
  /* bottom: 33.33%; */
  width: 33.33%;
  /* right: 2px; */
}

.appArrival{
    display: inline-block;
    width: 48%;
    background: rgba(255, 255, 255, 0.7);
    margin: 4px;
}


.appDeparture{
    display: inline-block;
    width: 48%;
    background: rgba(255, 255, 255, 0.7);
    
}
</style>