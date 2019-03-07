var express = require('express');
var router = express.Router();
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/tutorials', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/articles.html'));
}) ;

module.exports = router;
