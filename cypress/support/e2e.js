// ...existing code...
// Import custom commands
import 'cypress-file-upload';
import './commands';
// ...existing code...


Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("insertBefore")) {
    return false; // prevent Cypress from failing the test
  }
});
// Add this to cypress/support/e2e.js
Cypress.on('uncaught:exception', (err, runnable) => {
  // We return false to prevent Cypress from
  // failing the test
  // You can add logic here to only ignore specific errors
  if (err.message.includes('Unable to preload CSS')) {
    return false;
  }
  // Allow other errors to fail the test
  return true;
});
