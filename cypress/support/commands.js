// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
import 'cypress-file-upload';
// ...existing code...
// Import custom commands
import './commands';
// ...existing code...
Cypress.Commands.add('loginAsAdmin', () => {
  cy.visit('https://rpsa.medimind.in/#/');

  cy.get('[name="username"]').type('Admin');
  cy.get('[name="password"]').type('Rpsa@15102025');

  
  cy.get('button[type="submit"]').click();

  
  cy.url().should('include', '/dashboard'); 

  
  
});


Cypress.Commands.add('loginAsAdmin', () => {
  
  cy.visit('https://uat.medimind.in/', { timeout: 120000, failOnStatusCode: false });

  
  cy.get('input[name="username"]', { timeout: 40000 })
    .should('be.visible')
    .type('admin')

  cy.get('input[name="password"]')
    .should('be.visible')
    .type('mind@345')

  
  cy.get('button[type="submit"]')
    .should('be.enabled')
    .click();

  cy.get('.dashboard-container, .MuiDrawer-root, .sidebar', { timeout: 60000 })
    .should('be.visible');
});

Cypress.Commands.add('loginasadmin', () => {

  cy.visit('https://virat.medimind.in/', { timeout: 120000, failOnStatusCode: false });

  
  cy.get('input[name="username"]', { timeout: 40000 })
    .should('be.visible')
    .type('anil')

  cy.get('input[name="password"]')
    .should('be.visible')
    .type('Virat@27102025')

  
  cy.get('button[type="submit"]')
    .should('be.enabled')
    .click();

  cy.get('.dashboard-container, .MuiDrawer-root, .sidebar', { timeout: 60000 })
    .should('be.visible');
});

Cypress.Commands.add('loginAsPharmacist', () => {
  
  cy.visit('https://uat.medimind.in/', { timeout: 120000, failOnStatusCode: false });

  
  cy.get('input[name="username"]', { timeout: 40000 })
    .should('be.visible')
    .type('Divyaas')

  cy.get('input[name="password"]')
    .should('be.visible')
    .type('mind@345')

  
  cy.get('button[type="submit"]')
    .should('be.enabled')
    .click();

  cy.get('.dashboard-container, .MuiDrawer-root, .sidebar', { timeout: 60000 })
    .should('be.visible');
});
Cypress.Commands.add('validateFeeCard', (label, amount) => {
  // 1. Search for text case-insensitively (RegExp)
  // 2. Do not restrict to 'p' tags
  cy.contains(new RegExp(label, "i"))
    .closest('div') // Safely finds the closest parent container (the card)
    .click({ force: true })
    .find('h2')
    .should('contain.text', amount);
});
Cypress.Commands.add('loginAsStaff', () => {
  
  cy.visit('https://uat.medimind.in/', { timeout: 120000, failOnStatusCode: false });

  
  cy.get('input[name="username"]', { timeout: 40000 })
    .should('be.visible')
    .type('naveen')

  cy.get('input[name="password"]')
    .should('be.visible')
    .type('rootroot')

  
  cy.get('button[type="submit"]')
    .should('be.enabled')
    .click({force:true});

  
});

Cypress.Commands.add('loginAsDoctor', () => {
  
  cy.visit('https://uat.medimind.in/', { timeout: 120000, failOnStatusCode: false });

  
  cy.get('input[name="username"]', { timeout: 40000 })
    .should('be.visible')
    .type('avinashkumar')

  cy.get('input[name="password"]')
    .should('be.visible')
    .type('Avinash@123')

  
  cy.get('button[type="submit"]')
    .should('be.enabled')
    .click({force:true});

  
});
