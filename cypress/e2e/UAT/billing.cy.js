
describe('Billing validation', () => {

  it('should create a new billing record successfully', () => {

    cy.loginAsAdmin();

    cy.viewport(1400, 900);

    cy.url({ timeout: 20000 }).should('include', '/dashboard')

    cy.get('.main-container > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > [href="#/billing"] > .MuiButtonBase-root').click({force:true})

    cy.url({ timeout: 20000 }).should('include', '/billing')

    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })

    cy.get('ul[role="listbox"] li').contains(/^NOOR VMT - 01$/i).click()

    cy.get('.css-18nn89h > .MuiInputBase-root > .MuiSelect-select').click({ force: true })

    cy.get('ul[role="listbox"] li').contains(/^DOCTOR$/i).click()

    cy.get('.css-1gs2k63 > .MuiInputBase-root > .MuiSelect-select').click({ force: true })

    cy.get('ul[role="listbox"] li').contains(/^VIMALA KAM$/i).click();

    cy.get(':nth-child(6) > .MuiInputBase-root > .MuiSelect-select').click({ force: true })
    
    cy.get('ul[role="listbox"] li').contains(/^OP-Fee$/i).click();

    cy.get('.cursor-pointer > path').click({force:true});
    
cy.get('.cursor-pointer > path').click({force:true});

 cy.get('.mb-3 > :nth-child(1) > .MuiTypography-root').click({force:true})

    cy.get('.MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click({force:true})

    cy.get('.MuiDialogActions-root > :nth-child(1)').click({force:true})
    
    cy.wait(2000); 
const pdfPath = 'C:\\Users\\HI\\medecho_project\\cypress\\downloads\\Billing_DayWise_20-10-2025_to_27-10-2025.pdf';
cy.task('readPdf', { filePath: pdfPath }).then(text => {

  
});


    cy.contains('p', 'OP Fee Amount').siblings('h2').should('contain.text', '₹ 19459')

    cy.contains('p', 'IP Deposits').siblings('h2').should('contain.text', '₹ 420600')

    cy.contains('p', 'Surgerys').siblings('h2').should('contain.text', '₹ 1013200')

    cy.contains('p', 'Services').siblings('h2').should('contain.text', '₹ 1548')

    cy.contains('p', 'Diagnostic Amount').siblings('h2').should('contain.text', '₹ 10917')

    cy.contains('p', 'Balance Due Paid').siblings('h2').should('contain.text', '₹ 409681')

    cy.contains('p', 'Prescription Amount').siblings('h2').should('contain.text', '₹ 5214')

    cy.contains('p', 'Cash').siblings('h2').should('contain.text', '₹ 201313')

    cy.contains('P', 'UPI').siblings('h2').should('contain.text', '₹ 665489')

      cy.contains('p', 'GST').siblings('h2').should('contain.text', '₹ 305.38')
      
      cy.contains('p', 'Refund Amount').siblings('h2').should('contain.text', '₹ 2100')

  







  })
})