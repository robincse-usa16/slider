// document.getElementById("root").innerHTML = "hello javacritp";
// var x = 10;
// var y = 20;
// var z = x + y;

// const { cloudfunctions } = require("googleapis/build/src/apis/cloudfunctions");

// const { cloudchannel } = require("googleapis/build/src/apis/cloudchannel");

// console.log(z);
// document.getElementById("root").innerHTML = z;

// var A = {
//   Name: "Robin",
//   age: 24,
//   City: "Dhaka",
// };
// document.getElementById("root").innerHTML =
//   A.Name + "<br>" + A.age + "<br>" + A.City;

// const person = {
//   name: "Robin",
//   age: 24,
//   city: "Dhaka",
// };
// const myArray = Object.values(person);
// document.getElementById("root").innerHTML =
//   person.name + "<br>" + person.age + "<br>" + person.city;

//-------object Data Type-------------

// var B = ["Dhaka", "Mirpur", "Gulsan"];

// document.getElementById("root").innerHTML = B;

//-------Array Data Type-------------

// var A = "Robin"; //string
// var B = 10; // number
// var C = true; // boolian
// var D;
// var E = null;

// document.getElementById("root").innerHTML =
//   typeof A +
//   "<br>" +
//   typeof B +
//   "<br>" +
//   typeof C +
//   "<br>" +
//   typeof D +
//   "<br>" +
//   typeof E;
// document.getElementById("root").innerHTML = B;
// document.getElementById("root").innerHTML = C;
// document.getElementById("root").innerHTML = D;

// ----------Primitive Data Type------------

// var a = 20;
// var b = 30;
// var c = a + b;
// document.getElementById("root").innerHTML = c;
// --------- Assignment Oparators--------

// --------- Java Script If and else --------

// var age = 11;
// var city = "Dhaka";

// if (age > 18 && city == "Dhaka") {
//   document.getElementById("root").innerHTML = "You Are Adult";
// } else {
//   document.getElementById("root").innerHTML = "You Are child";
// }

// var Marks = 90;
// if (Marks >= 80 && Marks <= 100) {
//   document.getElementById("root").innerHTML = "A+";
// } else if (Marks < 80 && Marks >= 70) {
//   document.getElementById("root").innerHTML = "A";
// } else if (Marks < 70 && Marks >= 60) {
//   document.getElementById("root").innerHTML = "A-";
// } else if (Marks < 60 && Marks >= 50) {
//   document.getElementById("root").innerHTML = "B";
// } else if (Marks < 50 && Marks >= 40) {
//   document.getElementById("root").innerHTML = "C";
// } else if (Marks < 40 && Marks >= 33) {
//   document.getElementById("root").innerHTML = "D";
// } else {
//   document.getElementById("root").innerHTML = "F";
// }

// -------------------Switch---------------------

// var Marks = 33;
// switch (true) {
//   case Marks <= 100 && Marks >= 80:
//     document.getElementById("root").innerHTML = "A+";
//     break;
//   case Marks < 80 && Marks >= 70:
//     document.getElementById("root").innerHTML = "A";
//     break;
//   case Marks < 70 && Marks >= 60:
//     document.getElementById("root").innerHTML = "A-";
//     break;
//   case Marks < 60 && Marks >= 50:
//     document.getElementById("root").innerHTML = "B";
//     break;
//   case Marks < 50 && Marks >= 40:
//     document.getElementById("root").innerHTML = "C";
//     break;
//   case Marks < 40 && Marks >= 33:
//     document.getElementById("root").innerHTML = "D";
//     break;
//   default:
//     document.getElementById("root").innerHTML = "F";
// }

// -------------------for Loop---------------------

// var i;

// for (i = 0; i < 10; i = i + 1) {
//   if (i === 5) {
//     continue;
//   }
//   document.getElementById("root").innerHTML =
//     i + "<button>Submit</button> <br>";
// }
// var i;
// for (i = 0; i < 10; i = i + 1) {
//   if (i === 5) {
//     continue;
//   }
//   document.getElementById("root").innerHTML = i + "<button>Submit</button><br>";
// }
// var i;
// for (i = 0; i < 10; i = i + 1) {
//   if (i === 3) {
//     break;
//   }

//   document.getElementById("root").innerHTML =
//     i + "<button>For Loop</button><br>";
// }

// -------------------while Loop---------------------

// var i = 0;

// while (i < 3) {
//   document.getElementById("root").innerHTML =
//     i + "<button>For Loop</button><br>";
//   i = i + 1;
// }

// -------------------Do while Loop---------------------

// var i = 0;

// do {
//   document.getElementById("root").innerHTML =
//     i + "<button>Do While Loop</button><br>";
//   i = i + 1;
// } while (i < 3);

// -------------------Function---------------------
// function addTwoNumber(num1, num2) {
//   var num3 = num1 + num2;
//   document.getElementById("root").innerHTML = num3 + "<br>";
// }
// addTwoNumber(10, 20);
// function MyRulls() {
//   num1 = 10;
//   num2 = 20;
//   num3 = num1 + num2;
//   document.getElementById("root").innerHTML = num3;
// }
// MyRulls();

// function myNumber(num2, num3) {
//   num1 = num2 + num3;
//   document.getElementById("root").innerHTML = num1 + "<br>";
// }
// myNumber(20, 40);
// myNumber(30, 40);
// myNumber(40, 40);

// function myFunction(age) {
//   if (age < 18) {
//     document.getElementById("root").innerHTML = "You are not adult";
//   } else {
//     document.getElementById("root").innerHTML = "you are Adult";
//   }
// }
// myFunction(18);
// function myFunction1() {
//   age = 10;
//   if (age < 18) {
//     document.getElementById("root").innerHTML = "you are Not Adult";
//   } else {
//     document.getElementById("root").innerHTML = "you are Adult";
//   }
// }

// myFunction1();

// function WriteMyName(name) {
//   document.getElementById("root").innerHTML = name + "<br>";
// }
// WriteMyName("Muzahidul Parvez");
// WriteMyName("Parvez");

// function addTwoNumber(n1, n2) {
//   return n1 + n2;
// }
// var newValue = addTwoNumber(2.4, 3.9) + 5;
// document.getElementById("root").innerHTML = newValue;
// function addTwoNumber() {
//   return "Robi";
// }
// var newValue = addTwoNumber() + "n";
// document.getElementById("root").innerHTML = newValue;

// function addTwoNumber(n1, n2) {
//   return n1 + n2;
// }
// var newValue = addTwoNumber(2, 3) + 5;

// document.getElementById("root").innerHTML = newValue;

// function myName() {
//   return "Robi";
// }

// var NewName = myName() + "n";
// document.getElementById("root").innerHTML = NewName;

// -------------------JavaScript Object ---------------------

// var myMac = {
//   brand: "MacMini",
//   screen: "25.6",
//   isMac: true,
//   ram: "4GB",
//   rom: "500GB",
//   isSSD: true,
//   procesor: "core i-5",
// };
// document.getElementById("root").innerHTML = myMac.brand;

// -------------------JavaScript Array ---------------------

// var category = [
//     "",
//     "",
//     "",
//     "",
//     "",
// ]

// const fruits = ["Banana", "Orange", "Apple", "Mango", "PainApple"];
// fruits.pop(fruits); // ses er array ta remove hoye jabe
// fruits.push("PianApple"); // ses ar array ar sathe jog kore dai
// fruits.shift(); //
// let a = fruits.shift();
// fruits.unshift("Lemon"); // frist a push kore
// console.log(fruits);
// delete fruits[0];

// fruits[2] = "Kiwi"; // lenth onujai e bose jabe
// fruits[0];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// fruits.splice(2, 2, "Lemon", "Kiwi");
// fruits.splice(0, 1);
// console.log(fruits);
// document.getElementById("root").innerHTML = fruits;

// const myGirls = ["Cecilie", "Lone", "Linus"];
// const myBoy = ["emil", "Tobias", "Linus"];
// const myHouse = ["Abbu", "Ammu", "Brother", "Me"];

// const myChildren = myGirls.concat(myBoy);
// const myFamily = myGirls.concat(myBoy, myHouse);
// const myFamilyMember = myHouse.concat("New Member");
// console.log(myFamily);
// console.log(myChildren);
// console.log(myGirls);
// console.log(myBoy);
// document.getElementById("root").innerHTML = myFamilyMember;
// document.getElementById("root").innerHTML = myChildren;
// document.getElementById("root").innerHTML = myFamily;
// const myHouse = ["Abbu", "Ammu", "Brother", "Me"];
// const otherMember = ["Mama", "nana", "nani"];

// const myFamily = myHouse.concat("New Member");
// const newMember = myHouse.concat(otherMember);
// console.log(myHouse);
// document.getElementById("root").innerHTML = newMember;
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// document.getElementById("root").innerHTML = citrus;
// const numberTop = [100, 90, 20, 40, 60, 200];
// const sortNumber = numberTop.sort();
// console.log(sortNumber);
// const citra = fruits.sort();
// console.log(citra);
// const points = [40, 100, 1, 5, 25, 1, 200];
// points.sort(function (a, b) {
//   return a - b;
// });
// document.getElementById("root").innerHTML = points;
// console.log(points);
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) {
//   return 0.5 - Math.random();
// });
// console.log(points);
// document.getElementById("root").innerHTML = points;

// const number = [100, 200, 1, 30, 40, 60, 1000, 3000];

// number.sort(function (a, b) {
//   return b - a;
// });
// document.getElementById("root").innerHTML = number;
// console.log(number);

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "BMW", year: 2001 },
//   { type: "Ford", year: 1999 },
// ];
// cars.sort(function (a, b) {
//   return a.year - b.year;
// });
// document.getElementById("root").innerHTML = cars;
// console.log(cars);

// const numbers = [45, 20, 39, 49, 59, 90];

// function myFunction(value, index, array) {
//   console.log(value);
//   console.log(index);
//   console.log(array);
//   console.log("-----------------");
// }
// document.getElementById("root").innerHTML = myFunction;

// numbers.forEach(myFunction);
// const numbers = [45, 20, 39, 49, 59, 90];

// function myFunction(value) {
//   return value * 2;
// }

// const newNumber = numbers.map(myFunction);
// console.log(newNumber);

// const numbers = [45, 20, 39, 49, 59, 90];

// function myFunction(value, index, array) {
//   return value > 10;
// }

// const newNumber = numbers.filter(myFunction);
// console.log(newNumber);

// const numbers = [45, 20, 39, 49, 59, 90];

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// const newNumbers = numbers.reduce(myFunction);
// console.log(newNumbers);

// const numbers = [45, 20, 39, 49, 59, 90];

// function myFunction(value, index, array) {
//   return value > 18;
// }
// const newNumber = numbers.find(myFunction);
// console.log(newNumber);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const keys = fruits.keys();

// console.log(keys);
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b);
// }
// console.log(sumSalaries(salaries));

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }

// console.log(sumSalaries(salaries));

// let robin = [2, 3, 4, 5, 6, 7, 8];
// robin.forEach(myFunction);

// function myFunction(x) {
//   console.log(x);
// }

// let pavel = [22, 3, 4, 345, 453, 323];
// pavel.forEach((x) => {
//   console.log(x);
// });
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries));

// function sumSalaries() {
//   return Object.values(salaries).reduce((a, b) => a + b);
// }
// document.getElementById("root").innerHTML = sumSalaries(salaries);
// console.log(sumSalaries(salaries));

// let schoolStudent = {
//   oneClass: 30,
//   twoClass: 40,
//   threeClass: 60,
//   fourClass: 70,
//   fiveClass: 89,
// };

// function sumStudent() {
//   return Object.values(schoolStudent).reduce((a, b) => a + b);
// }
// console.log(sumStudent(sumStudent));
// document.getElementById("root").innerHTML = sumStudent(schoolStudent);

// let user = {
//   name: "John",
//   age: 30,
// };

// function count(obj) {
//   return Object.keys(obj).length;
// }
// console.log(count(user));

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const big5 = numbers.filter((num) => num > 5);
// console.log(big5);

// const myNum = numbers
//   .map((num) => num + 5)
//   .map((num) => num * 5)
//   .filter((num) => num >= 50);

// document.getElementById("root").innerHTML = myNum;
// console.log(myNum);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const toTal = numbers.reduce((acc, curalue) => acc + curalue, 0);

// console.log(toTal);

// const product = [
//   {
//     name: "alu",
//     price: 20,
//   },
//   {
//     name: "tometo",
//     price: 60,
//   },
//   {
//     name:
// "fulkopi",
//     price: 70,
//   },
//   {
//     name: "deros",
//     price: 40,
//   },
//   {
//     name: "peyaj",
//     price: 70,
//   },
// ];

// const totalPrice = product.reduce((acc, curent) => acc + curent.price, 0);

// const totalProduct = product.concat((key) => key(product));

// const totalProduct = product.forEach(function (totalProductAll) {
//   console.log(totalProductAll.name);
//   document.getElementById("root").innerHTML = totalProductAll.name;
// });

// document.getElementById("root").innerHTML = "totalProduct:" + totalProduct;
// document.getElementById("root").innerHTML = "totalPrice:" + totalPrice;

// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years: age, isAdmin = false } = user;
// document.getElementById("root").innerHTML = `${user.name}`;
// alert(name);
// alert(age);
// alert(isAdmin);
// let user = {
//   name: "robin",
//   year: 23,
// };

// for (let value of Object.values(user)) {
//   document.getElementById("root").innerHTML = value;
//   console.log(value);
// }

// let user1 = {
//   name: "Robin",
//   age: 23,
//   income: 1200,
//   properti: "dhaka, mymonsing",
// };

// for (let userInfo of Object.keys(user1)) {
//   console.log(userInfo);
//   document.getElementById("root").innerHTML = userInfo;
// }

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
//   { id: 4, name: "John" },
// ];

// let user = users.find((item) => item.id == 1);
// console.log(user);

// let user = users.findIndex(user.name == "John");
// console.log(user);

// let user1 = users.find((user1) => user1.name == "John");
// console.log(user1);

// let user = users.findIndex((user) => user.name == "Pete");
// console.log(user);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0);
// }
// console.log(sumSalaries(salaries));

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries));

// function totalIncome(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0);
// }
// console.log(totalIncome(salaries));

// const items = [
//   { name: "Bike", price: 100 },
//   { name: "Tv", price: 200 },
//   { name: "Album", price: 10 },
//   { name: "Book", price: 5 },
//   { name: "Phone", price: 500 },
//   { name: "Computer", price: 1000 },
//   { name: "Keyboard", price: 25 },
// ];

// const itemNumeber = [1, 2, 3, 4, 5];

// const includesTwo = itemNumeber.includes(7);

// console.log(includesTwo);

// ----------reduce use kore sohoje jog kora jai
// const totalParice = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal;
// }, 0);

// console.log(totalParice);

// const bestExpensive = items.every((item) => {
//   return item.price <= 1000;
// });
// console.log(bestExpensive);

// const hasInexpensive = items.some((item) => {
//   return item.price <= 0;
// });
// console.log(hasInexpensive);

//-------forEach mathod bebohar kore name/price dekha jai
// items.forEach((item) => {
//   console.log(item.price);
// });

//----- find use kore tumi name/ price dia dile oi tai dekha jabe
// const foundItem = items.find((item) => {
//   return item.name === "Album";
// });
// console.log(foundItem);

// const itemMap = items.map((item) => {
//   return item.name;
// });
// console.log(itemMap);

// const filterMap = items.filter((item) => {
//   return item.price > 100;
// });

// console.log(filterMap);

// const filteredItems = items.filter((item) => {
//   return item.price <= 100;
// });
// console.log(items);
//--------Filter mathod 100 = theke choto sob gula dekhabe------
// console.log(filteredItems);

// Map kore items ar ja dekte chai tai dekte pari name/price dia
// const itemName = items.map((item) => {
//   return item.name;
// });

// console.log(itemName);

// function sayHi() {
//   console.log("Hello");
//   console.log("Bye");
// }

// sayHi();

// function sum(a, b) {
//   return (sum = a + b);
//   console.log("Never will run");
// }
// const value = sum(1, 2);
// console.log(value);

// function printMe() {
//   console.log("print me");
//   console.log("printed");
// }
// printMe();

// const prientMe = function () {
//   console.log("print me");
//   console.log("pritend");
// };

// prientMe();

// function printThis(param1, param2) {
//paramintar
//   console.log("Printing...", param1, param2);
// }
// printThis("js", "Crash Course");
//argument

// function sum(a, b) {
//   const tolTo = a + b;
//   return tolTo;
// }
// sum(2, 4);
// console.log(sum);

// function calc(a, b) {
//   return 2 * (a + b);
//   console.log(a, b);
// }
// calc(3, 4);

// const printEnd = () => {
//   console.log("printing");
// };
// printEnd();

// function print(a) {
//   console.log(a);
// }
// print("robin");

// const print = (a) => 2 * a;
// console.log(print);
// return print(5);
// const print = () => 2*a;

// return print(5);
// console.log

// const sumNumber = (a) => 2 * a;
// sumNumber(5);
// console.log(sumNumber);

// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16
// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// function a() {
//   return console.log("a");
// }
// console.log("End");
// a();

// ----------Introduction to Async JavaScript-----------

/*
? Synchoronous
? Single Threaded

*/
// console.log("Frist");
// setTimeout(function () {
//   console.log("Sec Function");
// }, 5000);
// console.log("Last");

// function a() {
//   console.log("a");
// }
// console.log("End");
// a();

// const a = function () {
//   console.log("Function Working");
//   let aTime = new Date().getTime();
//   while (aTime + 5000 >= new Date().getTime());
//   console.log("Complete");
// };
// console.log("Frist Line");
// a();
// console.log("Last Line");

// ----------Introduction to asynchronous JavaScript-----------

/**
 * setTimeout
 * setInterval
 * promises
 * fetch
 * axios
 * XMLHttpRecquest
 */

// setTimeout(callback, timeinms)

// console.log("Hello");
// console.log("Hello1");
// console.log("Hello2");
// setTimeout(function () {
//   console.log("Hello3");
// }, 2000);
// console.log("Hello4");
// console.log("Hello5");

//-------------- Promise  ---------

/*let coffee = new Promise((res, rej) => {
  if (false) {
    return res(); //Resolved
  } else {
    return rej(); //Rejected
  }
});
coffee
  .then(function () {
    console.log("Resolved");
  })
  .catch(function () {
    console.log("Rejected");
  });
*/

//-------------- Promise scende  ---------
/*
let mathAns = new Promise((res, rej) => {
  let n = Math.floor(Math.random() * 10);
  if (n < 5) {
    return res();
  } else {
    return rej();
  }
});
mathAns
  .then(function () {
    console.log("Belo");
  })
  .catch(function () {
    console.log("Above");
  });
  */

// const step1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Step One Done");
//   }, 5000);
// });

// const step2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Step Two Done");
//   }, 3000);
// });

// step1.then(function (res) {
//   console.log(res);
// });

// step2.then(function (res) {
//   console.log(res);
// });

// Promise.all([step1, step2]).then((res) => console.log(res));
// Promise.race([step1, step2]).then((res) => console.log(res));

// let promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     return res("Step One Done");
//   }, 2000);
// });

// let promise2 = promise1
//   .then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//       return res("Step Two Done");
//     });
//   })
//   .catch(function (err) {
//     return err;
//   });

// promise2
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// let kajKorbo = new Promise((res, rej) => {
//   if (true) {
//     return res();
//   } else {
//     return rej();
//   }
// });
// kajKorbo
//   .then(function () {
//     console.log("Kaj korbo");
//   })
//   .catch(function () {
//     console.log("kaj korbo nah");
//   });

// let khabo = new Promise((res, rej) => {
//   if (true) {
//     return res();
//   } else {
//     return rej();
//   }
// });

// khabo
//   .then(function () {
//     console.log("Tui khaile kabo");
//   })
//   .catch(function () {
//     console.log("Tui nah khaile kabo nah");
//   });
// const newNumber = new Promise((res, rej) => {
//   const valueNumber = Math.floor(Math.random() * 10);
//   setTimeout(() => {
//     if (valueNumber % 2 == 0) {
//       console.log(valueNumber);
//       return res();
//     } else {
//       console.log(valueNumber);
//       return rej();
//     }
//   }, 2000);
// });

// newNumber
//   .then(function () {
//     console.log("Even");
//   })
//   .catch(function () {
//     console.log("Odd");
//   });

// const jabeTumi = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (true) {
//       return res();
//     } else {
//       return rej();
//     }
//   }, 2000);
// });

// jabeTumi
//   .then(function () {
//     console.log("tumi gele ami jabo");
//   })
//   .catch(function () {
//     console.log("tumi nah gele jabo nah");
//   });

// const newMember = new Promise((res, rej) => {
//   if (false) {
//     return res();
//   } else {
//     return rej();
//   }
// });

// newMember
//   .then(function () {
//     console.log("Wellcome Home");
//   })
//   .catch(function () {
//     console.log("kamne ki");
//   });
//-------------fetch----------------------

// function randomUser() {
//   fetch(`https://randomuser.me/api/`)
//     .then(function (raw) {
//       return raw.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function (err) {
//       console.log(err, "Sorry No data is Hare");
//       console.log("No data Found");
//     });
// }
// randomUser();

// async function myFunction() {
//   return "Hello";
// }
// console.log(myFunction());

// function myFunction() {
//   return Promise.resolve("Hello");
// }

// console.log(myFunction());

// async function randomUser() {
//   let urlApi = await fetch(`https://randomuser.me/apis/`);
//   let rawData = await urlApi.json();
//   console.log(rawData);
//   console.log(
//     `${rawData.results[0].name.title} ${rawData.results[0].name.first} ${rawData.results[0].name.last}`
//   );
//   console.log(
//     `${rawData.info.page} ${rawData.info.results} ${rawData.info.seed} ${rawData.info.version}`
//   );
// }
// randomUser();
// console.log("Hello");

// async function userCall() {
//   try {
//     let urlApi = await fetch(`https://randomuser.me/api/`);
//     let apiData = await urlApi.json();
//     console.log(apiData);
//   } catch (error) {
//     console.log("No Data Is here");
//   }
// }
// userCall();
// console.log("Hello");

//----------------Dom Project 1-------------------

//--------------- change the background color by generating rgb color by click in button

//steps

// step 1; create onload handler

// window.onload = () => {
//   main();
// };

// function main() {
//   const root = document.getElementById("root");
//   const btn = document.getElementById("change-btn");

//   btn.addEventListener("click", function () {
//     const bgColor = generateRGBColour();
//     root.style.backgroundColor = bgColor;
//   });
// }
// //step 2 random color gelerator function
// function generateRGBColour() {
//   //rgb(0,0,0) rgb(255,255,255)
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);

//   return `rgb(${red}, ${green}, ${blue})`;
// }

// step 3 - collect all nessararys refarances

//step 4 -  handel the click event

const output = "What's your perfect first date?"
  .split("")
  .map(parseInt)
  .filter((a) => a)
  .reduce();

console.log(output);
