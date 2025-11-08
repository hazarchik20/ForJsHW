function Task1BTclick(){
    
    const container =  document.getElementById("container");
    let newdiv = document.createElement("div");
    newdiv.style.background = `rgb(${Math.random()*254+1}, ${Math.random()*254+1}, ${Math.random()*254+1})`; 
    newdiv.style.width = `${Math.random()*200+100}px`;
    newdiv.style.height = `${Math.random()*200+100}px`;
    newdiv.style.margin = `${Math.random()*20+10}px`;
    container.appendChild(newdiv);
}