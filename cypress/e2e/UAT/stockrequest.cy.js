describe('it should request stock through admin portal in inventory', () => {
it('should request stock ', () => {
cy.loginASAdmin()
cy.viewport(1400, 900)
cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > [href="#/inventory"] > .MuiButtonBase-root').click({force:true})
cy.get('.p-3.gap-4 > .flex-col > .flex > :nth-child(1)').click({force:true})
cy.contains('label', 'Select pharmacy')
  .parent()
  .find('div[role="combobox"]')
  .click({force:true});
  cy.get('[data-value="1"] > .table-cell').click({force:true})
/*cy.contains('label', 'Vendor')
  .parent()
  .find('input[role="combobox"]')
  .click({force:true})
  .type('medplus')
  .click({force:true})*/
  // Click vendor search field and type text
cy.get('input[placeholder="Search vendor name here"]')
  .click({force:true})
  .type('medplus');

// Select option
cy.get('li[role="option"]')
  .contains('medplus')
  .click({force:true})
// Click and type
cy.contains('label', 'Medicine Name')
  .parent()
  .find('input[role="combobox"]')
  .click({force:true})
  .type('Aspirin 75mg - 75mg')
  cy.get('li[role="option"]')
  .contains('Aspirin 75mg - 75mg')
  .click({force:true})
  cy.get('input[placeholder="Quantity"]').type('100')
  cy.get('button[aria-label="Add new row"]').click({force:true});

  //cy.contains('button','Send Request').click({force:true})
 



























})
})