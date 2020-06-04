const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      callback('Request Failed', null);
    }
    
    const data = JSON.parse(body);

    if (data.length) {
      callback(null, data[0].description);
    } else {
      callback('Breed Not Found', null);
    }
  });
};

module.exports = { fetchBreedDescription };