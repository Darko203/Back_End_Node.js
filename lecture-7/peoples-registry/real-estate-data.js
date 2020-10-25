 var faker = require('faker');
 var moment = require('moment')
//  console.log(`${faker.address.streetAddress()}, ${faker.address.county()}`)
 const data = [];
 for(let i =0; i<=8; i++){
   data.push({
     id:i+1,
     name: `${faker.name.firstName()} ${faker.name.lastName()}`,
     address: `${faker.address.streetAddress()}, ${faker.address.county()}`,
     dateOfBirth: moment(faker.date.past()).format("MMM Do YY")
     
   })
 }
 
 module.exports = data