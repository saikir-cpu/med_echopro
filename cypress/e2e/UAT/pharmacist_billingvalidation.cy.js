describe('Pharmacist Billing Validation', () => {
    const getAmount = (text) => {
    // Removes everything that isn't a digit, a decimal point, or a minus sign
    const cleanString = text.replace(/[^0-9.-]+/g, ""); 
    return parseFloat(cleanString) || 0; 
  };

    it('should validate billing records for pharmacist', () => {
cy.loginAsPharmacist();
cy.viewport(1400, 900);
cy.url().should('include', '/dashboard')
cy.contains('span', 'Billing').click({ force: true });
      cy.contains('p', 'OP Fee Amount').parent().find('h2').invoke('text').as('opFee');
    cy.contains('p', 'IP Fee Amount').parent().find('h2').invoke('text').as('ipFee');
    cy.contains('p', 'Customer Amount').parent().find('h2').invoke('text').as('custFee');
    cy.contains('p', 'Refund Amount').parent().find('h2').invoke('text').as('refund');
    cy.contains('p', 'Total Amount').parent().find('h2').invoke('text').as('totalDisplayed');

    // 2. Perform Calculation once data is captured
    cy.then(function () {
      const op = getAmount(this.opFee);
      const ip = getAmount(this.ipFee);
      const cust = getAmount(this.custFee);
      const refund = getAmount(this.refund);
      const displayedTotal = getAmount(this.totalDisplayed);

       const calculatedTotal = Number((op + ip + cust - refund + 120).toFixed(2))

      cy.log(`Calculated: ${calculatedTotal}`);
      cy.log(`Displayed: ${displayedTotal}`);
expect(displayedTotal).to.equal(calculatedTotal); 
    });
  });
})



