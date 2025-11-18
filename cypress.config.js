const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');
const os = require('os');
const pdf = require('pdf-parse');

module.exports = defineConfig({
  e2e: {
    // default downloads folder (user Downloads). Override in env if needed.
    env: {
      downloadsFolder: path.join(os.homedir(), 'Downloads')
    },
    setupNodeEvents(on, config) {
      on('task', {
        // returns full path to the most recent file starting with prefix in folder
        findLatestDownload({ folder, prefix }) {
          try {
            const files = fs.readdirSync(folder)
              .filter(f => f.startsWith(prefix))
              .map(f => ({ name: f, mtime: fs.statSync(path.join(folder, f)).mtimeMs }));
            if (!files.length) return null;
            files.sort((a, b) => b.mtime - a.mtime);
            return path.join(folder, files[0].name);
          } catch (err) {
            // return null on error so test can assert
            return null;
          }
        },

        // read PDF file and return extracted text
        async readPdf({ filePath }) {
          try {
            const dataBuffer = fs.readFileSync(filePath);
            const data = await pdf(dataBuffer);
            return data.text;
          } catch (err) {
            return null;
          }
        }
      });

      return config;
    }
  }
});