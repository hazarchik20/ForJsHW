//|||||||||||||||||||||||| TASK 1 |||||||||||||||||||||||||\\

function isValidURL(str) {
  const regular = /^(?:https?|ftp):\/\/.+$/i;
  return regular.test(str);
}

//|||||||||||||||||||||||| TASK 2 |||||||||||||||||||||||||\\
class Modal {
    constructor() {
        this.modal = document.getElementById('modal');
        this.btnClose = document.getElementById('btnClose');
        this.form = document.getElementById('carForm');
        this.initEventListeners();
        this.initValidation();
    }

    open() {
        this.modal.classList.add('show');
    }

    close() {
        this.modal.classList.remove('show');
        this.form.reset();
        this.clearErrors();
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

    initValidation() {
        const fields = this.form.querySelectorAll("input");
        fields.forEach(field => {
            field.addEventListener("input", () => this.validateField(field));
            field.addEventListener("blur", () => this.validateField(field));
        });
    }

    validateField(field) {
        field.setCustomValidity(""); 
        const value = field.value.trim();

        switch (field.id) {

            case "user-name":
                if (field.validity.valueMissing) {
                    field.setCustomValidity("Будь ласка, введіть нікнейм.");
                } 
                else if (value.length < 3) {
                    field.setCustomValidity("Нікнейм має містити мінімум 3 символи.");
                }
                break;

            case "user-email":
                if (field.validity.valueMissing) {
                    field.setCustomValidity("Введіть email.");
                }
                else if (field.validity.typeMismatch) {
                    field.setCustomValidity("Email введено некоректно.");
                }
                break;

            case "user-password":
                if (field.validity.valueMissing) {
                    field.setCustomValidity("Введіть пароль.");
                }
                else if (value.length < 6) {
                    field.setCustomValidity("Пароль має містити мінімум 6 символів.");
                }
                break;

            case "user-password-repeate":
                const password = this.form["user-password"].value;

                if (field.validity.valueMissing) {
                    field.setCustomValidity("Підтвердіть пароль.");
                }
                else if (value !== password) {
                    field.setCustomValidity("Паролі не співпадають.");
                }
                break;
        }
        const errorSpan = field.parentElement.querySelector(".error-message");
        errorSpan.textContent = field.validationMessage;
        return field.checkValidity();
    }

    clearErrors() {
        const errors = this.form.querySelectorAll(".error-message");
        errors.forEach(span => (span.textContent = ""));
    }

    handleSubmit(e) {
        e.preventDefault();
        let isValid = true;
        const fields = this.form.querySelectorAll("input");
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        if (!isValid) {
            console.log("Форма містить помилки");
            return;
        }
        alert("Реєстрація успішна!");
        this.close();
    }
}

const modal = new Modal();
document.getElementById('MainAddBT').addEventListener("click",()=>{modal.open()});