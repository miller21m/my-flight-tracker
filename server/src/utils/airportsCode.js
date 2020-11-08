const request = require('request')

const airportsCode = (lat, lng , callback) =>{
    const url = 'http://airlabs.co/api/v6/nearby?api_key=d8b305b0-2019-4168-b5f5-9f49671fd0d2&lat='+ encodeURI(lat) +'&lng='+ encodeURI(lng) + '&distance=10'

    request({url, json:true}, (error, {body}={})=>{
        if(error){
            callback('Unable to connect to location service!', undefined)
        }else{
            callback(undefined, {
               airports: body
            })
        }
    })
}

module.exports = airportsCode