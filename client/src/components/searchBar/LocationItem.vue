<template>
    <div class="container" @click="searchLocation(location.place_name)">
        <div class="location-name">
            {{location.place_name}}
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
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

            //GETTING THE CODE OF THE SELECTED AIR-PORT --> in the client filder airportsCode
            axios.get('/airportsCode',{
                params:{
                    lat:this.location.geometry.coordinates[1],
                    lng:this.location.geometry.coordinates[0]
                }
            })
            .then((res)=>{
                console.log(res.data.airports.response[0].code);//The code of the selected airport
            })
            .catch((error)=>{
                console.log(error);
            })
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