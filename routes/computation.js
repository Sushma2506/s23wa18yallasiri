var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   
  if (Object.keys(req.query).length === 0) {
    x = Math.log2(Math.random());
        y = Math.cosh(Math.random());
        z = Math.floor(Math.random());
        res.render('computation', {
            log: `Math.log2() applied to ${Math.random()} is ${x}`,
            cosh: `Math.cosh() applied to ${Math.random()} is ${y}`,
            floor: `Math.floor() applied to ${Math.random()} is ${z}`
        });
  }
  else{

    for (let x in req.query) {

      console.log(x)

      res.render('computation', {
        log: `Math.log2() applied to ${Math.random()} is ${Math.log2(x)}`,
        cosh: `Math.cosh() applied to ${Math.random()} is ${Math.cosh(x)}`,
        floor: `Math.floor() applied to ${Math.random()} is ${Math.floor(x)}`});

    }
  }


});


module.exports = router;

