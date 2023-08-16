const { defineConfig } = require("cypress");



module.exports = defineConfig({

  e2e: {
    specPattern: "**/*.cy.js",
    reporter: "cypress-multi-reporters",
    screenshotOnRunFailure: true,
    video: false,
    projectId: 'xy9pnf',//128076ed-9868-4e98-9cef-98dd8b705d75,
    defaultCommandTimeout : 10000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require('cypress-mochawesome-reporter/plugin')(on);
    }
  },

});
