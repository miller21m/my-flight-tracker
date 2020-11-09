<template>
    <div class="card">
        <div class="container">
            <h5>
                <b class="tag">Destination</b> <br>  {{depItem.arrival.airport}}<hr>
                <b class="tag">Flight number</b>{{depItem.flight.number}}<br><br>
                <b class="tag">Airline</b> {{depItem.airline.name}} <br><br>
                <b class="tag">Departure time</b> {{depItem.departure.scheduled}}
            </h5>
        </div>
    </div>
</template>

<script>
export default {
    props:['depItem'],
    created(){
    }
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





// aircraft: null
// airline:
// iata: "BZ"
// icao: "BBG"
// name: "Blue Bird Airways"
// __proto__: Object
// arrival:
// actual: null
// actual_runway: null
// airport: "Athens International Airport "Eleftherios Venizelos""
// baggage: null
// delay: null
// estimated: "2020-11-09T12:15:00+00:00"
// estimated_runway: null
// gate: null
// iata: "ATH"
// icao: "LGAV"
// scheduled: "2020-11-09T12:15:00+00:00"
// terminal: "1"
// timezone: "Europe/Athens"
// __proto__: Object
// departure:
// actual: null
// actual_runway: null
// airport: "Ben Gurion International"
// delay: null
// estimated: "2020-11-09T10:00:00+00:00"
// estimated_runway: null
// gate: null
// iata: "TLV"
// icao: "LLBG"
// scheduled: "2020-11-09T10:00:00+00:00"
// terminal: null
// timezone: "Asia/Jerusalem"
// __proto__: Object
// flight:
// codeshared: null
// iata: "BZ702"
// icao: "BBG702"
// number: "702"
// __proto__: Object
// flight_date: "2020-11-09"
// flight_status: "active"
// live: null
// __proto__: Object