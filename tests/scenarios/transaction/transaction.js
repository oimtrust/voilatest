import * as homePage from "../../pages/home.page";
import * as element from "../../helpers/elements";
import * as assert from "../../helpers/asserts";
import { loginVoila } from "../common/login-voila";
import * as productPage from "../../pages/product.page";
import * as productData from "../../data/product.data";

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