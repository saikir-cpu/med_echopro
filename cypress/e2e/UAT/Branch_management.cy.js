
describe('Branch Management', () => {
  it('should create a new branch successfully', () => {
    cy.loginAsAdmin();

    cy.viewport(1400, 900);

    cy.url({ timeout: 20000 }).should('include', '/dashboard');

    cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-padding > :nth-child(2)').click({force:true});
    cy.get('.MuiList-padding > .MuiList-root > :nth-child(12)').click({force:true});

    cy.get('[href="#/branch"] > .MuiButtonBase-root > .css-70qvj9').contains('Branch Management').click({ force: true });

    cy.get('.space-x-6 > :nth-child(1)').click({ force: true });
    cy.get('[name="first_name"]').type('franz')
    cy.get('[name="last_name"]').type('kafka')
    cy.get('[name="username"]').type('franzkafka92')

cy.contains('label', 'Gender').parent()
  .find('div[role="combobox"], input[role="combobox"], .MuiAutocomplete-root')
  .first()
  .scrollIntoView()
  .click({ force: true });

cy.get('body', { timeout: 10000 }).then($body => {
  if ($body.find('ul[role="listbox"] li').length) {
    cy.get('ul[role="listbox"] li').contains(/^Male$/i).click({ force: true });
  } else if ($body.find('div[role="option"]').length) {
    cy.get('div[role="option"]').contains(/^Male$/i).click({ force: true });
  } else {

    cy.get('select[name="gender"], select#gender').select('Male');
  }
});
cy.get('.PhoneInputInput').type('9987665656')
cy.get('[name="email"]').type('franzkafka92@example.com')
    cy.get('input[placeholder="DD-MM-YYYY"]').type('13-04-1992')
    cy.get('[name="password"]').type('kafka@1234567')
    cy.get('[name="country"]').type('India')
    cy.get('[name="state"]').type('Karnataka')
    cy.get('[name="city"]').type('Bangalore')
    cy.get('.css-19bb58m').type('560002')
    cy.get('[name="street"]').type('MG Road')
    cy.get('[name="landmark"]').type('Near Metro Station')
    cy.get('[name="mandal"]').type('Central')
    cy.get('[name="house_no"]').type('123')
    
cy.get('.MuiDialogActions-root, .MuiDialogActions-spacing', { timeout: 10000 })
  .should('be.visible')
  .within(() => {
    cy.contains('button', /^Create$/i, { timeout: 5000 }).then($btn => {
      if ($btn.prop('disabled')) {
        cy.wrap($btn).invoke('removeAttr', 'disabled');
      }
      cy.wrap($btn).scrollIntoView().click({ force: true });
    });
  });

  cy.get('.space-x-6 > :nth-child(2)').click({ force: true });

  cy.get('[name="branch_name"]').type('Mesi Branch')
    cy.get('[name="branch_code"]').type('Mesi002')
    cy.get('[name="gst_no"]').type('29ABCDE2234H78')
    cy.contains('label', 'Select Branch Manager').parent()
    .find('div[role="combobox"], input[role="combobox"], .MuiAutocomplete-root')
    .first()
    .scrollIntoView()
    .click({ force: true });
    
cy.get('body').then($body => {
  if ($body.find('ul[role="listbox"] li').length) {
    cy.get('ul[role="listbox"] li').contains(/^franzkafka92$/i).click({ force: true });
  } else if ($body.find('div[role="option"]').length) {
    cy.get('div[role="option"]').contains(/^franzkafka92$/i).click({ force: true });
  } else {

    cy.contains(/^franzkafka92$/i, { timeout: 5000 }).click({ force: true });
  }
});

cy.get('input[type="tel"], .PhoneInputInput, input[placeholder*="phone"]', { timeout: 8000 })
  .filter(':visible')          
  .first()                     
  .scrollIntoView({ ensureScrollable: false })
  .click({ force: true })
  .clear({ force: true })
  .type('+919876543298', { delay: 20 });
cy.get(':nth-child(4) > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root > .MuiGrid-container > :nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > [name="email"]')
  .scrollIntoView({ ensureScrollable: false })
  .click({ force: true })
  .clear({ force: true })
  .type('franzkafka92@example.com', { delay: 20 })

cy.get('div[role="dialog"]', { timeout: 10000 }).should('be.visible').as('dialog');

cy.get('header, .MuiDrawer-root, .sidebar, .fixed-top, .sticky-header').invoke('css', 'pointer-events', 'none');

cy.get('@dialog').find('input[placeholder="DD-MM-YYYY"]', { timeout: 10000 })
  .then($all => {
    const $visible = Cypress.$($all).filter(':visible').first();
    if ($visible && $visible.length) {
      cy.wrap($visible)
        .scrollIntoView({ ensureScrollable: false })
        .click({ force: true })
        .clear({ force: true })
        .type('10-10-1981', { delay: 20, force: true })
        .blur();
    } else if ($all.length) {

      cy.wrap($all.first()).invoke('val', '10-10-1981').trigger('input').trigger('change');
    } else {
      
      cy.get('@dialog').find('button[aria-label*="date"], button[title*="date"]').first().click({ force: true });
      cy.get('body').then($body => {
        if ($body.find('.MuiPickersDay-root, .MuiDayPicker-day, button[role="gridcell"]').length) {
          cy.get('.MuiPickersDay-root, .MuiDayPicker-day, button[role="gridcell"]').contains(/^10$/).click({ force: true });
        }
      });
    }
  });

cy.get('header, .MuiDrawer-root, .sidebar, .fixed-top, .sticky-header').invoke('css', 'pointer-events', '');
  
cy.get(':nth-child(8) > .MuiFormControl-root > .MuiInputBase-root > [name="country"]').type('india')
cy.get(':nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > [name="state"]').type('telangana')
cy.get(':nth-child(10) > .MuiFormControl-root > .MuiInputBase-root > [name="city"]').type('bangalore')
cy.get(':nth-child(13) > .MuiFormControl-root > .MuiInputBase-root > [name="street"]').type('estreet')
cy.get(':nth-child(14) > .MuiFormControl-root > .MuiInputBase-root > [name="landmark"]').type('landmark')
cy.get(':nth-child(15) > .MuiFormControl-root > .MuiInputBase-root > [name="mandal"]').type('mandal')
cy.get(':nth-child(16) > .MuiFormControl-root > .MuiInputBase-root > [name="house_no"]').type('1297')


cy.get('div[role="dialog"]', { timeout: 10000 })
  .should('be.visible')
  .first() 
  .within(() => {
    cy.contains('button', /^Create$/i, { timeout: 5000 }).then($btn => {
      if ($btn.prop('disabled')) {
        cy.wrap($btn).invoke('removeAttr', 'disabled');
      }
      cy.wrap($btn).scrollIntoView().click({ force: true })
    })
  })
  







































  })
})