import { productsDOM } from "../DOM.js";

export const getBasket = () => {
  productsDOM.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i);
    let product = JSON.parse(localStorage.getItem(id));
    productsDOM.innerHTML += `
    <div data-action = 'getCard' class='products-item' id = ${id}>
    <div class = 'product-title'>${product.title}</div>
    <div ><img class = 'product-photo' src =${product.image} alt ='Picture' >
    </div>
    <a href = '#/card/${id}' class = 'show-more'>Подробнее</a>
    <div class ='product-footer'>

    <div class = 'product-price'>${product.price}$</div>
    <div>Количество: ${product.count}</div>
      </div>
    `;
  }
};
