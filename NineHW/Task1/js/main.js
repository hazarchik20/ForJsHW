class myBtn {
    constructor(text, border, color,bg){
        this.bg = bg;
        this.border = border;
        this.color= color;
        this.text = text;
    }
    render(){
        const container = document.getElementById("mainContainer");
        const newBtn = document.createElement("button");
        newBtn.style.background = this.bg;
        newBtn.textContent = this.text;
        newBtn.style.color = this.color;
        newBtn.style.border = this.border;
        newBtn.addEventListener("click", ()=> {console.log(`Кнопка ${this.text} натиснута. Колір кнопки -  ${this.bg}`)})
        container.append(newBtn);
    }
}
class RoundedButton extends myBtn{
    constructor(text, border, color,bg, borderRadius){
        super(text, border, color,bg)
        this.borderRadius = borderRadius;
    } 
   render() {
        super.render();
        const container = document.getElementById("mainContainer");
        const lastBtn = container.lastElementChild;
        lastBtn.style.borderRadius = this.borderRadius;

        
        this.buttonElement = lastBtn;
    }

    dropShadow() {
       

        this.buttonElement.addEventListener("mouseenter", () => {
            this.buttonElement.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.5)";
        });

        this.buttonElement.addEventListener("mouseleave", () => {
            this.buttonElement.style.boxShadow = "none";
        });
    }

}
const btn1 = new myBtn("Start", "2px solid black", "white", "green");
const btn2 = new myBtn("Stop", "2px solid red", "white", "red");
const btn3 = new myBtn("Pause", "2px solid orange", "black", "yellow");

const rbtn1 = new RoundedButton("Send", "2px solid blue", "white", "blue", "15px");
const rbtn2 = new RoundedButton("OK", "2px solid purple", "white", "purple", "25px");
const rbtn3 = new RoundedButton("Save", "2px solid teal", "white", "teal", "50px");

btn1.render();
btn2.render();
btn3.render();

rbtn1.render();
rbtn2.render();
rbtn3.render();
rbtn1.dropShadow();
rbtn2.dropShadow();
rbtn3.dropShadow();
