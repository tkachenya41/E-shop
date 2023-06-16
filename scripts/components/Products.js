import { BASE_URL } from "../api.js";
import { ui } from "./Ui.js";

class Products {
  async getProducts() {
    try {
      const result = await fetch(BASE_URL);
      const data = await result.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async renderProducts() {
    let productsData = await products.getProducts();
    ui.createUI(productsData);
  }
}

export let products = new Products();
