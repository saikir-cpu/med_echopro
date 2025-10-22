Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('insertBefore')) {
    return false; // prevent Cypress from failing the test
  }
});

describe('Prescription validation workflow: doctor to pharmacist', () => {
    it('Doctor logs in, views patient, generates prescription', () => {

        cy.visit('https://uat.medimind.in/')
        
        cy.get('[name="username"]').type('avinashkumar')

        cy.get('[name="password"]').type('Avinash@123')

        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/dashboard')

        cy.get('ul.MuiList-root').contains('Patients').click({force:true});

        cy.contains('Appointments')
        .should('be.visible').click({force:true});

        cy.contains('P0365').scrollIntoView().should('be.visible').click({force:true});
         cy.get('.MuiList-root > [tabindex="-1"]').click({force:true})

//         cy.get('tr td > svg ')
//   .contains('+')
//   .click();
//cy.get('.MuiTableCell-alignCenter > .px-4 > svg').click({force:true})

// cy.get('input[placeholder="Search by Medicine Name"]')
  //  .type('Paracetamol{enter}');

  // Verify medicine appears in results
  //cy.get('input[placeholder="Quantity"]').type('3')
  //cy.get('input[placeholder="Duration"]').type('3')

  
 
 cy.visit('https://uat.medimind.in/')


         cy.get('[name="username"]').type('anil')

        cy.get('[name="password"]').type('admin@123')

        cy.get('button[type="submit"]').click()

        cy.url().should('include', '/dashboard')

        cy.get('a[href="#/retail-details"]').contains('Sales').click({force:true})
        
        cy.get(':nth-child(1) > :nth-child(5) > .px-4').click({force:true})

    cy.get('.lucide.lucide-eye').click({force:true})

    cy.wait(2000)

    cy.contains('Submit').click()

    cy.contains('pay now').click({force:true})

    cy.contains('Cash').click({force:true})

    cy.get('.mb-3 > .px-4').click({force:true})

    
});
})  

