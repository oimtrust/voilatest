import * as elements from "../../helpers/elements";
import * as checkoutPage from "../../pages/checkout.page";
import * as element from "../../helpers/elements";
import * as cartPage from "../../pages/cart.page";
import * as assert from "../../helpers/asserts";
import * as cartData from "../../data/cart.data";

export function deleteCart() {
  elements.click(checkoutPage.BUTTON_GO_TO_CART);
  element.click(cartPage.BUTTON_DELETE);
  assert.shouldContainText(cartPage.TITLE_EMPTY_CART, cartData.DATA.title.empty_cart);
}