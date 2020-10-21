var express = require('express');
const data = require('../real-estate-data');
var router = express.Router();

const realEstateProperties = require('../real-estate-data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Real Estate Data', subtitle:'Domasna Rabota', realEstateProperties: data });
});

module.exports = router;
