"use strict";

function counter() {
  var decrease = document.querySelectorAll(".card__counter-decrease");
  var increase = document.querySelectorAll(".card__counter-increase");
  decrease.forEach(function (el) {
    el.addEventListener("click", function () {
      var count = +el.nextElementSibling.textContent;

      if (count > 1) {
        el.nextElementSibling.innerHTML = "".concat(--count);
      }
    });
  });
  increase.forEach(function (el) {
    el.addEventListener("click", function () {
      var count = +el.previousElementSibling.textContent;

      if (count < 30) {
        el.previousElementSibling.innerHTML = "".concat(++count);
      }
    });
  });
}

function closeList() {
  var itemsClick = document.querySelectorAll(".card__list-item");
  var subItemClick = document.querySelectorAll(".card__sub-list-item");
  itemsClick.forEach(function (el) {
    el.addEventListener("click", function () {
      el.classList.toggle("active");
      el.closest(".card").addEventListener("mouseleave", function () {
        el.classList.remove("active");
        el.childNodes[3].classList.remove("active");
      });
      el.childNodes[3].classList.toggle("active");
    });
  });
  subItemClick.forEach(function (el) {
    el.addEventListener("click", function () {
      el.classList.add("checked");
      el.closest(".card__list-item").childNodes[1].textContent = el.textContent;
    });
  });
}

function filterCheckedPrice() {
  var checked = document.querySelectorAll(".card__checkbox[value]");
  checked.forEach(function (el) {
    el.addEventListener("click", function () {
      if (el.value === "100") {
        el.closest(".card").querySelector(".card__price").textContent = "200 грн";
      }

      if (el.value === "200") {
        el.closest(".card").querySelector(".card__price").textContent = "450 грн";
      }

      if (el.value === "300") {
        el.closest(".card").querySelector(".card__price").textContent = "635 грн ";
      }
    });
  });
}

function buyProduct() {
  var cardBtn = document.querySelectorAll(".card__btn");
  cardBtn.forEach(function (el) {
    el.addEventListener("click", function () {
      el.closest(".card").querySelector(".card__completed").classList.add("active");
    });
  });
}

filterCheckedPrice();
buyProduct();
closeList();
counter();