// // 1. file-based modules
// let niza1 = [
//   { name: "Darko", surName: "Milisavov", hobbies: "Swiming", age: 20 },
//   { name: "Marko", surName: "Markovski", hobbies: "Guitar", age: 30 },
//   { name: "Lazar", surName: "Lazarovski", hobbies: "Football", age: 18 },
// ];
// let niza2 = [
//   { name: "Branko", surName: "Milisavov", hobbies: "Swiming", age: 30 },
//   { name: "Marko", surName: "Markovski", hobbies: "Guitar", age: 31 },
//   { name: "Lazar", surName: "Lazarovski", hobbies: "Football", age: 23 },
// ];
// function iminja(niza1) {
//   niza1.forEach((names) => {
//     console.log(names.name);
//   });
// }
// iminja(niza1);
// iminja(niza2);

// module.exports = {
//   iminja: iminja,
// };

// // 2. file-based modules
// function averageAge(niza1) {
//   const averageAge = niza1.reduce((currentTotal, niza) => {
//     return currentTotal + niza.age / niza1.length;
//   }, 0);
//   console.log(Math.round(averageAge));
// }
// averageAge(niza2);

// module.exports = {
//   averageAge: averageAge,
// };

// 3. file-based modules
let numbers = [9, 2, 6, 4, 5, 4];
module.exports = {
  number: numbers,
  name: "Darko",
};
