<template>
    <div class="card">
        <div class="container">
            <h5>
                <b class="tag">Destination</b> <br>{{this.flight.departure.airport}}<hr>
                <b class="tag">Flight number</b> {{this.flight.flight.number}}<br><br>
                <b class="tag">Airline</b> {{this.flight.airline.name}}<br><br>
                <b class="tag">Arrival time</b> {{this.flight.arrival.scheduled}}
            </h5>
        </div>
    </div>
</template>

<script>
export default {
    props:['flight']
    
}
</script>


<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.9);
  transition: 0.3s;
  border-radius: 3%;
  margin: 1% 5%;
  background:rgba(255, 255, 255, 0.7);
    -moz-border-radius: 35px;
    border-radius: 35px;  
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  
}


.tag{
    border: 1px solid black;
    word-wrap:break-word;
    background: #1d3557;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    padding: 1px 3px;
    -moz-border-radius: 35px;
    border-radius: 35px;  
}

h5{
    font-family: Arial, Helvetica, sans-serif;
}

</style>

