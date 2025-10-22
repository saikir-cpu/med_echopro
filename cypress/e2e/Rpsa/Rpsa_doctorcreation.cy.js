describe('doctor creation', () => {

    it('visits the website and creates a doctor', () => {

        cy.loginAsAdmin();

        cy.get(':nth-child(2) > .css-70qvj9').click({force: true})

        cy.contains('User Control').click({force: true})

         cy.get('a, button').contains(/^User Control$/i, { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });

    cy.get('.justify-between > .px-4').click({force: true});

    cy.contains('label', 'Role').parent().find('div[role="combobox"]').click();

    cy.get('[data-value="doctor"] > .table-cell').click();

    cy.contains('label', 'Department').parent().find('div[role ="combobox"]').click({force: true});

    cy.get('[data-value="8"]').click({force: true});

    cy.contains('label', 'Doctor Type').parent().find('div[role="combobox"]').click({force: true});

    cy.get('li[data-value="Consultant"]').click({force: true});

    cy.contains('label', 'Qualification').parent().find('div[role="combobox"]').click({force: true});

    cy.get('[data-value="13"]').click({force: true});

    cy.get('input[name="first_name"]').type('franz')

    cy.get('input[name="last_name"]').type('kafka')

    cy.get('[name="username"]').type('kafka94')

    cy.get('input[placeholder="DD-MM-YYYY"]').type('12-12-1961')

    cy.get('[name="email"]').type('franzkafka94@example.com')

    cy.get('input[value="+91"]').type('9876543210')

    cy.contains('label','Gender').parent().find('div[role="combobox"]').click({force: true});

    cy.get('li[data-value="M"]').click({force: true});

    cy.get('input[name="password"]').click().type('franzkafka@70');

    cy.get('[name="experience"]').type('25')


    cy.get('input[name="op_fee"]').type('500')

cy.get('[name="license"]').type('MEDIG42364')

cy.get('[name="op_validity_days"]').type('30')

cy.get('button[variant="filled"]').click({force: true}).then(() => {
    cy.get('.mt-4').contains('Browse File').click({force: true});
});
cy.get('.flex > .mt-4').click({force: true})

const fileName = '6658266.png';

cy.get('input[type="file"]').attachFile(fileName);

cy.get('.flex > .bg-blue-600').click({force: true})



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

    cy.get('button[type="submit"]').contains('Create').click({force: true})



        



    })

    })
