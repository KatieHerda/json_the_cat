const request = require('request');

const args = process.argv.slice(2); //command line arguments

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breedSearch = args[0];

request(`${URL}${breedSearch}`, (error, response, body) => {
  //edge case: breen not found
  if (body === '[]') {
    console.log('Breed not found. Try again.');
    return;
  }
  //edge case: request failed - ie. broken URL
  if (error) {
    console.error(error);
    return;
  }

  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); //=>200
  //console.log('body:', body); //=>difficult to read as string
  //console.log(typeof body); //=>string

  const data = JSON.parse(body); //convert JSON string into object
  console.log(data); //=> data in form of object
  console.log(typeof data); //=>object

  //Access the first entry in the data array and print description.
  //console.log("data[0] : ", data[0].weight);
});

