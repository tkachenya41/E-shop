import { products } from "./components/Products.js";
import { category } from "./components/Category.js";
import { productByCategory } from "./components/ProductsBy.js";
import { basketContent, select } from "./DOM.js";
import Router from "./components/Router.js";
import { getCard } from "./components/getCard.js";
import { getBasket } from "./components/getBasket.js";
import { getBasketCount } from "./components/getBasketCount.js";

document.addEventListener("DOMContentLoaded", function () {
  products.renderProducts();
  category.getCategories();
  basketContent.addEventListener("click", () => getBasket());
});

if (localStorage.length) {
  getBasketCount();
}

select.addEventListener("change", (event) => {
  if (event.target.value === "all") {
    products.renderProducts();
  } else {
    productByCategory.getProductsByCategory();
  }
});

const router = new Router();

router.add(/card\/(.*)/, (id) => getCard(id));
