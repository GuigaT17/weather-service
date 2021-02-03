const request = require('postman-request');

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fe8768a01cc0fc96a039f3a5d7b53fc2&query='+lat+','+lon;
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect with weather service!', undefined);
        } else if(body.error){
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.')
        }
    });
}

module.exports = forecast;