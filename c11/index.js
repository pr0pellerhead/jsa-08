// SDK -> "Software Development Kit" => библиотека наменета за работа со одредено API
const express = require('express');
const weather = require('./handlers/weather');

const api = express();

api.get('/api/v1/weather/:city', weather.getWeather);

api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('service started successfully on port 10000');
});



