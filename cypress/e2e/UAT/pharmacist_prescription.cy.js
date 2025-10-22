describe('Pharmacist orders medicine and downloads receipt', () => {
  it('logs in, orders medicine, and downloads receipt', () => {
    // Visit login page
    cy.visit('https://uat.medimind.in/');

    // Login as pharmacist
    cy.get('[name="username"]').type('anil');
    cy.get('[name="password"]').type('admin@123');
    cy.get('.mt-4 > .MuiButtonBase-root').click();
cy.url().should('include', '/dashboard');

cy.contains('Create Customer').click();
  
  })
})