## How to install?
### Pre-requisites
- [Node.js](https://nodejs.org/en "Node.js")
  Install at least v16.20.2 or higher as this is the oldest active LTS version.
  Only releases that are or will become an LTS release are officially supported.
- [VSCode](https://code.visualstudio.com/ "VSCode") or [Jetbrains Aqua](https://www.jetbrains.com/aqua/ "Jetbrains Aqua")
- [Yarn](https://yarnpkg.com/getting-started/install "Yarn")

### Steps
- Clone this project.
- Open the project in VSCode/Aqua.
- Open the terminal in VSCode/Aqua.
- Execute `yarn` to install the node modules.
- Edit your voilà.id account at `./tests/data/login.data.js`:
```javascript
export const VALID_LOGIN_DATA = {
  email: "yourmail@gmail.com",
  password: "yourPassword"
}
```
- Execute `yarn run cy:open` to open Cypress Studio.
- Execute `yarn run cy:run` to run all tests
