describe('it should request stock through admin portal in inventory', () => {
  it('should request stock ', () => {
    cy.loginASAdmin();
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
      .type('medplus');

    cy.get('li[role="option"]')
      .contains('medplus')
      .click({ force: true });

    // -------------------------------------------------
    // ADD MULTIPLE MEDICINES ROW BY ROW
    // -------------------------------------------------
    const medicines = [
      { name: 'Aspirin 75mg - 75mg', qty: 100 },
      { name: 'Atorvastatin 10mg', qty: 30 }, 
      { name: 'Aspadol 75 Tablet', qty: 10 },
      { name: 'Aspisol 150 Tablet', qty: 40 },
      { name: 'Bradia', qty: 15 },
      { name: 'Brainstar', qty: 35 },
      { name: 'Bract 400mg Tablet', qty: 80 },
      { name: 'Braclin 150mg Capsule', qty: 45 },
      { name: 'Braclin 300mg Capsule', qty: 55 },
      { name: 'Brace 100mg Capsule', qty: 20 },
      { name: 'Brace 50mg Syrup', qty: 70 },
      { name: 'Brainrep 90mg Tablet', qty: 90 },
      { name: 'BrainStar OD', qty: 65 },
      { name: 'Bradilex Syrup', qty: 11 },
      { name: 'Brag Eye Drops', qty: 22 },
      { name: 'Cambro LS Syrup', qty: 33 },
      { name: 'cam plus', qty: 44 },
      { name: 'camdem', qty: 12 },
      { name: 'DART TAB', qty: 23 },
      { name: 'Darinac SP Tablet', qty: 34 },
      { name: 'Daramin 25mg Tablet', qty: 45 },
      { name: 'Darinacin', qty: 16 },
      { name: 'Darcept 40 Injection', qty: 27 },
      { name: 'Espauz', qty: 38 },
      { name: 'Espzone', qty: 19 },
      { name: 'Espril', qty: 29 },
      { name: 'Espentral 40mg injection', qty: 39 },
      { name: 'Esp 40mg Injection', qty: 29 },
      { name: 'Espam plus', qty: 19 },
      { name: 'Espi cold Syrup', qty: 9 },
      { name: 'Espra 20mg Tablet', qty: 14 },
      { name: 'Edeflox', qty: 24 },
      { name: 'Edema Forte Tablet', qty: 6 },
      { name: 'FARMA TAB', qty: 6 },
      { name: 'Farlutal', qty: 18 },
      { name: 'Farogud Tablet', qty: 28 },
      { name: 'Insulin', qty: 8 },
      { name: 'LEVOSULF', qty: 13 },
      { name: 'LEVOFLOX-500MG', qty: 26 },
      { name: 'LEVIPIL SYRUP', qty: 36 },
      { name: 'LEVIPIL 5ML', qty: 46 },
      { name: 'LEVIPIL 250', qty: 18 },
      { name: 'LEVIPIL 500', qty: 21 },
      { name: 'MONTEK LC', qty: 31 },
      { name: 'MONOCEF 500MG', qty: 21 },
      { name: 'MONOCEF 1GM', qty: 11 },
      { name: 'MONTAZ', qty: 15 },
      { name: 'monocef 1g', qty: 5 },
      { name: 'WINOPAM INJ 20ML', qty: 15 },
      { name: 'WINOPAM INJ 20ML', qty: 25 },
      { name: 'WINOPAM INJ 20ML', qty: 35 },
      { name: 'WINOPAM INJ 20ML', qty: 45 },
      {name: 'MONTAZ', qty: 55},
      {name: 'MONTEK LC', qty: 65},
      {name: 'LEVOSULF', qty: 75},
      {name: 'FARMA TAB', qty: 85},
      {name: 'Espentral 40mg injection', qty: 95},
      {name: 'Atorvastatin 10mg', qty: 10},
      {name: 'Aspadol 75 Tablet', qty: 11},
      {name: 'Bradia', qty: 12},
      {name: 'Braclin 150mg Capsule', qty: 45},
      {name: 'Brace 100mg Capsule', qty: 20},
      {name: 'Brainrep 90mg Tablet', qty: 90},
      {name: 'Bradilex Syrup', qty: 11},
      {name: 'cam plus', qty: 44},
      {name: 'DART TAB', qty: 18},
      {name: 'Daramin 25mg Tablet', qty: 19},
      {name: 'Espzone', qty: 20},
      {name: 'Espentral 40mg injection', qty: 21},
      {name: 'Edeflox', qty: 24},
      {name: 'Edema Forte Tablet', qty: 6},
      {name: 'Farlutal', qty: 18},
      {name: 'Farogud Tablet', qty: 28},
      {name: 'Insulin', qty: 8},
      {name: 'LEVOFLOX-500MG', qty: 26},
      {name: 'LEVIPIL SYRUP', qty: 36},
      {name: 'MONOCEF 500MG', qty: 21},
      {name: 'MONOCEF 1GM', qty: 11},
      {name: 'WINOPAM INJ 20ML', qty: 15},
      {name: 'WINOPAM INJ 20ML', qty: 35},
      {name: 'MONTAZ', qty: 15},
      {name: 'MONTEK LC', qty: 31},
      {name: 'LEVOSULF', qty: 13},
      {name: 'FARMA TAB', qty: 6},
      {name: 'Espentral 40mg injection', qty: 39},
      {name: 'Atorvastatin 10mg', qty: 10},
      {name: 'Aspadol 75 Tablet', qty: 11},
      {name: 'Bradia', qty: 12},
      {name: 'Braclin 150mg Capsule', qty: 45},
      {name: 'Brace 100mg Capsule', qty: 20},
      {name: 'Brainrep 90mg Tablet', qty: 90},
      {name: 'Bradilex Syrup', qty: 11},
      {name: 'cam plus', qty: 44},
      {name: 'DART TAB', qty: 18},
      {name: 'Daramin 25mg Tablet', qty: 19},
      {name: 'Espzone', qty: 20},
      {name: 'Espentral 40mg injection', qty: 21},
      {name: 'Edeflox', qty: 24},
      {name: 'Edema Forte Tablet', qty: 6},
      {name: 'Farlutal', qty: 18},
      {name: 'Farogud Tablet', qty: 28},
      {name: 'Insulin', qty: 8},
      {name: 'LEVOFLOX-500MG', qty: 26},
      {name: 'LEVIPIL SYRUP', qty: 36},
      {name: 'MONOCEF 500MG', qty: 21},
    ];

    cy.wrap(medicines).each((med, index) => {

  // For 2nd, 3rd, ... rows click + Add new row
  if (index > 0) {
    cy.get('button[aria-label="Add new row"]').click({ force: true });
  }

  // 🛰 intercept the search call once (it will re-use per iteration)
  cy.intercept('GET', '/inventory/req-med-search/**').as('medSearch');

  // Work with the LAST row in the table
  cy.get('tbody.MuiTableBody-root > tr.MuiTableRow-root')
    .last()
    .as('currentRow');

  // 1️⃣ Type medicine name into "Search or enter manually" in THIS row
  cy.get('@currentRow').within(() => {
    cy.get('input[placeholder="Search or enter manually"][role="combobox"]')
      .first()
      .click({ force: true })
      .clear()
      .type(med.name, { delay: 50 });   // don't press enter yet
  });

  // 2️⃣ Wait for the search API to complete
  cy.wait('@medSearch');

  // 3️⃣ Click the matching option from the dropdown
  //    (no ul[role="listbox"] wait – go directly to li options)
  cy.contains('li.MuiAutocomplete-option[role="option"]', med.name, {
    timeout: 15000,
    matchCase: false,
  }).click({ force: true });

  // 4️⃣ Wait for Category & Drug to autofill in THIS row
  cy.get('@currentRow').within(() => {
    // 5️⃣ Now fill Quantity
    cy.get('input[placeholder="Quantity"]')
      .clear()
      .type(String(med.qty));
  });
});
cy.contains('button', 'Send Request').click({ force: true });

  });
});
