fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        console.log("Імена користувачів:");
        users.forEach(u => console.log(u.name));
    })
    .catch(err => console.error("Помилка:", err));

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
        const list = document.getElementById("postsList");

        posts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            list.appendChild(li);
        });
    })
    .catch(err => console.error("Помилка:", err));

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My first post",
        body: "Hello world!",
        userId: 1
    })
})
    .then(res => res.json())
    .then(data => console.log("Відповідь сервера:", data))
    .catch(err => console.error("Помилка:", err));

    
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(products => {
        const container = document.getElementById("products");

        products.forEach(p => {
            const card = document.createElement("div");
            card.style.width = "200px";
            card.style.border = "1px solid #ddd";
            card.style.padding = "10px";
            card.style.borderRadius = "8px";

            card.innerHTML = `
                <img src="${p.image}" alt="${p.title}" style="width:100%; height:150px; object-fit:contain;">
                <h3 style="font-size:16px;">${p.title}</h3>
                <p><b>Ціна:</b> ${p.price}$</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(err => console.error("Помилка:", err));