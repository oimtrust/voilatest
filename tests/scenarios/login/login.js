import * as homePage from "../../pages/home.page";
import * as loginPage from "../../pages/login.page";
import { ROUTES } from "../../const/routes";
import * as route from "../../helpers/route";
import * as element from "../../helpers/elements";
import * as assert from "../../helpers/asserts";
import * as cookie from "../../helpers/cookie";
import * as loginData from "../../data/login.data";

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('Open the webpage', () => {
    cookie.clearCookies();
    route.visit(ROUTES.home);
    // assert.shouldBeVisible(homePage.TEXT_TITLE_CENTER);
});

When('Click the profile icon', () => {
    assert.shouldBeVisible(homePage.ICON_PROFILE);
    element.click(homePage.ICON_PROFILE, {force: true});
});

Then('The login page is displayed', () => {
    assert.shouldBeVisible(loginPage.TITLE_LOGIN);
    assert.shouldContainText(loginPage.TITLE_LOGIN, loginData.DATA.login_title);
});

When('Click the login button', () => {
    assert.shouldBeVisible(loginPage.BUTTON_LOGIN);
    element.click(loginPage.BUTTON_LOGIN);
});

Then('Error message is displayed for empty state', () => {
    assert.shouldContainText(loginPage.TEXT_ERROR_MESSAGE, loginData.DATA.error_message.field_invalid);
});

When('Input email field with invalid username', () => {
    element.fillField(loginPage.INPUT_USERNAME, loginData.INVALID_LOGIN_DATA.email);
});

When('Input password field with invalid password', () => {
    element.fillField(loginPage.INPUT_PASSWORD, loginData.INVALID_LOGIN_DATA.password);
});

Then('Error message is displayed for invalid state', () => {
    assert.shouldContainText(loginPage.TEXT_ERROR_MESSAGE, loginData.DATA.error_message.field_invalid);
});

When('Input email field with valid username', () => {
    element.fillField(loginPage.INPUT_USERNAME, loginData.VALID_LOGIN_DATA.email);
});

When('Input password field with valid password', () => {
    element.fillField(loginPage.INPUT_PASSWORD, loginData.VALID_LOGIN_DATA.password);
});

Then('Name of user is visible in navbar menu', () => {
    assert.shouldBeVisible(homePage.ICON_PROFILE_NAME);
});

