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
    display: inline-block;
  z-index: 100;
  /* bottom: 33.33%; */
  width: 33.33%;
  /* right: 2px; */
  border: 1px solid red;
}

.appArrival{
    display: inline-block;
    width: 50%;
}


.appDeparture{
    display: inline-block;
    width: 50%;
}
</style>