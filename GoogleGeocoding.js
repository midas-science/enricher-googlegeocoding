"use strict";
var GoogleGeocoding = class GoogleGeocoding {
	
  constructor(rp, data, config) {
    this.data = data;
    this.rp = rp;
    this.config = config;
  }

  getConfig() {
    return this.config;
  }

  getName() {
    return 'Google Geocoding';
  }

  setData(data) {
    this.data = data;
  }

  process(data) {    

    if(typeof data != 'undefined' && data != null) {
      this.data = data;
    }  

    let req_url = 'https://maps.googleapis.com/maps/api/geocode/json';
    let options = {
      uri: req_url, 
      qs: {
          address: data,
          key: this.config.api_key
      },
      headers: {
        'User-Agent': 'midas'
      },
      json: true // Automatically parses the JSON string in the response
    };
    return this.rp(options).then((result) => {
      let _result = [];
      try {
        _result = {
          lng: result.results[0].geometry.location.lng,
          lat: result.results[0].geometry.location.lat
        }
      } catch(e) {
        _result = {
          street: data,
          lng: null,
          lat: null
        }
      }

      return Promise.resolve(_result);
    }).catch((err) => {
      return Promise.resolve('ERROR_NO_RESULT');
    });
  }
};

module.exports.GoogleGeocoding = GoogleGeocoding;