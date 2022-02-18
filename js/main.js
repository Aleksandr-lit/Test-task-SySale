function counter() {
    const decrease = document.querySelectorAll(".card__counter-decrease");
    const increase = document.querySelectorAll(".card__counter-increase");

    decrease.forEach((el) => {
        el.addEventListener("click", () => {
            let count = +el.nextElementSibling.textContent;
            if (count > 1) {
                el.nextElementSibling.innerHTML = `${--count}`;
            }
        })
    })

    increase.forEach((el) => {
        el.addEventListener("click", () => {
            let count = +el.previousElementSibling.textContent;
            if (count < 30) {
                el.previousElementSibling.innerHTML = `${++count}`;
            }
        })
    })
}

function closeList() {
    const itemsClick = document.querySelectorAll(".card__list-item");
    const subItemClick = document.querySelectorAll(".card__sub-list-item");

    itemsClick.forEach((el) => {
        el.addEventListener("click", () => {
            el.classList.toggle("active");

            el.closest(".card").addEventListener("mouseleave", () => {
                el.classList.remove("active");
                el.childNodes[3].classList.remove("active");
            })

            el.childNodes[3].classList.toggle("active");
        })
    })

    subItemClick.forEach((el) => {
        el.addEventListener("click", () => {
            el.classList.add("checked");
            el.closest(".card__list-item").childNodes[1].textContent = el.textContent;
        })
    })
}

function filterCheckedPrice() {
    const checked = document.querySelectorAll(".card__checkbox[value]");

    checked.forEach((el) => {
        el.addEventListener("click", () => {
            if (el.value === "100") {
                el.closest(".card").querySelector(".card__price").textContent = "200 грн";
            }
            if (el.value === "200") {
                el.closest(".card").querySelector(".card__price").textContent = "450 грн";
            }
            if (el.value === "300") {
                el.closest(".card").querySelector(".card__price").textContent = "635 грн ";
            }
        })
    })
}

function buyProduct() {
    const cardBtn = document.querySelectorAll(".card__btn");

    cardBtn.forEach((el) => {
        el.addEventListener("click", () => {
            el.closest(".card").querySelector(".card__completed").classList.add("active");
        })
    })
}

filterCheckedPrice();
buyProduct();
closeList();
counter();