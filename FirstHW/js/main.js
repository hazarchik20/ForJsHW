////////// Task1 //////////
console.log("Pankiv")

////////// Task2 //////////
let temp1 = 33;
let temp2 = "aaa";
console.log("temp1 =" + temp1 + "\ntemp2 =" +temp2);
temp1 = temp2;
console.log("temp1 =" + temp1 + "\ntemp2 =" +temp2);

////////// Task3 //////////

let name = "Nazar";
let surename = "Pankiv";
let group = 34;
let year = 2009;
let isMarried = false;
console.log("name ="+name+ "type = "+ typeof name)
console.log("surename ="+surename+ "type = "+ typeof surename)
console.log("group ="+group+ "type = "+ typeof group)
console.log("year ="+year+ "type = "+ typeof year)
console.log("isMarried ="+isMarried+ "type = "+ typeof isMarried)

console.log("group ="+group+ "type = "+ typeof group)
console.log("year ="+year+ "type = "+ typeof year)
console.log("isMarried ="+isMarried+ "type = "+ typeof isMarried)
console.log("name ="+name+ "type = "+ typeof name)
console.log("surename ="+surename+ "type = "+ typeof surename)
////////// Task4 //////////

const AboutMew = {
  name: "Nazar",     
  age: 16,           
  isStudent: true   
};

console.log("Name:", AboutMew.name);
console.log("Age:", AboutMew.age);
console.log("Student:", AboutMew.isStudent);

////////// Task5 //////////
const CURRENT_YEAR = 2025;
const birthYear = prompt("enter your Birthday:");
const age = CURRENT_YEAR - birthYear;
alert(`Вам ${age} років.`);

////////// Task6 //////////
const isAdult = confirm("you are adult?");
console.log("isAdult =", isAdult);

////////// Task7 //////////
const login = prompt("enter login:");
const email = prompt("enter email:");
const password = prompt("enter password:");
alert(`Dear ${login}, your email is ${email}, your password is ${password}.`);