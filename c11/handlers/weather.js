const weather = require('../pkg/weather');

const getWeather = async (req, res) => {
    let data = await weather.getCityWeather(req.params.city);
    res.status(200).send(data);
};

module.exports = {
    getWeather
};