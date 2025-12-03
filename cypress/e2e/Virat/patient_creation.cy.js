describe('Virat hospital general flows Creation', () => {
    it('it should create a patient', () => {
        cy.loginasadmin();
         cy.viewport(1400, 900);


        cy.url().should('include', '/dashboard')
        cy.contains('span', /^Patients$/i, { timeout: 10000 })
  .closest('button, [role="button"], .MuiButtonBase-root')
  .first()
  .click({ force: true });

  cy.contains('button', /^In Patient$/i, { timeout: 5000 })
  .filter(':visible')
  .first()
  .then($btn => {
    const cls = $btn.attr('class') || '';
    const ariaPressed = $btn.attr('aria-pressed');
    const ariaSelected = $btn.attr('aria-selected');
    // common signals for an active/highlighted tab: selected/active class or aria attribute true or utility bg/text class
    const isHighlighted = /selected|active|Mui-selected|bg-|text-white/.test(cls) || ariaPressed === 'true' || ariaSelected === 'true';
    expect(isHighlighted, 'In Patient tab should be highlighted by default').to.be.true;
  });
  cy.contains('button', /^Create Patient$/i, { timeout: 5000 })
    .filter(':visible')
    .first()
    .scrollIntoView({ ensureScrollable: false })
    .click({ force: true });
    cy.get('[name="firstName"]').type('srikanth tiwari',{force: true})
    cy.get('[name="age"]').type('46',{force: true})
    cy.contains('label', 'Doctor Type').parent().find('div[role="combobox"]').click({force: true});
    cy.get('li[data-value="Regular"]').click({force: true});
    cy.contains('label', 'Doctors').parent().find('div[role="combobox"]').click({force: true});
    // ...existing code...

// select "Doctor First - ( MBBS )" from the visible options
cy.get('body')
  .find('ul[role="listbox"] li[role="option"], div[role="option"], li.MuiMenuItem-root')
  .filter(':visible')
  .contains(/doctor\s*first.*mbbs/i)
  .first()
  .click({ force: true });
  // ...existing code...

// open the datepicker (click calendar icon / choose date button)
cy.get('button[aria-label="Choose date"], button:has(svg[data-testid="CalendarIcon"])')
  .filter(':visible')
  .first()
  .scrollIntoView({ ensureScrollable: false })
  .click({ force: true });

// pick a date in the current month (uses today's day number)
const day = new Date().getDate();
cy.get('body', { timeout: 8000 })
  .find('button[role="gridcell"], td[role="gridcell"] button, div[role="option"], ul[role="listbox"] li')
  .filter(':visible')
  .contains(new RegExp(`^${day}$`))
  .first()
  .click({ force: true });

  cy.get(':nth-child(24) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})
  cy.get('[data-timestamp="1762972200000"]').last().click({ force: true });

  cy.contains('span', '18:25 - 18:30').click({force:true});
  cy.contains('label', 'Payment Method')
  .siblings('select')
  .select('Paytm')
  cy.get('.grid > :nth-child(3) > .w-full').type('6281335792@ybl',{force: true})
 // If you know it's the LAST "Create" button on the page
// Finds a button with that specific blue background class,
// then finds the one with the text "Create"
// Matches "Create" OR "Create ..."
cy.contains('button', /^Create( \.\.\.)?$/)
  .click({ force: true });
})
it('check the functionality of  assigned services are displayed in the oupatients profile', () => {
    cy.loginasadmin();
    cy.viewport(1400, 900);
    cy.url().should('include', '/dashboard');
    cy.contains('span', /^Patients$/i, { timeout: 10000 })
      .closest('button, [role="button"], .MuiButtonBase-root')
      .first()
      .click({ force: true });
      cy.get(':nth-child(1) > :nth-child(1) > .justify-between > .flex > :nth-child(2)').click({ force: true });
   cy.contains('a', 'P00033').click({force: true});
      // Verify all key labels are visible on the profile
  // cy.contains('pearl').should('be.visible');
    //cy.contains('a', 'P00034').should('be.visible');
    //cy.contains('12-11-2025').should('be.visible');
    //cy.contains('th', 'Services').should('be.visible');
    //cy.get(':nth-child(8) > .px-4').click({force: true});
    // Example: Find the row containing "Services", then find the "Add" button *within* that row
cy.contains('tr', 'Services').find('button', 'Add').click()
    cy.get('input[placeholder="Search Service"]').type('ambu')

// Wait for "Ambulance" to be visible, then click
cy.contains('Ambulance')
  .should('be.visible')
  .click();
  cy.contains('span', 'Quantity')
  .parents('div.MuiInputBase-root')
  .find('input[type="number"]')
  .type('1');

  cy.get(':nth-child(8) > .px-4').click({force: true});


  })
})
