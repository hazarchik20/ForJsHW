let container = document.getElementById("mainContainer");

let button = document.getElementById("mainBT");

button.addEventListener("click",(e)=>{showInfo(e,container);});
button.addEventListener("dblclick",(e)=>{
    showInfo(e,container);
    setRandomColor(button);
});
button.addEventListener("contextmenu",(e)=>{
    e.preventDefault(); 
    showInfo(e,container);});
container.addEventListener("keydown",(e)=>{showInfo(e,container);});

function showInfo(e,container){
    container.innerHTML = "";
    const type = document.createElement("p");
    type.textContent = `events type: ${e.type}`;
    const tagName = document.createElement("p");
    tagName.textContent = `events tagName:${e.target.tagName}`;
    const time = document.createElement("p");
    time.textContent = `Time :${new Date().toLocaleDateString()}`;
    container.append(type,tagName,time)
    if (e.clientX !== undefined && e.clientY !== undefined) {
        const coords = document.createElement("p");
        coords.textContent = `Coords: ${e.clientX}px, ${e.clientY}px`;
        container.append(coords);
      } else if (e.key !== undefined) {
        const key = document.createElement("p");
        key.textContent = `Key pressed: ${e.key}`;
        container.append(key);
    }
}
function setRandomColor(button){
    button.style.background = `rgb(${Math.floor(Math.random()*256)},  ${Math.floor(Math.random()*256)},  ${Math.floor(Math.random()*256)})`
}