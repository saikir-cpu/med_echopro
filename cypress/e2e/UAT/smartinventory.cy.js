describe('it should request stock through admin portal in inventory', () => {
  it('should request stock ', () => {
    cy.SmartloginAsAdmin();
    cy.viewport(1400, 900);

    // Go to Inventory
    cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > [href="#/inventory"] > .MuiButtonBase-root')
      .click({ force: true });

    // Open Request Stock
    cy.get('.p-3.gap-4 > .flex-col > .flex > :nth-child(1)')
      .click({ force: true });

    // Select pharmacy
    cy.contains('label', 'Select pharmacy')
      .parent()
      .find('div[role="combobox"]')
      .click({ force: true });

    cy.get('[data-value="1"] > .table-cell')
      .click({ force: true });

    // Select vendor
    cy.get('input[placeholder="Search vendor name here"]')
      .click({ force: true })
      .type('divya pharma');

    cy.get('li[role="option"]')
      .contains('divya pharma')
      .click({ force: true });

    const medicines = [
      { name: 'Aspirin', qty: 100 },
      { name: 'Aspirin', qty: 90 },
      { name: 'Aspirin', qty: 20 },
      { name: 'Aspirin', qty: 30 },
      { name: 'DOLO-650', qty: 30 },
      { name: 'dolo 650', qty: 45 },
      { name: 'LEVIPIL SYRUP', qty: 36 },
      { name: 'LEVIPIL 5ML', qty: 46 },
      { name: 'LEVIPIL 250', qty: 18 },
      { name: 'LEVIPIL 500', qty: 21 },
      { name: 'MONTEK LC', qty: 31 },
      { name: 'MONTEK LC', qty: 31 }, 
      { name:'MONTEK LC', qty:20},
       {name:'MONTEK LC', qty:50}, 
       {name:'MONTEK LC', qty: 20}, 
       { name: 'WINOPAM INJ 20ML', qty: 15 },
        { name: 'WINOPAM INJ 20ML', qty: 25 },
       { name: 'WINOPAM INJ 20ML', qty: 35 },
       { name: 'WINOPAM INJ 20ML', qty: 45 },
        {name: 'MONTAIR-LC', qty: 55},
         {name: 'FARMA TAB', qty: 85}, 
         {name: 'LEVIPIL SYRUP', qty: 36},
          {name: 'LEVIPIL 500', qty: 21},
           { name: 'Aspirin', qty: 100 },
      { name: 'Aspirin', qty: 90 },
      { name: 'Aspirin', qty: 20 },
      { name: 'Aspirin', qty: 30 },
      { name: 'DOLO-650', qty: 30 },
      { name: 'dolo 650', qty: 45 },
      { name: 'LEVIPIL SYRUP', qty: 36 },
      { name: 'LEVIPIL 5ML', qty: 46 },
      { name: 'LEVIPIL 250', qty: 18 },
      { name: 'LEVIPIL 500', qty: 21 },
      { name: 'MONTEK LC', qty: 31 },
      { name: 'MONTEK LC', qty: 31 }, 
      { name:'MONTEK LC', qty:20},
       {name:'MONTEK LC', qty:50}, 
       {name:'MONTEK LC', qty: 20}, 
       { name: 'WINOPAM INJ 20ML', qty: 15 },
        { name: 'WINOPAM INJ 20ML', qty: 25 },
       { name: 'WINOPAM INJ 20ML', qty: 35 },
       { name: 'WINOPAM INJ 20ML', qty: 45 },
        {name: 'MONTAIR-LC', qty: 55},
         {name: 'FARMA TAB', qty: 85}, 
         {name: 'LEVIPIL SYRUP', qty: 36},
          {name: 'LEVIPIL 500', qty: 21},
          { name: 'Aspirin', qty: 100 },
      { name: 'Aspirin', qty: 90 },
      { name: 'Aspirin', qty: 20 },
      { name: 'Aspirin', qty: 30 },
      { name: 'DOLO-650', qty: 30 },
      { name: 'dolo 650', qty: 45 },
      { name: 'LEVIPIL SYRUP', qty: 36 },
      { name: 'LEVIPIL 5ML', qty: 46 },
      { name: 'LEVIPIL 250', qty: 18 },
      { name: 'LEVIPIL 500', qty: 21 },
      { name: 'MONTEK LC', qty: 31 },
      { name: 'MONTEK LC', qty: 31 }, 
      { name:'MONTEK LC', qty:20},
       {name:'MONTEK LC', qty:50}, 
       {name:'MONTEK LC', qty: 20}, 
       { name: 'WINOPAM INJ 20ML', qty: 15 },
        { name: 'WINOPAM INJ 20ML', qty: 25 },
       { name: 'WINOPAM INJ 20ML', qty: 35 },
       { name: 'WINOPAM INJ 20ML', qty: 45 },
        {name: 'MONTAIR-LC', qty: 55},
         {name: 'FARMA TAB', qty: 85}, 
         {name: 'LEVIPIL SYRUP', qty: 36},
          {name: 'LEVIPIL 500', qty: 21},
           { name: 'Aspirin', qty: 100 },
      { name: 'Aspirin', qty: 90 },
      { name: 'Aspirin', qty: 20 },
      { name: 'Aspirin', qty: 30 },
      { name: 'DOLO-650', qty: 30 },
      { name: 'dolo 650', qty: 45 },
      { name: 'LEVIPIL SYRUP', qty: 36 },
      { name: 'LEVIPIL 5ML', qty: 46 },
      { name: 'LEVIPIL 250', qty: 18 },
      { name: 'LEVIPIL 500', qty: 21 },
      { name: 'MONTEK LC', qty: 31 },
      { name: 'MONTEK LC', qty: 31 }, 
      { name:'MONTEK LC', qty:20},
       {name:'MONTEK LC', qty:50}, 
       {name:'MONTEK LC', qty: 20}, 
       { name: 'WINOPAM INJ 20ML', qty: 15 },
        { name: 'WINOPAM INJ 20ML', qty: 25 },
       { name: 'WINOPAM INJ 20ML', qty: 35 },
       { name: 'WINOPAM INJ 20ML', qty: 45 },
        {name: 'MONTAIR-LC', qty: 55},
         {name: 'FARMA TAB', qty: 85}, 
         {name: 'LEVIPIL SYRUP', qty: 36},
          {name: 'LEVIPIL 500', qty: 21},
          { name:'MONTEK LC', qty:20},
       {name:'MONTEK LC', qty:50}, 
       {name:'MONTEK LC', qty: 20}, 
       { name: 'WINOPAM INJ 20ML', qty: 15 },
        { name: 'WINOPAM INJ 20ML', qty: 25 },
       { name: 'WINOPAM INJ 20ML', qty: 35 },
       { name: 'WINOPAM INJ 20ML', qty: 45 },
        {name: 'MONTAIR-LC', qty: 55},
         {name: 'FARMA TAB', qty: 85}, 
         {name: 'LEVIPIL SYRUP', qty: 36},
          {name: 'LEVIPIL 500', qty: 21},
           {name:'MONTEK LC', qty:50}, 
       {name:'MONTEK LC', qty: 20}, 
       { name: 'WINOPAM INJ 20ML', qty: 15 },
        { name: 'WINOPAM INJ 20ML', qty: 25 },
       { name: 'WINOPAM INJ 20ML', qty: 35 },
       { name: 'WINOPAM INJ 20ML', qty: 45 },
        {name: 'MONTAIR-LC', qty: 55},
         {name: 'FARMA TAB', qty: 85}, 
         {name: 'LEVIPIL SYRUP', qty: 36},
          {name: 'LEVIPIL 500', qty: 21},
      ]
    const searchedNames = new Set()

    cy.wrap(medicines).each((med, index) => {

      if (index > 0) {
        cy.get('button[aria-label="Add new row"]').click({ force: true });
      }

      cy.get('tbody.MuiTableBody-root > tr.MuiTableRow-root')
        .last()
        .as('currentRow')

      const medKey = med.name.toLowerCase()

      if (!searchedNames.has(medKey)) {
        cy.intercept('GET', '**/inventory/req-med-search/**').as('medSearch');
      }

     cy.get('@currentRow').within(() => {
  cy.get('input[placeholder="Search or enter manually"][role="combobox"]')
  .first()
    .click({ force: true })    // already scoped, no need for .first()
    .clear()
    .type(med.name, { delay: 50 });
});

// wait for API only for first time of this medicine (your logic)
if (!searchedNames.has(medKey)) {
  cy.wait('@medSearch', { timeout: 15000 });
  searchedNames.add(medKey);
}

// 🔍 wait for the dropdown listbox, then search *inside* it
cy.get('ul[role="listbox"]', { timeout: 15000 }).within(() => {
  cy.contains('li.MuiAutocomplete-option[role="option"]', med.name, {
    timeout: 15000,
    matchCase: false,
  })
    .should('be.visible')      // ensure the option is rendered
    .click({ force: true });
});

cy.get('@currentRow').within(() => {
  cy.get('input[placeholder="Quantity"]')
    .clear()
    .type(String(med.qty));
});
    })

    cy.contains('button', 'Send Request').click({ force: true })
  });
});
