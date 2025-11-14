describe('visit website and need to validate referral document generation', () => {

  it('should generate a referral document successfully', () => {

    cy.loginAsAdmin();

    cy.viewport(1400, 900);

    cy.url({ timeout: 20000 }).should('include', '/dashboard')
    cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({force:true})
    cy.contains('[role="button"]', 'User Control').click({force: true});
    cy.get('.justify-between > .font-rubik').click({force: true});
    cy.contains('label', 'Role').parent().find('div[role="combobox"]').click();
    cy.get('[data-value="doctor"] > .table-cell').click();
    cy.contains('label', 'Department').parent().find('div[role ="combobox"]').click({force: true});

cy.get('[data-value="104"]').click({force: true});
cy.contains('label', 'Doctor Type').parent().find('div[role="combobox"]').click({force: true});  

cy.get('li[data-value="Consultant"]').click({force: true});  

cy.contains('label', 'Qualification').parent().find('div[role="combobox"]').click({force: true});

cy.get('li[data-value="46"]').click({force: true});

cy.get('input[name="first_name"]').type('virginia')

cy.get('input[name="last_name"]').type('wolf')

cy.get('[name="username"]').type('virginia_wolf61')

cy.get('input[placeholder="DD-MM-YYYY"]').type('12-12-1961')

cy.get('[name="email"]').type('virginia.wolf61@gmail.com')

cy.get('input[value="+91"]').type('9876543219')

cy.contains('label','Gender').parent().find('div[role="combobox"]').click({force: true});

cy.get('li[data-value="M"]').click({force: true});

cy.get('input[name="password"]').click().type('ggyodorqq@70');

cy.get('[name="experience"]').type('25')

cy.get('input[name="op_fee"]').type('500')

cy.get('[name="license"]').type('MEDIG78900')

cy.get('[name="op_validity_days"]').type('30')

cy.get(':nth-child(27) > div > .font-rubik').click({force: true})

cy.get('.mt-4').contains('Browse File').click({force: true});


cy.get('.flex > .bg-blue-600').click()

const fileName = '6658266.png';

cy.get('input[type="file"]').attachFile(fileName);
cy.get('.bg-blue-600').click({force: true})



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
        .should('have.value', '17:00');
    });
   cy.get('button[type="submit"]').click({force: true});

  });
  it('should create market agent successfully', () => {
    cy.loginAsAdmin();
    cy.viewport(1400, 900);
    cy.url().should('include', '/dashboard');
    cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({force:true})
    cy.contains('[role="button"]', 'User Control').click({force: true});
    cy.get('.justify-between > .font-rubik').click({force: true});
    cy.contains('label', 'Role').parent().find('div[role="combobox"]').click();
    cy.get('[data-value="marketing_agent"] > .table-cell').click({force: true});
    cy.get('[name="first_name"]').type('marketer',{force: true})
    cy.get('input[name="last_name"]').type('agent',{force: true})
    cy.get('[name="username"]').type('market_agent01',{force: true})
    cy.get('input[placeholder="DD-MM-YYYY"]').type('15-08-1985',{force: true})
    cy.get('[name="email"]').type('marketer.agent01@example.com',{force: true})
    cy.contains('label','Gender').parent().find('div[role="combobox"]').click({force: true});

cy.get('li[data-value="M"]').click({force: true});
cy.get('[name="commission"]').type('10',{force: true})
cy.get('input[name="password"]').click().type('Market@1234',{force: true});
cy.get('input[value="+91"]').type('9876543219')

cy.get('button[type="submit"]').click({force: true});

    

  })
});
describe('it should create patient successfully', () => {
    it('create patient and validate discount', () => {
         cy.loginAsAdmin();

    cy.viewport(1400, 900);

    cy.url({ timeout: 20000 }).should('include', '/dashboard');
    cy.contains('span', /^Patients$/i, { timeout: 10000 })
      .closest('button, [role="button"], .MuiButtonBase-root')
      .first()
      .click({ force: true });
      cy.contains('button', 'Create Patient').click({force: true});
      cy.contains('button', 'In patient').click({force: true});
      cy.get('[name="firstName"]').type('discounted_patient',{force: true})
      cy.get('[name="age"]').type('30',{force: true})
      cy.get('[name="email"]').type('discounted_patient@example.com',{force: true})
        cy.get('.PhoneInputInput').type('9123456780',{force: true})
        
cy.get('input[name="patient_type"]').parent().click();
cy.contains('li', 'Cash').click();
cy.get('input[name="tariff_type"]').parent().click();
cy.contains('li', 'Self').click();
cy.contains('button', 'Next').click({force: true});
cy.contains('.MuiFormControl-root', 'Doctors')
  .find('[role="combobox"]')
  .click()
cy.get('[data-value="135"]').click({force: true})
cy.get('[name="cost_per_day"]').clear().type('2000',{force: true})
cy.contains('Referral Type').parent().find('div[role="combobox"]').click({force: true});
cy.get('[data-value="agents"]').click({force: true});
// 1. Find the label "Referral By" to get its ID
// 1. Find the label "Referral By"
// 1. Find the label "Referral By"
cy.contains('label', 'Referral By')
  .invoke('attr', 'for') // Get its 'for' attribute (e.g., "::rbq:")
  .then((labelFor) => {
    // 2. Find the element whose 'id' matches that 'for' value.
    //    This [id="..."] syntax safely handles special characters.
    cy.get(`[id="${labelFor}"]`).click();
  });
cy.get('[role="option"][data-value="352"]').click();
cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click({force: true})
cy.get('.MuiPickersDay-today').click({force: true})
cy.get('[name="time"]').clear().type('10:00',{force: true})
cy.contains('Rooms').parent().find('div[role="combobox"]').click({force: true});
cy.get('[data-value="90"]').click({force: true});
cy.get('[name="admission_reason"]').type('Mood Disorder',{force: true})
cy.contains('Beds').parent().find('div[role="combobox"]').click({force: true});
cy.get('[data-value="530"]').click({force: true});
cy.contains('Admission Type').parent().find('div[role="combobox"]').click({force: true});
cy.get('li[data-value="Emergency"]').click({force: true});
cy.get('[name="deposit_amount"]').type('5000',{force: true})
cy.contains('label', 'Payment Method')
  .next('select')
  .select('Cash')
  cy.get('button[type="submit"]').click({force: true})


 })
  
    it('should verify referral discount applied in billing', () => {
        cy.loginAsAdmin();
    cy.viewport(1400, 900);

    cy.url({ timeout: 20000 }).should('include', '/dashboard');
    cy.contains('span', /^Patients$/i, { timeout: 10000 })
      .closest('button, [role="button"], .MuiButtonBase-root')
      .first()
      .click({ force: true });
      cy.get('[placeholder="Search PatientID/Name/Mobile Number/aadhar"]')
  .clear({ force: true })
  .type('P04345', { force: true });
  cy.get('.text-blue-500 > .text-blue-600').click({force: true});
  cy.contains('button', 'visit').click({force: true});
  cy.contains('button', 'Referral').click({force: true});
  cy.contains('button', 'Referral Details').click({force: true});
cy.contains('td', 'Referral Name')  
  .next('td')                      
  .should('have.text', 'ganesh swami'); 

cy.contains('td', 'Referral Share') 
  .next('td')                       
  .should('have.text', '25.00');    
  cy.contains('button', 'Doctor Charges').click({force: true});
  cy.contains('td', 'AB MADDY')
      .parent('tr')
      .as('doctorRow'); 
 cy.get('@doctorRow').find('td')
      .then($cells => {
        
        const rateText = $cells.eq(4).text();
        const quantityText = $cells.eq(5).text();
        const amountText = $cells.eq(6).text();

        const rate = parseFloat(rateText);
        const quantity = parseFloat(quantityText);
        const actualAmount = parseFloat(amountText);

        
         const expectedAmount = rate * quantity;

        
        cy.log(`Validating Row: Rate(${rate}) * Quantity(${quantity}) = ${expectedAmount}`);

     expect(rate).to.equal(7, 'Rate should be 7');
        expect(quantity).to.equal(3, 'Quantity should be 3');
 expect(actualAmount).to.equal(expectedAmount, 'Amount should be Rate * Quantity');
expect(actualAmount).to.equal(21, 'Amount should be 21');
 });
       cy.contains('td', 'AB KOTA').parent('tr')
      
        cy.get('td').eq(4).should('have.text', '8');  
        cy.get('td').eq(5).should('have.text', '6');  
        cy.get('td').eq(6).should('have.text', '48'); 
  
      cy.contains('td', 'AB Madhu')
      .parent('tr')
      .within(() => {
        
        cy.get('td').eq(4).should('have.text', '900');  
        cy.get('td').eq(5).should('have.text', '7');   
        cy.get('td').eq(6).should('have.text', '6300'); 
      });
  


})
})





