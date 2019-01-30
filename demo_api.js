const bodyParser = require('body-parser')
const express = require("express");
let err = require('./ErorrClass')
// Set up the express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    console.log("Client tocken: " + req.headers.tocken + " ===== " + "Server tocken" + getToken())
    
    if (req.headers.tocken == getToken()){
      console.log("Auth");
      next();
    }
    else {
      console.log("Non-Auth")
      err.sendRes(res, err.Unauthorized);
    }
  })

let router = require('./anlhApi')
app.use('/router', router)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

function getToken(){
  return Math.round(new Date().getTime() / (3*60*1000));
}