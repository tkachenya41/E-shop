import { productsDOM } from "../DOM.js";

class Ui {
  createUI(data) {
    productsDOM.innerHTML = " ";
    data.forEach(
      (product) =>
        (productsDOM.innerHTML += `<div data-action = 'getCard' class='products-item' id = ${product.id}>
       <div class = 'product-title'>${product.title}</div>
       <div ><img class = 'product-photo' src =${product.image} alt ='Picture' >
       </div>
       <a href = '#/card/${product.id}' class = 'show-more'>Подробнее</a>
       <div class ='product-footer'>
       
       <div class = 'product-price'>${product.price}$</div>

         </div>`)
    );
  }
}

export let ui = new Ui();
