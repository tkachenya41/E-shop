import { BASE_URL } from "../api.js";
import { ui } from "./UI.js";
import { select } from "../DOM.js";

class ProductsByCategory {
  async getProductsByCategory() {
    try {
      const result = await fetch(`${BASE_URL}/category/${select.value}`);
      const data = await result.json();
      ui.createUI(data);
    } catch (err) {
      console.log(err);
    }
  }
}

export let productByCategory = new ProductsByCategory();
