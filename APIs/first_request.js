/* var request = require('request');

request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});  */


/* var request = require("request");
request ('https://www.google.com', function (error, response, body){
    if (error) {
        console.log("Something went wrong!");
        console.log(error);
    } else {
        if (response.statusCode == 200){
            //Things worked
            console.log(body);
        }
    }
}); */
const request = require('request');
//require('locus');
//pry = require('pryjs')

request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
 //   eval(locus);
 //   eval(pry.it)
    if (!error && response.statusCode == 200){
        const parsedData = JSON.parse(body);
        console.log(parsedData.name + ' lives in ' + parsedData.address.city );
    }

});