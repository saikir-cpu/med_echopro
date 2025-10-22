
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Pharmacist orders medicine and downloads receipt', () => {
  it('logs in, orders medicine, and downloads receipt', () => {
    // Visit login page
    cy.visit('https://uat.medimind.in/');

    // Login as pharmacist
    cy.get('[name="username"]').type('anil');
    cy.get('[name="password"]').type('admin@123');
    cy.get('.mt-4 > .MuiButtonBase-root').click();


cy.url().should('include', '/dashboard');


cy.get('a[href="#/pharmacist"]', { timeout: 10000 }).should('be.visible').click();

cy.get('tr td button[type="submit"]').first().click({force: true});

cy.readFile('cypress/downloads/prescription_4468_TcvaEWl.pdf', 'binary').then((pdfContent) => {
  expect(pdfContent).to.exist;
  expect(pdfContent.length).to.be.greaterThan(0);

});





})


})


