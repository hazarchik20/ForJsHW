let elements = document.getElementsByTagName("div");

for (let i = 0; i < elements.length; i++) {
    let btn = document.createElement("button");
    btn.classList.add("close-btn");
    btn.textContent = "×";
    btn.onclick = function() {
        this.parentElement.remove();
    };

    elements[i].append(btn);
}