 import 'cypress-file-upload';

describe('doctor creation', () => {

    it('visits the website and creates a doctor', () => {

        cy.visit('https://uat.medimind.in/')

        cy.get('[name="username"]').type('admin')

        cy.get('[name="password"]').type('admin@789')

        cy.get('.mt-4 > .MuiButtonBase-root').click()

          cy.url().should('include', '/dashboard')

    cy.get('.MuiDrawer-root > .MuiPaper-root > .MuiList-padding > :nth-child(2)').click({force: true})

    cy.get('[href="#/admin"] > .MuiButtonBase-root > .css-70qvj9').click({force: true})



    cy.get('.justify-between > .MuiButtonBase-root').click({force: true})

cy.contains('label', 'Role').parent().find('div[role="combobox"]').click();

cy.get('[data-value="doctor"] > .table-cell').click();

cy.contains('label', 'Department').parent().find('div[role ="combobox"]').click({force: true});

cy.get('[data-value="104"]').click({force: true});

cy.contains('label', 'Doctor Type').parent().find('div[role="combobox"]').click({force: true});  

cy.get('li[data-value="Consultant"]').click({force: true});  

cy.contains('label', 'Qualification').parent().find('div[role="combobox"]').click({force: true});

cy.get('li[data-value="46"]').click({force: true});

cy.get('input[name="first_name"]').type('andy')

cy.get('input[name="last_name"]').type('dostoevsky')

cy.get('[name="username"]').type('fyoder92')

cy.get('input[placeholder="DD-MM-YYYY"]').type('12-12-1961')

cy.get('[name="email"]').type('fyodo.psyche@gmail.com')

cy.get('input[value="+91"]').type('9876543219')

cy.contains('label','Gender').parent().find('div[role="combobox"]').click({force: true});

cy.get('li[data-value="M"]').click({force: true});

cy.get('input[name="password"]').click().type('ggyodorqq@70');

cy.get('[name="experience"]').type('25')

cy.get('input[name="op_fee"]').type('500')

cy.get('[name="license"]').type('MEDIG423456')

cy.get('[name="op_validity_days"]').type('30')

cy.get('button[variant="contained"]').click()

cy.get('.mt-4').contains('Browse File').click({force: true});


cy.get('.flex > .bg-blue-600').click()

const fileName = '6658266.png';

cy.get('input[type="file"]').attachFile(fileName);



    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    days.forEach(day => {
      
      cy.get(`input[type="checkbox"][name="${day}"]`).check({ force: true });

      
      cy.get(`input[name="${day}"]`).eq(1)   
        .clear()
        .type('09:00')
        .should('have.value', '09:00'); 

  
      cy.get(`input[name="${day}"]`).eq(2)   // To input
        .clear()
        .type('17:00')
        .should('have.value', '17:00')
    });
    cy.get('.MuiDialogActions-root > .flex > .MuiButton-contained').click()
    
  });
});


  



          

          

          
  



              