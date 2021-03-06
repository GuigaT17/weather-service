const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ3VpZ2F0MTciLCJhIjoiY2trb2F4eDR0MGJrazJwdG9kNmFlZm8xaSJ9.I5oMyw2lmwKoFUfNDGA_mA'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to Geocoding services!', undefined);
        } else if (body.features.length === 0){
            callback('Unable to find matching results!', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        } 
    });
}

module.exports = geocode;