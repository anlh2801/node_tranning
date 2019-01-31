const bodyParser = require('body-parser')
const express = require("express");
const err = require('./ErorrUtil')
const tools = require('./Tools')
const uuid= require("uuid")
// Set up the express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

function auth(logInfo){
  return function(req, res, next){
    try{
      console.log(logInfo)
      console.log("Client tocken: " + req.headers.tocken + " ===== " + "Server tocken: " + tools.getToken())
      if (req.headers.tocken == tools.getToken()){
        console.log("Auth");
        //throw "ABC"
        next();
      }
      else {
        throw new err.Unauthorized("Unauthorized here")
      }
    }
    catch(ex){
      let error = null
      const uid = uuid()
      if(ex instanceof err.HttpError){
        error = ex
      }
      else{
        error = new err.InternalServerError(`Unexpected Exception, please look at the log id ${uid}`)
        console.log(`ErrorId: ${uid}, info: ${ex}`)
      }
      res.status(error.code).send({message: error.message, stack: error.stack})
    }
  }
}

app.use(auth("I am loging"))

let router = require('./UserApi')
app.use('/router', router)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
