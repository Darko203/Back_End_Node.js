var express = require('express');
const { get } = require('../app');
var router = express.Router();
let people = require('../real-estate-data')
/* GET home page. */
router
.get('/people', function(req, res) {
  res.send({
    message:"All people registered on the platform",
    items: people
    
  })
})
.get('/people/:id', (req, res)=>{
let message =`Here is the person with id #${req.params.id}`
  const person = people.find(person=>{
    return person.id == req.params.id
  })

  if(!person){
    `there is no person with id #${req.params.id}`
  }
  res.send({
    message:message,
    item: person 
    })
}) 
.post('/people', (req, res)=>{
  // const person ={
  //   id: people.length+1,
  //   name:req.body.name,
  //   address:req.body.address,
  //   dateOfBirth:req.body.dateOfBirth
  // };



  people.push({
    id: people.length+1,
    ...req.body
  });


  res.send({
    message:"New person added to the database",
    items: people
})
})
.delete('/people/:id', (req, res)=>{
   people = people.filter(person=>{
    return person.id != req.params.id
  })
      
  res.send({
    message:`Person with id #${req.params.id} is now removed`,
    items: people 
    })

})
module.exports = router;
