var express = require('express');
var router = express.Router();

/* GET home page. */
router
.get('/', (req, res)=> {
  res.render('index', { title: 'Domasna Rabota', subtitle:'Generacija 9' })
 })

 .get('/student', (req, res)=> {
  res.render('student', {title:'student', name:'Darko Milisavov'})
});

module.exports = router;
