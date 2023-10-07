import * as homePage from "../../pages/home.page";
import * as element from "../../helpers/elements";
import * as assert from "../../helpers/asserts";
import { loginVoila } from "../common/login-voila";
import * as productPage from "../../pages/product.page";
import * as productData from "../../data/product.data";
import * as cartPage from "../../pages/cart.page";
import * as cartData from "../../data/cart.data";
import * as checkoutPage from "../../pages/checkout.page";
import * as checkoutData from "../../data/checkout.data";
import { deleteCart } from "../common/delete-cart";


const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('User click search icon', () => {
  loginVoila();
  assert.shouldBeVisible(homePage.ICON_SEARCH);
  element.click(homePage.ICON_SEARCH, { force: true });
});

When('User type "Ring" in search field', () => {
  element.fillField(homePage.INPUT_SEARCH, 'Ring');
});

When('Click the product with "Ring" as a keyword', () => {
  element.click(homePage.PRODUCT_RING_KEYWORD);
});

Then('User able to show the detail of the product', () => {
  assert.shouldBeVisible(productPage.TITLE_PRODUCT);
  assert.shouldContainText(productPage.TITLE_PRODUCT, productData.DATA.product_title);
});

When('Click "Add to Bag" button', () => {
  assert.shouldBeVisible(productPage.BUTTON_ADD);
  element.click(productPage.BUTTON_ADD);
});

Then('When the variant is not chosen, an error message is displayed.', () => {
  assert.shouldContainText(productPage.TEXT_ERROR_MESSAGE_FOR_VARIANT, productData.DATA.message.error_message_of_variant);
});

When('Click "M" variant', () => {
  assert.shouldBeVisible(productPage.OPTION_M_VARIANT);
  element.click(productPage.OPTION_M_VARIANT);
});

Then('The success message is displayed when the product able to added', () => {
  assert.shouldContainText(productPage.MODAL_SUCCESS_MESSAGE, productData.DATA.message.success_message_add_product);
});

When('Click "Go to Shopping Bag"', () => {
  element.clickContain(productPage.BUTTON_GO_TO_BAG_SELECTOR, productPage.BUTTON_GO_TO_BAG, {waitForAnimations: false});
  assert.shouldContainText(cartPage.TITLE_SHOPPING_BAG, cartData.DATA.title.shopping_bag);
});

When('Delete the list of product in cart', () => {
  assert.shouldBeVisible(cartPage.TITLE_PRODUCT);
  assert.shouldContainText(cartPage.TITLE_PRODUCT, productData.DATA.product_title);
  element.click(cartPage.BUTTON_DELETE);
});

Then('The wording of "Your shopping bag is empty" is displayed', () => {
  assert.shouldContainText(cartPage.TITLE_EMPTY_CART, cartData.DATA.title.empty_cart);
});

When('Input note with "Candidate for QA" as a value', () => {
  element.fillField(cartPage.INPUT_NOTE, cartData.DATA.note_of_card);
});

When('Click Checkout button', () => {
  element.click(cartPage.BUTTON_CHECKOUT);
});

When('User type "[Fathur Rohim]-[Candidate QA]" in address field', () => {
  element.fillField(checkoutPage.INPUT_ADDRESS, checkoutData.DATA.detail_address.input_address, {force: true});
});

When('User type "Rejang Lebong" in city field', () => {
  element.fillField(checkoutPage.INPUT_CITY, checkoutData.DATA.detail_address.input_city);
});

When('User select "Bengkulu" in zone field', () => {
  element.select(checkoutPage.SELECT_ZONE, checkoutData.DATA.detail_address.select_zone_text, checkoutData.DATA.detail_address.select_zone_value);
});

When('User input code in postal code field', () => {
  element.fillField(checkoutPage.INPUT_POSTAL_CODE, checkoutData.DATA.detail_address.input_postal_code);
});

When('User input number in phone field', () => {
  element.fillFieldWithoutAssert(checkoutPage.INPUT_PHONE, checkoutData.DATA.detail_address.input_phone);
});

When('User click courier option', () => {
  element.clickContain(checkoutPage.RADIO_BUTTON_COURIER, 'JNT - Promo Free Shipping');
});

When('User click "Bank Transfer" as a payment option', () => {
  element.click(checkoutPage.RADIO_BUTTON_BANK_TRANSFER);
});

Then('Ensure the total amount is "Rp 6.800.000,00"', () => {
  assert.shouldBeVisible(checkoutPage.TEXT_TOTAL_AMOUNT);
  deleteCart();
});