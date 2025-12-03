describe('Virat hospital general flows Creation', () => {
    it('it should create a department', () => {
        cy.loginasadmin();
         cy.viewport(1400, 900);


        cy.url().should('include', '/dashboard')

        cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({force: true})
        cy.get('[href="#/department"] > .MuiButtonBase-root > .css-70qvj9').click({force: true})
        cy.get('input.search[placeholder="Enter Department Name"]').type('Cardiology',{force: true})

        cy.get('.flex > .px-4').click({force: true})



    })
    it('it should create a qualification', () => {
        cy.loginasadmin();
         cy.viewport(1400, 900);

        cy.url().should('include', '/dashboard')

        cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({force: true})
        cy.get('[href="#/qualification"] > .MuiButtonBase-root > .css-70qvj9').click({force: true})
        cy.get('input[placeholder="Enter Qualification Name"]').type('MS - General Surgery')
        cy.get('.flex > .px-4').click({force: true})



    })
    it('it should create a doctor', () => {
        cy.loginasadmin();
         cy.viewport(1400, 900);
        cy.url().should('include', '/dashboard')

        cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({force: true})
        cy.get('[href="#/admin"] > .MuiButtonBase-root > .css-70qvj9').click({force: true})
    cy.contains('User Control').click({force: true})

         cy.get('a, button').contains(/^User Control$/i, { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });
    cy.get('.justify-between > .px-4').click({force: true});

cy.contains('label', 'Role').parent().find('div[role="combobox"]').click();
cy.get('[data-value="doctor"] > .table-cell').click();
cy.contains('label', 'Department').parent().find('div[role ="combobox"]').click({force: true});
cy.get('.MuiMenuItem-root[data-value="4"]').click();
cy.contains('label', 'Doctor Type').parent().find('div[role="combobox"]').click({force: true});  
cy.get('li[data-value="Consultant"]').click({force: true});  
cy.contains('label', 'Qualification').parent().find('div[role="combobox"]').click({force: true});
cy.get('.MuiMenuItem-root[data-value="2"]').click();
cy.get('input[name="first_name"]').type('Virat')
cy.get('input[name="last_name"]').type('themonster')
cy.get('[name="username"]').type('viratmon01')
cy.get('input[placeholder="DD-MM-YYYY"]').type('05-11-1988')
cy.get('[name="email"]').type('virat.kohlimon@example.com')
cy.get('input[value="+91"]').type('9123456780')
cy.contains('label','Gender').parent().find('div[role="combobox"]').click({force: true});
cy.get('li[data-value="M"]').click({force: true});
cy.get('input[name="password"]').click().type('Virat@27102025');
cy.get('[name="experience"]').type('15')
cy.get('input[name="op_fee"]').type('700')
cy.get('[name="license"]').type('MEDIG12345')
cy.get('[name="op_validity_days"]').type('60')

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

    cy.get('button[type="submit"].text-white').click({force: true});





    })

    it('update the service price in the services and procedures ', () => {
    cy.loginasadmin();
    cy.viewport(1400, 900);
    cy.url().should('include', '/dashboard');
    cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({force: true});
    cy.get('.MuiList-padding > .MuiList-root > :nth-child(14)').click({force: true});
    cy.get('[href="#/ip_master/Services_Procedure"] > .MuiButtonBase-root').click({force: true});

    // ...existing code...

// assert "Ambulance" service is present and visible in the services table
cy.get('table.MuiTable-root tbody', { timeout: 10000 })
  .contains('h1.table-cell', /^Ambulance$/i)
  .should('be.visible')
  .closest('tr')
  .as('ambulanceRow');

// optional validations inside that row
cy.get('@ambulanceRow').within(() => {
  // validate first cell is an id (numeric)
  cy.get('td').eq(0).find('h1.table-cell').invoke('text').then(t => {
    expect(t.trim()).to.match(/^\d+$/);
  });

  // validate the service name cell contains Ambulance
  cy.contains('h1.table-cell', /^Ambulance$/i).should('exist').and('be.visible');

  // if price appears in a known column (e.g. 4th column), check it's numeric and visible
  cy.get('td').eq(3).invoke('text').then(txt => {
    const n = Number(txt.replace(/[^0-9.]/g, ''));
    expect(n).to.be.a('number');
  });
});









    })




})