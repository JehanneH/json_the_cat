const request = require('request');
const input = process.argv.slice(2);
const catType = input[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catType}`, (error, response, body) => {
  if (error) {
    return console.log('Request Failed');
  }
  
  const data = JSON.parse(body);
  const breed = body;
  
  if (breed) {
    console.log(`Description of ${catType}:`, data[0].description);
  } else {
    console.log('Breed Not Found');
  }
});

