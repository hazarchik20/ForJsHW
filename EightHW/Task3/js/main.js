class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  study() {
    console.log(`${this.name}, ${this.age} років, навчається у ${this.grade} класі.`);
  }
}

let student1 = new Student("Neo", 12, 100);
let student2 = new Student("julian", 55, 1);

student1.study();
student2.study();