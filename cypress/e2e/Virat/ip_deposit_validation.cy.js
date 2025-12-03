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
    cy.contains('button', 'In patient').click({force:true});
    cy.get('[name="firstName"]').type('Albert Einstein')
    
    






})
})