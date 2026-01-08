let allProducrt=[];

async function loadProduct() {
    try {
        const response = await fetch("https://dummyjson.com/products?limit=200&skip=0");

        if (!response.ok) {
            throw new Error("Помилка завантаження продукта");
        }

        const data = await response.json();
        allProducrt = data.products;

        console.log("Завантажені продукти:", allProducrt);

        RenderProducts(allProducrt);
    }
    catch (err) {
        console.error("Помилка:", err);
    }
}

function RenderProducts(list) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        let product = list[i];

        let card = document.createElement("div");
        card.classList.add("product-card");

        let image = document.createElement("img");
        image.src = product.thumbnail;
        image.classList.add("thumbnail");

        let title = document.createElement("div");
        title.textContent = product.title;
        title.classList.add("title");

        let desc = document.createElement("div");
        desc.textContent = product.description;
        desc.classList.add("description");

        let price = document.createElement("div");
        price.textContent = `${product.price} $ (Знижка: ${product.discountPercentage}%)`;
        price.classList.add("price");

        let rating = document.createElement("div");
        rating.textContent = `Рейтинг: ${product.rating}`;
        rating.classList.add("rating");

        let cartBtn = document.createElement("div");
        cartBtn.classList.add("fa", "fa-shopping-cart", "cart-btn");
        cartBtn.addEventListener("click", () => {
            console.log(`Product with id ${product.id} added`);
        });

        card.append(image, title, desc, price, rating, cartBtn);
        container.appendChild(card);
    }
}

document.getElementById("word").addEventListener("input", function () {
    let text = this.value.toLowerCase().trim();

    let filtered = allProducrt.filter(p =>
        p.title.toLowerCase().includes(text) ||
        p.description.toLowerCase().includes(text)
    );

    RenderProducts(filtered);
});

loadProduct();