var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ msg: 'Way to GET json data!' });
});

router.post('/', function(req,res, next) {
  res.json({ msg: 'Posting json! You are the coolest!',
             yourMsg : req.body.msg });
});

module.exports = router;
