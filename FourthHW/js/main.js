///////////// Task1 ///////////// 
function Task1Funtion(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++){
            if(arr[i]===arr[j])
                return false;
        }
    return true;
    }
}
///////////// Task2 ///////////// 
let shoppingList = [
  { name: "Хліб", quantity: 2, purchased: true },
  { name: "Молоко", quantity: 1, purchased: false },
  { name: "Яблука", quantity: 6, purchased: false },
  { name: "Цукор", quantity: 1, purchased: true },
  { name: "Кава", quantity: 1, purchased: false }
];
function Task2_1Funtion() {
    shoppingList.sort((a, b) => a.purchased - b.purchased);
    for(item of shoppingList) {
    console.log(`${item.name} — кількість: ${item.quantity}, куплено: ${item.purchased ? "так" : "ні"}`);
    };
}
function Task2_2Funtion(name, quantity=1) {
    for(item of shoppingList) {
        if(item.name === name){
            item.quantity+=quantity;
            return;
        }
    };
    shoppingList.push({ name: name, quantity: quantity, purchased: false });
}
function Task2_3Funtion(name) {
    for(item of shoppingList) {
        if(item.name === name){
            item.purchased = true;
            return;
        }
    };
    alert("!!!DONT VALID NAME!!!")
}
///////////// Task3 ///////////// 
let products = [
    {name: "Phone", price: 500, category: "Electronics"},
    {name: "Laptop", price: 1000, category: "Electronics"},
    {name: "Book", price: 20, category: "Books"},
    {name: "Shoes", price: 80, category: "Fashion"},
    {name: "Headphones", price: 150, category: "Electronics"},
    {name: "Smartwatch", price: 250, category: "Electronics"},
    {name: "Backpack", price: 60, category: "Fashion"},
    {name: "Desk Lamp", price: 35, category: "Home"},
    {name: "Water Bottle", price: 15, category: "Sports"},
    {name: "T-shirt", price: 25, category: "Fashion"},
    {name: "Gaming Mouse", price: 70, category: "Electronics"},
    {name: "Notebook", price: 5, category: "Stationery"},
    {name: "Coffee Maker", price: 120, category: "Home"},
    {name: "Basketball", price: 40, category: "Sports"}
];
function Task3Funtion(category) 
{
    let correctProduct =[];
    for(let i=0; i<products.length; i++) {
        if(products[i].category === category){
            correctProduct.push(products[i]);
        }
    };
    return correctProduct;
}
let newproducts = Task3Funtion(prompt("enter some category like Electronics/Fashion/Home/Books or something else"))
console.log(newproducts)

///////////// Task4 ///////////// 
let students = [
  {name: "John", grades: {math: 90, english: 85, science: 95}},
  {name: "Alice", grades: {math: 95, english: 88, science: 92}},
  {name: "Bob", grades: {math: 80, english: 75, science: 85}},
  {name: "Emma", grades: {math: 88, english: 90, science: 91}},
  {name: "Michael", grades: {math: 76, english: 82, science: 79}},
  {name: "Sophia", grades: {math: 92, english: 94, science: 97}},
  {name: "Daniel", grades: {math: 85, english: 80, science: 83}},
  {name: "Olivia", grades: {math: 98, english: 92, science: 94}},
  {name: "Liam", grades: {math: 70, english: 68, science: 72}},
  {name: "Isabella", grades: {math: 91, english: 87, science: 89}},
  {name: "Noah", grades: {math: 84, english: 79, science: 82}},
  {name: "Mia", grades: {math: 89, english: 93, science: 90}},
  {name: "Ethan", grades: {math: 77, english: 74, science: 80}}
];
for(studentof of students){
    let sum = 0;
    let count = 0;
    for(studentin in studentof.grades){
        sum+=studentof.grades[studentin];
        count++;
    }
    console.log(`${studentof.name}'s avarage grade is ${sum/count}`)
}

