import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);


export default new Vuex.Store({
    state:{

        map: undefined,//The main map for the main screen
        imageSrc: '<img src="./public/airplane.png">',
        optionForPlaces: undefined,
        searchedLocation: null,
        iataCode: null,
        allDepFlights: null,
        allArrivFlights: null

    },
    mutations:{

        storeMainMap(state, data){
            state.map = data;
            //console.log(data);
        },
        storeOptionForPlaces(state, data){
          //console.log(data);
          state.optionForPlaces = data
        },
        storeSearchedLocation(state, data){
          state.searchedLocation = data
        },
        storeIataCode(state, data){
          state.iataCode = data;
          //console.log(data);
        },
        storeDep(state,data){
          state.allDepFlights = data;
        },
        storeArrivel(state, data){
          state.allArrivFlights = data
        }

    },
    actions:{

      //------------------Loading the map when the user is loading the app------------------------
        loadMap({commit}){
              window.mapboxgl.accessToken = 'pk.eyJ1IjoibWlsbGVyMjEiLCJhIjoiY2tnZG56cWx6MGtxcjJxbzdkcHBwYXJwZiJ9.JmTuQgnwF_eqRexjWn32kw';
              
              //Geeting the current location of the user when loding the application
              window.navigator.geolocation.getCurrentPosition((res)=>{
                console.log(res.coords);

                const map = new window.mapboxgl.Map({
                  container: 'map',
                  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                  center: [res.coords.longitude ,res.coords.latitude], // starting position [lng, lat]
                  zoom: 4// starting zoom
                })

                new window.mapboxgl.Marker({color: 'red'  })
                .setLngLat([res.coords.longitude, res.coords.latitude])
                .addTo(map)


                //Featch all the live flights in real-time
                axios.get('/activeFlights')
                .then((res)=>{
                  //console.log(res.data.allflights.data);
                  const flights = res.data.allflights.data
                  const liveFlights =[]

                  //Save only the live flights with live != null
                  flights.forEach(flight => {
                  if(flight.live != null){
                    liveFlights.push(flight)
                  }
                  });

                  liveFlights.forEach(flight =>{
                    new window.mapboxgl.Marker({color:'blue'})
                    .setLngLat([flight.live.longitude , flight.live.latitude])
                    .addTo(map)
                  })

                  console.log(liveFlights);
                })
                .catch((error)=>{
                  console.log(error);
                })
            
                




                //Add find-my-current-location function 
                map.addControl(
                   new window.mapboxgl.GeolocateControl({
                  positionOptions: {
                  enableHighAccuracy: true
                  },
                  trackUserLocation: true
                }));
        
                //Storing the main map on the map state
                commit('storeMainMap', map)
              })
          },
          //----------------------------------------------------------//


          //---------------Search the location term----------------------------
          SearchLocaion({commit},locationName){
            //Featch data from /location?address=_the_term
            axios.get('/location',{
              params:{
                address: locationName,
                limit:1
              }
            })
            .then((res)=>{
              console.log(res);

              //Loading the map from mapboxgl
              const map = new window.mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [res.data.longtitude, res.data.latitude],
                zoom: 10})

                //Create a marker for the location the user searching for
                new window.mapboxgl.Marker()
                .setLngLat([res.data.longtitude, res.data.latitude])
                .addTo(map)

                //adding a control to return the current location of the user
                map.addControl(
                  new window.mapboxgl.GeolocateControl({
                 positionOptions: {
                 enableHighAccuracy: true
                 },
                 trackUserLocation: true
               }));
              commit('storeSearchedLocation', res)
            })
            .catch((error)=>{
              console.log(error);
            })
          },
          //----------------------------------------------------------//

          //-------Search options for locations ------------------//
          locationOptions({commit}, term){
            console.log(term);
            axios.get('/location',{
              params:{
                address: term,
                limit:5
              }
            })
            .then((res)=>{
              //console.log(res.data.options);
              commit('storeOptionForPlaces', res.data.options)
            })
            .catch((error)=>{
              console.log(error);
            })
          },

          //--------Getting the Iata code of the airport----------//
          async storeAirPortCode({commit}, location){
                        //GETTING THE CODE OF THE SELECTED AIR-PORT --> in the client filder airportsCode
                        axios.get('/airportsCode',{
                          params:{
                              lat:location.geometry.coordinates[1],
                              lng:location.geometry.coordinates[0]
                          }
                      })
                      .then((res)=>{
                          //console.log(res.data.airports.response[0].code);//The code of the selected airport
                          let code = res.data.airports.response[0].code;
                           commit('storeIataCode', code);

                          // get all the departure flights 
                          axios.get('/depart', {
                            params:{
                              iataCode: code
                            }
                          })
                          .then((res)=>{
                            //console.log(res.data.data);
                             commit('storeDep', res.data.data)
                          })
                          .catch((error)=>{
                            console.log(error);
                          })
                          //----End get all departure flights---//

                          axios.get('/arrival', {
                            params:{
                              iataCode:code
                            }
                          })
                          .then((res)=>{
                            //console.log(res.data.data);
                            commit('storeArrivel', res.data.data)
                          })
                          .catch((error)=>{
                            console.log(error);
                          })

                      })
                      .catch((error)=>{
                          console.log(error);
                      })
          }
          //----------------------------------------------------------//

    },
    getters:{
        getMainMap(state){
            return state.map
        },
        getOptionsForPlaces(state){
          return state.optionForPlaces
        },
        getSearchedLocation(state){
          return state.searchedLocation
        },
        getIataCode(state){
          return state.iataCode
        },
        getStoreDep(state){
          return state.allDepFlights
        },
        getStoreArrivel(state){
          return state.allArrivFlights
        }

    }
})





// loadMap({commit}){
//   axios.get('/location', {
//     params:{
//       address: 'New-york'
//     }
//   })
//   .then(res =>{
//     console.log(res.data);        
//     window.mapboxgl.accessToken = 'pk.eyJ1IjoibWlsbGVyMjEiLCJhIjoiY2tnZG56cWx6MGtxcjJxbzdkcHBwYXJwZiJ9.JmTuQgnwF_eqRexjWn32kw';
    
//     const map = new window.mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
//     center: [res.data.longtitude ,res.data.latitude], // starting position [lng, lat]
//     zoom: 9// starting zoom
//   })

//   window.navigator.geolocation.getCurrentPosition((res)=>{
//     console.log(res.coords);
//   })
//   //Add find-my-current-location function 
//   map.addControl(
//      new window.mapboxgl.GeolocateControl({
//     positionOptions: {
//     enableHighAccuracy: true
//     },
//     trackUserLocation: true
//   }));


//   commit('storeMainMap', map)
//   })
//   .catch(error => console.log(error));
// }





// aircraft: null
// airline: {name: "Asiana Airlines", iata: "OZ", icao: "AAR"}
// arrival: {airport: "Almaty", timezone: "Asia/Almaty", iata: "ALA", icao: "UAAA", terminal: "2", …}
// departure: {airport: "Seoul (Incheon)", timezone: "Asia/Seoul", iata: "ICN", icao: "RKSI", terminal: "1", …}
// flight: {number: "6961", iata: "OZ6961", icao: "AAR6961", codeshared: {…}}
// flight_date: "2020-11-03"
// flight_status: "active"
// live: null