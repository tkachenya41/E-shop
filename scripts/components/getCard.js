import { BASE_URL } from "../api.js";
import { cardUI } from "./CardUI.js";

export async function getCard(id) {
  try {
    const result = await fetch(BASE_URL + `/${id}`);
    const product = await result.json();
    cardUI.createCardUI(product);
  } catch (err) {
    console.log(err);
  }
}
