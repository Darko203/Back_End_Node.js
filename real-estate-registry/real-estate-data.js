 var faker = require('faker');
 var moment = require('moment')
//  console.log(`${faker.address.streetAddress()}, ${faker.address.county()}`)
 const data = [];
 for(let i =0; i<=8; i++){
   data.push({
     id:faker.random.uuid().slice(0, 18),
     address: `${faker.address.streetAddress()}, ${faker.address.county()}`,
     area: faker.random.number(),
     owner: `${faker.name.firstName()} ${faker.name.lastName()}`,
     privatizedOn: moment(faker.date.past()).format("MMM Do YY")
     
   })
 }
 
 module.exports = data