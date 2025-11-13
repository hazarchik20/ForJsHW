function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}


Car.prototype.displayInfo = function() {
  console.log(`Марка: ${this.brand}`);
  console.log(`Модель: ${this.model}`);
  console.log(`Рік випуску: ${this.year}`);
};

Car.prototype.drive = function() {
  console.log("Рух розпочато 🚗");
};

let car1 = new Car("Toyota", "Camry", 2020);
let car2 = new Car("BMW", "X5", 2023);

car1.displayInfo();
car1.drive();

car2.displayInfo();
car2.drive();