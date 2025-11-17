// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
import 'cypress-file-upload';
// ...existing code...
// Import custom commands
import './commands';
// ...existing code...

Cypress.Commands.add('loginAsPharmacist', () => {
  cy.visit('https://uat.medimind.in/');

  
  cy.get('[name="username"]').type('anil');   
  cy.get('[name="password"]').type('admin@123');     

  
  cy.get('button[type="submit"]').click();

  
  cy.url().should('include', '/dashboard'); 

  
  
});

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
    .type('admin')

  cy.get('input[name="password"]')
    .should('be.visible')
    .type('Virat@27102025')

  
  cy.get('button[type="submit"]')
    .should('be.enabled')
    .click();

  cy.get('.dashboard-container, .MuiDrawer-root, .sidebar', { timeout: 60000 })
    .should('be.visible');
});
