describe('Patient creation and payment validation', () => {

    it('visits the website and creates a patient and payment validation', () => {

        cy.visit('https://uat.medimind.in/')

        cy.get('[name="username"]').type('admin')

        cy.get('[name="password"]').type('admin@789')

        cy.get('.mt-4 > .MuiButtonBase-root').click()

          cy.url().should('include', '/dashboard')
     |                  

        

        cy.get('.MuiListItem-root').contains('Patients').click({force:true});

        cy.get('.justify-between.items-center > .flex > :nth-child(1)').click()

        cy.get('input[name="firstName"]')
               .should('exist')
               .and('be.visible')
               .type('kiran');


        cy.get('[name="lastName"]').type('kumar')

        cy.get('[name="age"]').type('30')

        cy.contains('label', 'Doctor Type').parent()
            .find('div[role="combobox"]')
            .click();

// Click Regular
cy.contains('li', 'Consultant').click();


cy.contains('label', 'Doctors')
  .parent()
  .find('div[role="combobox"]')
  .click({ force: true });

// 1. Click the main select field
cy.get('[data-testid="ArrowDropDownIcon"]').contains('')

cy.get('[data-value="103"] > .capitalize').click();
        



        

        
    

        




    
      

        


        

        
})    
})