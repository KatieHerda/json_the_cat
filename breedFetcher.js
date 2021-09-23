const request = require('request');
//https://api.thecatapi.com/v1/breeds/search?q=
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callBack) => {

  //response is just a placeholder, not needed.
  request(`${URL}${breedName}`, (error, response, body) => {
    //edge case: breed not found
    if (body === '[]') {
      callBack(null, 'Breed not found. Try again.');
      return;
    }
    //edge case: request failed - ie. broken URL
    if (error) {
      callBack(error, null);
      return;
    }
  
    //console.log('error:', error);
    //console.log('statusCode:', response && response.statusCode); //=>200
    //console.log('body:', body); //=>difficult to read as string
    //console.log(typeof body); //=>string
  
    const data = JSON.parse(body); //convert JSON string into object
    //console.log(data); //=> data in form of object
    //console.log(typeof data); //=>object
    
    const breedInfo = data[0];
    // callBack(null, breedInfo.description);
    
    if (breedInfo) {
      callBack(null, breedInfo.description);
    } else {
      callBack('Breed Not Found');
    }
    
    //Access the first entry in the data array and print description.
    //console.log("data[0] : ", data[0].weight);
  });
};

module.exports = { fetchBreedDescription };



