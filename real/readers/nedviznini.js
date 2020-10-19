 var faker = require('faker');
//  console.log(`${faker.address.streetAddress()}, ${faker.address.county()}`)
 const data = [];
 for(let i =0; i<=100; i++){
   data.push({
     id:faker.random.uuid(),
     address: `${faker.address.streetAddress()}, ${faker.address.county()}`,
     ares: faker.random.number(),
     owner: `${faker.name.firstName()} ${faker.name.lastName()}`,
     privatizedOn: faker.date.past()
   })
 }
 console.log(data);
 module.exports = data