var express = require('express');
var router = express.Router();
var YamahaAPI = require('yamaha-nodejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/action', function(req, res, next) {

  var yamaha = new YamahaAPI("66.214.18.129");

  // yamaha.getAvailableInputs().then(function(inputs){
  //   console.log(inputs)
  // });

  yamaha.powerOn().then(function(){
    console.log("powerOn");
      yamaha.setMainInputTo("AUDIO1");

  });

  res.status(200).send("ok");
});

module.exports = router;
