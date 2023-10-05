import * as generator from "../helpers/generators";


export const DATA = {
  login_title: "Login",
  error_message: {
    field_empty: "Email atau sandi tidak boleh kosong",
    field_invalid: "Email atau sandi salah."
  }
}

export const INVALID_LOGIN_DATA = {
  email: generator.generateEmail(),
  password: generator.generatePassword()
}

/**
 *
 * @type {{password: string, email: string}}
 * Change first with account testing
 */
export const VALID_LOGIN_DATA = {
  email: "yourmail@gmail.com",
  password: "yourpassword"
}