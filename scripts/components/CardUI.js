import { productsDOM } from "../DOM.js";
import { getBasketCount } from "./getBasketCount.js";

class CardUI {
  createCardUI(product) {
    productsDOM.innerHTML = "";
    productsDOM.innerHTML = `<div class='product-card' id = ${product.id}>
    <a href = '/E-shop/' class='return' >
    <img src='img/left-arrow.svg'>
    </a>
    <h3 class='product-title'>${product.title}</h3>
    <p class='product-description'>${product.description}</p>
    <img class='product-image' src=${product.image} >
    <div class = 'product-card-footer'>
    <div class='product-price'>${product.price}$</div>
    <div class='add-product'>+</div>
    <div class='delete-product'>-</div>
    </div>
    </div>`;

    const addProduct = document.querySelector(".add-product");
    addProduct.addEventListener("click", () => {
      let currentProduct = JSON.parse(localStorage.getItem(product.id));
      if (!currentProduct) {
        let count = 0;
        localStorage.setItem(
          product.id,
          JSON.stringify({
            count: (count += 1),
            title: product.title,
            image: product.image,
            price: product.price,
          })
        );
      } else {
        localStorage.setItem(
          product.id,
          JSON.stringify({
            count: (currentProduct.count += 1),
            title: product.title,
            image: product.image,
            price: product.price,
          })
        );
      }
      getBasketCount();
    });

    const deleteProduct = document.querySelector(".delete-product");

    deleteProduct.addEventListener("click", () => {
      let currentProduct = JSON.parse(localStorage.getItem(product.id));
      if (currentProduct.count > 0) {
        localStorage.setItem(
          product.id,
          JSON.stringify({
            count: (currentProduct.count -= 1),
            title: product.title,
            image: product.image,
            price: product.price,
          })
        );
      }
      if (currentProduct.count < 1) {
        localStorage.removeItem(product.id);
      }
      getBasketCount();
    });
  }
}

export let cardUI = new CardUI();
