<template>
    <div class="container">
            <form @submit.prevent="searchLocation">
            <input class="search-bar" 
            type="text" 
            v-model="search" 
            placeholder="Search Airport by country">
            </form>
            <app-options :countryName="search"></app-options>
    </div>
</template>


<script>
import OptionsForSearch from './OptionsForSearch'
export default {
    components:{
        appOptions: OptionsForSearch
    },
    data(){
        return{
            search: null
        }
    },
    methods:{
        searchLocation(){
            this.$store.dispatch('SearchLocaion', this.search)
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

.search-bar{
    width: 33.33%; 
    height:4vh;
    -moz-border-radius: 35px;
    border-radius: 35px;    
}
</style>