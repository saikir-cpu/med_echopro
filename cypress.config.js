const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-gpu-shader-disk-cache');
          launchOptions.args.push('--disable-gpu-program-cache');
        }
        return launchOptions;
      });
    },
  },
});
