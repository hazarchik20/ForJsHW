class Shape{
    constructor(color){
        this.color = color;
    }
    showColor(){
        return this.color;
    }
}
class Circle extends Shape{
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }
    mathArea(){
        return Math.PI*(this.radius*this.radius);
    }
    mathPerimeter(){
        return Math.PI*this.radius*2;
    }

}
class Rectangle extends Shape{
    constructor(color, a, b){
        super(color);
        this.a = a;
        this.b = b;
    }
    mathArea(){
        return this.a*this.b;
    }
    mathPerimeter(){
        return this.a*2+this.b*2;
    }
}
const circle = new Circle("red", 5);
const rectangle = new Rectangle("blue", 4, 7);

console.log(`Circle — color: ${circle.showColor()}, Area: ${circle.mathArea().toFixed(2)},Perimeter: ${circle.mathPerimeter().toFixed(2)}`);
console.log(`Rectangle — color: ${rectangle.showColor()}, Area: ${rectangle.mathArea()},Perimeter: ${rectangle.mathPerimeter()}`);