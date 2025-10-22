// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
import 'cypress-file-upload';

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
//// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })