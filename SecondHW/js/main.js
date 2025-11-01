
////////// Task1 //////////
let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30; 

alert(`Seconds in one hour: ${secondsInHour}`);
alert(`Seconds in one day: ${secondsInDay}`);
alert(`Seconds in one month: ${secondsInMonth}`);


////////// Task2 //////////
const UsdToUah = 42.5; 
let dollars = prompt("Enter the amount in USD:");
let uah = dollars * UsdToUah;
alert(`${dollars} USD = ${uah} UAH`);


////////// Task3 //////////
let x = 1;
let y = 2;

let res1 = String(x) + String(y); 
console.log(res1);
console.log(typeof res1); 

let res2 = String(Boolean(x)) + String(y); 
console.log(res2);
console.log(typeof res2); 

let res3 = Boolean(x) && Boolean(y); 
console.log(res3);
console.log(typeof res3); 


////////// Task4 //////////
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


////////// Task5 //////////
let inputString = prompt("Enter any text:");
if (inputString) {
  for (let i = inputString.length - 1; i >= 0; i--) {
    console.log(inputString[i]);
  }
}


////////// Task6 //////////
let number;
do {
  number = prompt("Enter a number greater than 100:");
  if (number === null) {
    alert("You pressed Cancel.");
    break;
  }
} while (Number(number) <= 100);

if (number !== null && Number(number) > 100) {
  alert(`Thank you! You entered ${number}`);
}



////////// Task7 //////////
let num = +prompt("Enter a number between 0 and 3:");

switch (num) {
  case 0:
    alert("You entered 0");
    break;
  case 1:
    alert("You entered 1");
    break;
  case 2:
  case 3:
    alert("You entered 2 or 3");
    break;
  default:
    alert("Number is out of range");
    break;
}