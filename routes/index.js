var express = require('express');
var router = express.Router();
var YamahaAPI = require('yamaha-nodejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/action', function(req, res, next) {
  
  
  res.status(200).send("ok");
});

module.exports = router;
