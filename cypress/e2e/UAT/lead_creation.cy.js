describe('Lead Creation Test', () => {

    it('visits the website and create lead', () => {

        cy.visit('https://internal.medimind.in/');

        cy.get('#username').type(Cypress.env('username'))

        cy.get('#password').type(Cypress.env('password'))

        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/dashboard')

        cy.get('[href="/leads"] > .truncate').click()

        cy.get('a[href="/leads/add"] > .inline-flex').click({ force: true });

        cy.get('.via-fuchsia-500 > .flex > .rounded-md').first().click()

        cy.get('.space-y-6', { timeout: 10000 }).scrollIntoView();

        cy.get('.space-y-6 > :nth-child(2) > :nth-child(1) > .flex').type('kims hospital')

        cy.get('.space-y-6 > :nth-child(2) > :nth-child(2) > .flex').type('0240093')

        cy.get('button[role="combobox"][type="button"]').first().click({ force: true });

        cy.contains('Mid').click({ force: true });
      

        


        

        
})    
})