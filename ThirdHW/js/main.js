////////// Task1 //////////
function Task1Funktion(num1, num2){
    if(num1 > num2)
        return 1;
    if(num1 < num2)
        return -1;
    return 0;
}
////////// Task2 //////////
function Task2Funktion(a,b=a){
   return a*b;
}
////////// Task3 //////////
function Task3Funktion(a,b,c){
   return String(a)+ String(b)+ String(c);
}
////////// Task4 //////////
function Task4Funktion(number){
    let sum=0;
    for(let i =0; i< String(number).length; i++){
        sum+= +String(number)[i]
    }
    return sum;
}
////////// Task5 //////////
function Task5Funktion(number1, number2, operator){
    switch (operator) {
        case "+":
            return number1 + number2
        case "-":
            return number1 - number2
        case "*":
            return number1 * number2
         case "/":
            return number1 / number2
        default:
            break;
    }
}
////////// Task6 //////////
function Task6Funktion(...numbers){
    let avarage = 0;
    for(let i=0; i< numbers.length; i++){
        avarage +=numbers[i];
    }
    return avarage/numbers.length;
}
////////// Task7 //////////
function Task7Funktion(number){
    return Boolean(number % 2);
}
////////// Task8 //////////
function Task8Funktion(number){
    if (number === 1) return 1; 
    return number + sumTo(n - 1);
}
////////// Task9 //////////
function Task9Funktion(str, count){
    let newstr="";
    for(let i =0; i<=count; i++){
        newstr+=str;
    }
    return newstr;
}
////////// Task10 //////////
function Task10Funktion(a, b, c){
    if(a + b > c && a + c > b && b + c > a)
        return true;
    return false;
}
