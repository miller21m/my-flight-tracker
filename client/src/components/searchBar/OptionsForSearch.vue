<template>
    <div class="container" v-if="display" v-show="display" @click="display = !display">
        <app-location 
        class="try" 
        v-for="item in places" 
        :key="item.id" 
        :location="item"></app-location>
    </div>
</template>

<script>
import LocationItem from './LocationItem'
export default {
    components:{
        appLocation : LocationItem  
    },
    props:['countryName'],
    data(){
        return{
            places: undefined,
            display: false
        }
    },
    watch:{
        countryName(){
            this.searchOptions()
        }  
    },
    methods:{
        searchOptions(){
            this.$store.dispatch('locationOptions', this.countryName)
            //console.log(this.$store.getters.getOptionsForPlaces);
            this.places = this.$store.getters.getOptionsForPlaces

            if(this.countryName.length != 0){
                this.display=true
            }else{
                  this.display= false
            }
        }
    }
}
</script>



<style scoped>
.container {
  display:inline-block;
  position:relative;
  z-index: 100;
  width: 100%;
}

.try{
    background-color:rgba(29, 53, 87, 0.5);
    display:flex;
    width: 33%;
    margin: 5px;
    padding: 2px;
    height: 7vh;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color:white;
    align-content: center;
}

</style>