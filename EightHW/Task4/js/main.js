class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayInfo() {
    console.log(`Назва: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}`);
  }
}

let book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
let book2 = new Book("Енеїда", "Іван котляревський", 1798);

book1.displayInfo(); 
book2.displayInfo();