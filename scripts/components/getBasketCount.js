import { basketContent } from "../DOM.js";

export function getBasketCount() {
  let totalSumOfProducts = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i);
    let prodObj = JSON.parse(localStorage.getItem(id));
    totalSumOfProducts += +prodObj.count;
  }
  basketContent.textContent = totalSumOfProducts;
}
