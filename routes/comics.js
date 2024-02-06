var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var comics = ["Bloom into you", 
    "Los diarios de la boticaria", 
    "Los peces tropicales anhelan la nieve"
  ];
  res.render('comics', { title: 'Comics', comics : comics });
});

router.get('/new', function(req, res, next) {
  
  res.render('comics/new_comic', { title: 'New comic' });
});

module.exports = router;
