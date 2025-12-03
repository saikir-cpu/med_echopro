describe('Staff Billing Validation', () => {
it('should validate billing records for patients', () => {
cy.loginAsStaff()
cy.viewport(1400, 900);
cy.contains('Create Patient').click({ force: true });
cy.get('input[name="firstName"]').type('outpatient');
cy.get('input[name="lastName"]').type('neuro1');
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
  .contains('Avinash Kumar PSS - ( M.B.B.S )')
  .click({ force: true });
 
cy.contains('label', 'Select Appointment')
  .closest('.MuiFormControl-root') 
  .find('button[aria-label="Choose date"]')
  .click({force: true});
  cy.get('[data-timestamp="1763577000000"]').click({ force: true });
cy.contains('span', '11:45 - 11:50', { timeout: 10000 }).click({force: true});
cy.contains('label', 'Payment Method').parent()
  .find('select')
  .select('Cash');
  cy.get('[role="dialog"]')
  .contains('button', 'Create')
  .click({ force: true });
  cy.contains('button', 'Yes, Print').click({ force: true });

})
it.only('doctor should prescibe medication and other actionsto the outpatient neuro', () => {
  cy.loginAsDoctor()
  cy.viewport(1400, 900);
  cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > [href="#/doctor"] > .MuiButtonBase-root').click({ force: true });
cy.contains('button', /^Appointments$/i, { timeout: 10000 })
  .scrollIntoView()
  .click({ force: true });
  cy.contains('label', 'From')   // 1. Find the text "From"
  .parent()                    // 2. Move up to the wrapping container
  .find('input')               // 3. Find the actual input field inside
  .click({force: true})                     // 4. Click to focus
  .type('24/11/2025');         // 5. Type the date
  cy.contains('label', 'To')     // 1. Find the label with text "To"
  .parent()                    // 2. Go up to the container wrapping both label and input
  .find('input')               // 3. Find the input field inside that container
  .click({force: true})                     // 4. Click to focus
  .type('30/11/2025');         // 5. Type the date
  // --- Select From Date: 19 ---
//cy.contains('label', 'From')
  //.closest('.MuiFormControl-root') 
  //.find('button[aria-label^="Choose date"]')
  //.click({force: true}); 
//cy.contains('button', '19').click({force: true}); 

// --- Select To Date: 20 ---
//cy.contains('label', 'To')
  //.closest('.MuiFormControl-root') 
  //.find('button[aria-label^="Choose date"]')
  //.click({force: true}); 
//cy.contains('button', '20').click({force: true});
  //cy.contains('h1', 'P006927')
  //.closest('a') // Travel up to the parent anchor tag
  //.click({ force: true });
  //cy.get('.MuiTableCell-alignCenter > .font-rubik').click({ force: true });
  // 1. Find the label containing the text "Search Name (min 3 characters)"
cy.contains('label', 'Search Name (min 3 characters)')
  .closest('.MuiFormControl-root') 
  .find('input[type="text"]') 
  .type('P007032')
  cy.contains('h1', 'P007032')
  .closest('a') // Travel up to the parent anchor tag
  .click({ force: true });
  cy.get('.MuiTableCell-alignCenter > .font-rubik').click({force:true})
  // Targets the button containing the specific SVG path for the plus icon
// Find the row that contains the text "AvinashKumar", then find the specific button in that row
// Click the button in the first row found

//cy.get('.MuiTableCell-alignCenter > .font-rubik').click({ force: true });
//cy.get(':nth-child(3) > .overflow-x-auto > .w-full > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-alignCenter').click({ force: true });
/*cy.contains('td', 'Scheduled', { timeout: 10000 })
  .parent('tr')
  .find('td')
  .last()
  .find('svg, button')
  .filter(':visible')
  .last()
  .click({ force: true });*/
// Click the + button by targeting the SVG path directly, then navigate to parent button
/*cy.get('td.MuiTableCell-alignCenter .icon-hover > svg', { timeout: 10000 })
  .filter(':visible')
  .first()
  .click({ force: true });
  cy.get('button[type="button"]')
  .contains(/^Generate$/i)
  .filter(':visible')
  .click({ force: true });*/
cy.contains('h3', 'Personal History')
  .closest('div.bg-white.rounded-xl.shadow-sm.border') 
  .find('textarea[placeholder="Enter details..."]') 
  .type('habit of smoking and drinking alcohol, no known allergies. Vital signs are stable. Neurological examination reveals slight tremors in the hands and difficulty with coordination. Cognitive function appears intact. Recommending MRI scan to rule out any underlying conditions.');
  cy.get('input[placeholder="Search Chief Complaints"]', { timeout: 10000 })
  .scrollIntoView()
  .click({ force: true })
  .type('migraine headache{enter}');
cy.get('input[placeholder="Enter Diagnosis"]')
  .click()
  .clear()
  .type('Drug-induced tremor');
  cy.get('input[placeholder="Search by Medicine Name"]').click().clear();
cy.get('input[placeholder="Search by Medicine Name"]').type('Topmac 50mg');
cy.get('input[placeholder="Search by Medicine Name"]').type('{enter}');
cy.get('input[placeholder="Quantity"]')
  .click()
  .clear()
  .type('10');
  cy.get('input[placeholder="Duration"]')
  .click()
  .clear()
  .type('10{enter}');
  cy.get('input[placeholder="DD/MM/YYYY"]')
  .click()
  .clear()
  .type('30/11/2025');
 // cy.contains('button', 'Generate In English').click({ force: true });
 cy.get('.inline-flex > .flex').click({ force: true });
 cy.get('.bg-white > :nth-child(11)').click({ force: true });
 cy.get('.bg-white > :nth-child(13)').click({ force: true });
 // The 'i' makes it case-insensitive, just to be safe
cy.contains('li', /mri brain.*2.*Radiology/i).click({force:true});
cy.contains('button', 'Update').click({force:true});
cy.get('.inline-flex > .font-rubik').click({ force: true });
 
  








})



})