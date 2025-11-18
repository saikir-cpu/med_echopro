describe('Staff Billing Validation', () => {
it('should validate billing records for patients', () => {
cy.loginAsStaff()
cy.viewport(1400, 900);
cy.contains('Create Patient').click({ force: true });
cy.get('input[name="firstName"]').type('outpatient');
cy.get('input[name="lastName"]').type('billing');
cy.get('input[name="age"]').type('30');
cy.contains('label', 'Gender')
  .parent()
  .find('[role="combobox"]')
  .click({ force: true });
cy.get('[role="listbox"]').should('be.visible');
cy.get('[role="option"]').contains('Male').click({ force: true });
cy.contains('label', 'Doctor Type')
  .parent()
  .find('[role="combobox"]')
  .click({ force: true });
cy.get('[role="option"]').contains('Regular').click({ force: true });
cy.contains('label', 'Doctors')
  .parent()
  .find('[role="combobox"]')
  .click({ force: true });
  cy.get('[role="option"]')
  .find('h1') 
  .contains('Neurology neuro - ( MBBS )')
  .click({ force: true });
 cy.contains('label', 'Select Appointment')
  .parent()
  .find('button') 
  .click({ force: true });
cy.get('[role="grid"]').should('be.visible');
cy.get('button[role="gridcell"]').contains('20').click({force:true});
cy.contains('span', '11:45 - 11:50').click({ force: true });
  
// cy.get('.grid > :nth-child(2) > .w-full').click({ force: true });
cy.contains('label', 'Payment Method').parent()
  .find('select')
  .select('Cash');
  cy.get('[role="dialog"]')
  .contains('button', 'Create')
  .click({ force: true });
  cy.contains('button', 'Yes, Print').click({ force: true });





















})
})