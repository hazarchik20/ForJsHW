function Task3BTclick(){
    container.classList.toggle("hide");

    if (container.classList.contains("hide")) {
        showBtn.textContent = "Show context";
    } else {
        showBtn.textContent = "Hide context";
    }
    
}