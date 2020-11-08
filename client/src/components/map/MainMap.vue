<template>
    <div id='map' >
      
    </div>
</template>

<script>
//import axios from 'axios'
export default {
  data(){
    return{
      map: undefined
    }
  },
  methods:{
    loadMap(){
        this.$store.dispatch('loadMap');
    }
},
mounted(){
  //this.loadMap();
  this.loadMap()

  }
}
</script>


<style scoped>

#map {
    position:absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
</style>