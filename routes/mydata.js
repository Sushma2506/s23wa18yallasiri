var express = require('express');
var router = express.Router();

/* GET my fact page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: "Yallasiri Sai Sushma"});
});

module.exports = router;
