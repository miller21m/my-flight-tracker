const express = require('express')
const getcode = require('./src/utils/geocode')
const airportsCode = require('./src/utils/airportsCode')
const flight = require('./src/utils/flights.js')

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

const port = process.env.PORT || 3000
//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));



app.get('/activeFlights', (req,res)=>{
    flight.flight((error,{allflights}={})=>{
        if(error){
            return res.send({error})
        }

        res.send({allflights})
    })
})


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
    //console.log(req.query);
    airportsCode(req.query.lat, req.query.lng ,(error, {airports}={})=>{
        if(error){
            return res.send({error})
        }

        res.send({
            airports
        })
    })
})

app.get('/depart', (req,res)=>{
    //console.log('check: '+req.query.iataCode);
    flight.departure(req.query.iataCode, (error, {allDepartureFlights}={})=>{
        if(error){
            return res.send({error})
        }
        // console.log(allDepartureFlights);
        res.send(allDepartureFlights)
    })
})

app.get('/arrival', (req, res)=>{
    flight.arrival(req.query.iataCode, (error, {allArrivalFlights}={})=>{
        if(error){
            return res.send({error})
        }
        res.send(allArrivalFlights)
    })
})



//Handle production
if(process.env.NODE_ENV === 'production'){
    //Static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req, res)=>res.sendFile(__dirname + '/public/index.html'));
}



app.listen(port, ()=>{
    console.log('Server is up on port ' + port);
})