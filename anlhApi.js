var express = require('express')
let db = require('./demoFirebaseDB')

var router = express.Router()


// get all todos
router.get('/node/all', async (req, res) => {
    console.log(req);
    var data = await db.getAllData('users');
    console.log(data);
  res.status(200).send({
    success: 'true',
    message: 'Get all DB successfully',
    todos: data
  })
});
router.post('/node/add', (req, res) => {
    let body = req.body;
    console.log(body);
    //data.push(body);
    db.addData('users', body)
        res.status(200).send({
            success: 'true',
            message: 'Add successfully',
          });
     
  });
module.exports = router
