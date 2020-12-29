const fetch = require('node-fetch');

const API_KEY = '87df752ff544d906183cc03f17b4c9fc';
const UNITS = 'metric';
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

const cityMaps = {
    'sk': 'skopje',
    'bt': 'bitola',
    'oh': 'ohrid',
    'te': 'tetovo',
    'ku': 'kumanovo',
    'ge': 'gevgelija'
};

let cache = {};

const getCityWeather = async (city) => { // SK, Sk, sK, sk -> sk
    city = cityMaps[city.toLowerCase()];

    if (cache[city] && (new Date().getTime()) - cache[city].timestamp < 60000) {
        return cache[city].data;
    }

    let url = `${API_ENDPOINT}?appid=${API_KEY}&units=${UNITS}&q=${city}`;
    console.log(url);
    try {
        let data = await fetch(url);
        data = await data.json();

        cache[city] = {
            timestamp: new Date().getTime(),
            data
        };

        return data;
    } catch(err) {
        console.log(err);
    }
};

module.exports = {
    getCityWeather
};