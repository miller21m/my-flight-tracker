const request = require('request')

const flight = (callback) =>{
   const url= 'http://api.aviationstack.com/v1/flights?access_key=6a78bc2cff580d6ee0530871636cca06&flight_status=active'

   request({url, json:true}, (error, {body}={})=>{
       if(error){
           callback('Unable to connect to flights server', undefined)
       }else{
           callback(undefined, {
            allflights: body
           })
       }
   })
}

const departure = (iataCode ,callback) =>{
    console.log('In the function');
    const url = 'http://api.aviationstack.com/v1/flights?access_key=6a78bc2cff580d6ee0530871636cca06&dep_iata='+encodeURI(iataCode)+'&flight_status=scheduled'

    request({url, json:true}, (error, {body}={})=>{
        if(error){
            callback('Unable to patch data!', undefined)
        }else{
            callback(undefined,{
                allDepartureFlights: body
            })
        }
    })
}
module.exports = 
    {flight: flight,
    departure: departure}
