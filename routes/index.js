var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/links', function(req, res, next) {
  res.render('links', { title: 'Links' });
});

module.exports = router;
