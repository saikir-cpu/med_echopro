describe('Virat hospital general flows Creation', () => {
    it('it should create a patient', () => {
        cy.loginASAdmin()
         cy.viewport(1400, 900)


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
  })
  cy.contains('button', /^Create Patient$/i, { timeout: 5000 })
    .filter(':visible')
    .first()
    .scrollIntoView({ ensureScrollable: false })
    .click({ force: true });
    cy.contains('button', 'In patient').click({force:true});
    cy.get('[name="firstName"]').type('Albert Einstein')
    cy.get('[name="age"]').type('66')
    cy.get('div[tabindex="0"][role="combobox"]', { timeout: 10000 })
  .filter(':visible')
  .first()
  .scrollIntoView({ ensureScrollable: false })
  .click({ force: true })
cy.get('ul[role="listbox"] li[role="option"], div[role="option"]', { timeout: 8000 })
  .filter(':visible')
  .contains(/^Male$/i)
  .click({ force: true })
  // Click on Patient Type dropdown (using the input name attribute)
cy.get('input[name="patient_type"]')
  .parent()
  .find('div[role="combobox"]')
  .scrollIntoView({ ensureScrollable: false })
  .click({ force: true })

// Wait for dropdown options and select "Cash"
cy.get('ul[role="listbox"] li[role="option"], div[role="option"]', { timeout: 8000 })
  .filter(':visible')
  .contains(/^Cash$/i)
  .click({ force: true })
  // Click on Tariff Type dropdown (using label)
cy.contains('label', 'Tariff Type')
  .parent()
  .find('div[role="combobox"]')
  .scrollIntoView({ ensureScrollable: false })
  .click({ force: true });

// Wait for dropdown options and select "Cash"
cy.get('ul[role="listbox"] li[role="option"], div[role="option"]', { timeout: 8000 })
  .filter(':visible')
  .contains(/^Self$/i)
  .click({ force: true });
  // Click Next button (first visible)
cy.contains('button', /^Next$/i)
  .filter(':visible')
  .first()
  .scrollIntoView({ ensureScrollable: false })
  .click({ force: true });
  // Click on Admission Type dropdown (using label)
cy.contains('label', 'Admission Type')
  .parent()
  .find('div[role="combobox"]')
  .scrollIntoView({ ensureScrollable: false })
  .click({ force: true });

// Wait for dropdown options and select "Emergency"
cy.get('ul[role="listbox"] li[role="option"], div[role="option"]', { timeout: 8000 })
  .filter(':visible')
  .contains(/^Emergency$/i)
  .click({ force: true });
  // Click on Doctors dropdown
cy.contains('label', 'Doctors')
  .parent()
  .find('div[role="combobox"]')
  .scrollIntoView({ ensureScrollable: false })
  .click({ force: true });

// Wait for dropdown options and select "pandu p"
cy.get('ul[role="listbox"] li[role="option"], div[role="option"]', { timeout: 8000 })
  .filter(':visible')
  .contains(/^pandu p$/i)
  .click({ force: true });

    






})
})