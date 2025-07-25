const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout:6000,
  env:{
    url: "https://rahulshettyacademy.com"
  }, 
  projectId:"74miaj",
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/Integration/examples/*.js'
  },
});
