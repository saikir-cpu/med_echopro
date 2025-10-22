# Copilot Instructions for AI Agents

## Project Overview
This project is a Node.js workspace focused on payment validation testing using Cypress. The main test logic is now located in `cypress/e2e/paymentvalidation.cy.js`.

## Architecture
- **Test-Driven Structure:** All business logic is implemented as Cypress tests in the `cypress/e2e/` directory.
- **No Backend/Frontend Separation:** There is no clear separation between backend and frontend code; the focus is on end-to-end test automation.
- **Test Files:** The main test file is `cypress/e2e/paymentvalidation.cy.js`, which contains a Cypress test suite for visiting a website, logging in, and creating a lead.

## Developer Workflows
- **Testing:**
  - Cypress is the main testing tool. To run tests, install dependencies and use Cypress CLI.
  - No custom test scripts are defined in `package.json` (default test script is a placeholder).
  - Example commands:
    - `npm install` (to install dependencies)
    - `npx cypress open` or `npx cypress run` (to run tests)
  - Test files are placed in `cypress/e2e/` and use the `.cy.js` naming convention.
- **No Build Step:**
  - There is no build process or transpilation; all code is plain JavaScript.
- **No Linting/Formatting:**
  - No linting or formatting tools are configured.

## Conventions & Patterns
- **Test Naming:**
  - Test suites use descriptive names (e.g., `'it should visit website and create a lead'`).
  - Each test case is wrapped in an `it()` block.
- **Directory Structure:**
  - All test files are placed under `cypress/e2e/` and named with the `.cy.js` suffix.
- **Dependencies:**
  - Only Cypress is listed as a dev dependency.

## Integration Points
- **External Services:**
  - Tests interact with external/internal websites for payment validation and lead creation. Example: `https://internal.medimind.in/`.
- **No API/Database Integration:**
  - There is no direct integration with APIs or databases.

## Example Patterns
```js
// cypress/e2e/paymentvalidation.cy.js

describe(' it should visit website and create a lead', () => {
    it('visits the website and create lead', () => {
        cy.visit('https://internal.medimind.in/')
        cy.get('#username').type('admin')
        cy.get('#password').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.url().should('include', '/dashboard')
        cy.get('[href="/leads"] > .truncate').click()
        cy.get('a[href="/leads/add"] > .inline-flex').click({ force: true });
        cy.get('.via-fuchsia-500 > .flex > .rounded-md').click()
        cy.get('.space-y-6', { timeout: 10000 }).scrollIntoView();
        cy.get('.space-y-6 > :nth-child(2) > :nth-child(1) > .flex').type('kims hospital')
        cy.get('.space-y-6 > :nth-child(2) > :nth-child(2) > .flex').type('0240093')
        cy.get('.space-y-6', { timeout: 10000 }).should('be.visible');
        cy.get('[data-cy="patient-type-select"]').select('Mid', { force: true });
    })    
})
```

## Key Files
- `cypress/e2e/paymentvalidation.cy.js`: Main Cypress test suite
- `package.json`: Project metadata and dependencies

## Recommendations for AI Agents
- Focus on expanding Cypress test coverage in `cypress/e2e/`.
- Follow the `.cy.js` naming convention and descriptive test suite/case names.
- If adding new workflows (build, lint, etc.), document them in this file and update `package.json` accordingly.

---
_Last updated: September 25, 2025_
