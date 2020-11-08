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

module.exports = flight