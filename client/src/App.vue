<template>
  <div class="container">
      <app-map></app-map>
      <search-bar></search-bar>
      <dep-and-arr></dep-and-arr>
  </div>
</template>


<script>
import MainMap from './components/map/MainMap'
import SearchBar from './components/searchBar/SearchBar'
import DepAndArr from './components/departure_ arrival/DepAndArr'
export default {
  components:{
    appMap: MainMap,
    searchBar: SearchBar,
    depAndArr: DepAndArr
  }
  
}
</script>


<style scoped>

</style>