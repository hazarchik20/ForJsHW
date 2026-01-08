let products = [];
class Modal{
    constructor(onSubmit) {
        this.modal = document.getElementById('modal');
        this.btnClose = document.getElementById('btnClose');
        this.form = document.getElementById('dishForm');
        this.onSubmit = onSubmit;
        this.initEventListeners();

    }
    initEventListeners() {
        
        this.btnClose.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    open() {
        this.modal.classList.add('active');
    }

    close() {
        this.modal.classList.remove('active');
        this.form.reset();
    }
    handleSubmit(e) {
        e.preventDefault();

        const formData = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            price: document.getElementById('price').value,
            discount: document.getElementById('discount').value,
            stock: document.getElementById('stock').value,
            brand: document.getElementById('brand').value,
            category: document.getElementById('category').value,
            image: document.getElementById('image').value,
        };

        if (!title||!description||!brand||category) {
            alert("Error!");
            return;
        }

        if (price < 0 || stock < 0 || discount < 0) {
            alert("Числові значення не можуть бути від’ємними!");
            return;
        }
        console.log('Дані форми:', formData);
        this.close();

        if (this.onSubmit) {
        this.onSubmit(formData);
        }
    }
} 

function app() {
    const modal = new Modal((product) => {
        products.push(product);
        console.log("Масив продуктів:", products);
    });

    const addBtn = document.getElementById("mainAddBtn");
    addBtn.addEventListener("click", () => modal.open());
}
app();
