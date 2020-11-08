<template>
    <div class="container" @click="searchLocation(location.place_name)">
        <div class="location-name">
            {{location.place_name}}
        </div> 
    </div>
</template>

<script>
export default {
    props:['location'],
    data(){
        return{
            code: null
        }
    },
    mounted(){
        
    },
    methods:{
        searchLocation(place_name){
            this.$store.dispatch('SearchLocaion', place_name);
            //console.log('From Location' + this.$store.getters.getSearchedLocation);
            //console.log(this.location.geometry.coordinates);//lat --[1]  lon ---[0]

            this.$store.dispatch('storeAirPortCode', this.location)
            this.$store.dispatch('getDepFlights')
        }
    }
    
}
</script>

<style scoped>
.container{

}


.location-name{
    text-align:start;
    font-size: 2vh;
    padding: 2px;
}

.container:hover{
     background-color:rgba(29, 53, 87, 0.9);
}
</style>