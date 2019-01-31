const express = require('express')
const service = require('./UserService')
const err = require('./ErorrUtil')
const tools = require('./Tools')

var router = express.Router()

router.get('/node/all', async (req, res) => {
  try{
    var data = await service.getAllData('users');
    tools.sendResOK({
      success: 'true',
      message: 'Get all DB successfully',
      users: data
    })
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
    
});
router.post('/node/add', (req, res) => {
  service.addData('users', req.body)
          tools.sendResOK({
            success: 'true',
            message: 'Add successfully',
          });
     
  });
module.exports = router
