import * as route from "../../helpers/route";
import { ROUTES } from "../../const/routes";
import * as assert from "../../helpers/asserts";
import * as homePage from "../../pages/home.page";
import * as element from "../../helpers/elements";
import * as loginPage from "../../pages/login.page";
import * as loginData from "../../data/login.data";

export function loginVoila() {
  route.visit(ROUTES.home);
  assert.shouldBeVisible(homePage.TEXT_TITLE_CENTER);

  assert.shouldBeVisible(homePage.ICON_PROFILE);
  element.click(homePage.ICON_PROFILE, {force: true});

  assert.shouldBeVisible(loginPage.TITLE_LOGIN);
  assert.shouldContainText(loginPage.TITLE_LOGIN, loginData.DATA.login_title);

  element.fillField(loginPage.INPUT_USERNAME, loginData.VALID_LOGIN_DATA.email);
  element.fillField(loginPage.INPUT_PASSWORD, loginData.VALID_LOGIN_DATA.password);

  assert.shouldBeVisible(loginPage.BUTTON_LOGIN);
  element.click(loginPage.BUTTON_LOGIN);

  assert.shouldBeVisible(homePage.ICON_PROFILE_NAME);
}