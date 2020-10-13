// // 1. file-based modules
const nizi = require("./app");
let niza2 = [
  { name: "Vlatko", surName: "Milisavov", hobbies: "Swiming" },
  { name: "Marko", surName: "Markovski", hobbies: "Guitar" },
  { name: "Lazar", surName: "Lazarovski", hobbies: "Football" },
];
let niza3 = [
  { name: "Rajko", surName: "Milisavov", hobbies: "Swiming" },
  { name: "Marko", surName: "Markovski", hobbies: "Guitar" },
  { name: "Lazar", surName: "Lazarovski", hobbies: "Football" },
];
nizi.iminja(niza2);
nizi.iminja(niza3);

// 2. file-based modules
const ages = require("./app");
let niza4 = [
  { name: "Darko", surName: "Milisavov", hobbies: "Swiming", age: 50 },
  { name: "Marko", surName: "Markovski", hobbies: "Guitar", age: 30 },
  { name: "Lazar", surName: "Lazarovski", hobbies: "Football", age: 18 },
];
let niza5 = [
  { name: "Branko", surName: "Milisavov", hobbies: "Swiming", age: 60 },
  { name: "Marko", surName: "Markovski", hobbies: "Guitar", age: 31 },
  { name: "Laki", surName: "Lazarovski", hobbies: "Football", age: 23 },
];
ages.averageAge(niza4);
ages.averageAge(niza5);

// 3. file-based modules
const number = require("./app");
console.log(number.number);
