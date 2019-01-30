const bodyParser = require('body-parser')
const express = require("express");
let err = require('./ErorrUtil')
let tools = require('./Tools')
// Set up the express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    console.log("Client tocken: " + req.headers.tocken + " ===== " + "Server tocken: " + tools.getToken())
    
    if (req.headers.tocken == tools.getToken()){
      console.log("Auth");
      next();
    }
    else {
      console.log("Non-Auth")
      err.sendRes(res, err.Unauthorized);
    }
  })

let router = require('./UserApi')
app.use('/router', router)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

