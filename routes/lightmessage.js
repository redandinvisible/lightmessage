var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  let msg = req.query.message ? req.query.message : req.body.message;
  console.log('light up!' + msg);

  var Matrix = require("easybotics-rgb-led-matrix");
  led = new Matrix(32, 64, 1, 1, 100, "adafruit-hat"); //this might be different for you

  const input = "hello world!"; //wherever you get the input from
  console.log("dirname" + __dirname);
  const font  =  __dirname + '/fonts/' + "5x8.bdf";

  //should be a function that calculates the position based on timestamp
  //and increments the x position
  var x = 0;
  var y = 0;

  led.drawText(x, y, 255, 255, 255, input, font);
  led.update();
  while(true){};
  res.end();

  res.render('index', { last_message: req.query.message ? req.query.message : req.body.message });
  res.end();
});

module.exports = router;
