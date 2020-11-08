// Geocoding is the process of taking an address or name of a place and converting it into latitude and longitude values

const request = require('request')

const geocode = (address, limit ,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURI(address)+ ' airport' +'.json?access_token=pk.eyJ1IjoibWlsbGVyMjEiLCJhIjoiY2tnZG56cWx6MGtxcjJxbzdkcHBwYXJwZiJ9.JmTuQgnwF_eqRexjWn32kw&limit='+encodeURI(limit) 

    request({url, json:true}, (error, {body}={})=>{
        if(error){
            callback('Unable to connect to location service!', undefined)
        }else if(body.features.lenth === 0){
            callback('Unable to find location, try another search')
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name,
                options: body.features
            })
        }
    })
}

module.exports = geocode