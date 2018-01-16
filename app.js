var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

router.get('/hooks/:id', function(req, res) {
    res.send(req.params);
});

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

router.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = router
