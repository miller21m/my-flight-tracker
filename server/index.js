const express = require('express')
const getcode = require('./src/utils/geocode')
const airportsCode = require('./src/utils/airportsCode')
const flight = require('./src/utils/flights')

const app = express()
const port = process.env.PORT || 3000


// app.get('/activeFlights', (req,res)=>{
//     flight((error,{allflights}={})=>{
//         if(error){
//             return res.send({error})
//         }

//         res.send({allflights})
//     })
// })


app.get('/location', (req,res)=>{
    console.log(req.query.address);
    console.log(req.query.limit);
    if(!req.query.address){
        return res.send({
            error:'You must enter address!'
        })
    }

    getcode(req.query.address, req.query.limit , (error, {latitude ,longtitude ,location, options}={})=>{
        if(error){
            return res.send({error})
        }

        res.send({
            latitude,
            longtitude,
            location,
            options
            
        })
    })
})


app.get('/airportsCode', (req,res)=>{
    console.log(req.query);
    airportsCode(req.query.lat, req.query.lng ,(error, {airports}={})=>{
        if(error){
            return res.send({error})
        }

        res.send({
            airports
        })
    })
})


app.listen(port, ()=>{
    console.log('Server is up on port ' + port);
})