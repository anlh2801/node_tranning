//Using https lib
const https = require('https');

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   let data = '';
//     let i = 0;
//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(typeof data);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });

// Using request lib
// const request = require('request');

// request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });

getData('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(data => console.log(data)).catch(err => console.log(err));
function getData(url){
    return new Promise( (resolve, reject) => {
        https.get(url, (resp) => {
            let data = '';
            
            resp.on('data', (chunk) => {
                data += chunk;
            });

            
            resp.on('end', () => {
                //console.log(typeof data);
                resolve(data);
            });

            }).on("error", (err) => {
                reject(err);
            });
    });
}