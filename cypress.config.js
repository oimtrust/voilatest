const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  reporter: 'mochawesome',
  viewportWidth: 1050,
  viewportHeight: 660,
  env: {
    baseUrl: 'https://voila.id'
  },
  e2e: {
    specPattern: "tests/scenarios/**/*.feature",
    supportFile: false,
    setupNodeEvents
  },
});
