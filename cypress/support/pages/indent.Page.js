class IndentPage {

  /* ===============================
     PATIENT & VISIT
  =============================== */

  getPatientTable(timeout = 10000) {
    return cy.get('.MuiTableBody-root', { timeout });
  }

  clickInPatientById(patientId) {
    this.getPatientTable()
      .contains('a', patientId)
      .filter('[href*="type=ip"]')
      .scrollIntoView()
      .click({ force: true });
  }

  clickVisitButton() {
    cy.contains('button', /\bVISIT\b/i)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  clickMedicationButton() {
    cy.contains('button', /\bMedication\b/i)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  clickRequest() {
    cy.contains('button', /^Request$/i)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  /* ===============================
     MEDICINE REQUEST (ROWS SAFE)
  =============================== */

  getMedicineInput(rowIndex = -1, timeout = 10000) {
    return cy
      .get('input[placeholder="Search medicine name"]', { timeout })
      .eq(rowIndex);
  }

  getQuantityInput(rowIndex = -1, timeout = 10000) {
    return cy
      .get('input[placeholder="Enter quantity"]', { timeout })
      .eq(rowIndex);
  }

  getListbox(timeout = 10000) {
    return cy.get('ul[role="listbox"]', { timeout });
  }

  clickAddRow() {
    cy.contains('button', /add row/i)
      .should('be.visible')
      .click();
  }

  selectMedicine(name, rowIndex = -1) {
    this.getMedicineInput(rowIndex)
      .clear()
      .type(name);

    this.getListbox()
      .contains('li', new RegExp(`^${name}`, 'i'))
      .click();
  }

  enterQuantity(qty, rowIndex = -1) {
    this.getQuantityInput(rowIndex)
      .clear()
      .type(qty.toString());
  }

  clickSendRequest() {
    cy.contains('button', /^Send\s*Request$/i)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  requestMultipleMedicines(medicines = []) {
    medicines.forEach(({ name, qty }, index) => {
      this.selectMedicine(name);
      this.enterQuantity(qty);

      if (index < medicines.length - 1) {
        this.clickAddRow();
      }
    });

    this.clickSendRequest();
  }

  /* ===============================
     REQUESTED MEDICINES DIALOG
  =============================== */

  getDialog(timeout = 10000) {
    return cy.get('.MuiDialog-paper', { timeout })
      .should('be.visible');
  }

  getCheckboxByOrderId(orderId) {
    return this.getDialog()
      .contains('h1', orderId)
      .closest('div')
      .find('input[type="checkbox"]');
  }

  /* ===============================
     ACTION
  =============================== */

  checkMedicineByOrderId(orderId) {
    this.getCheckboxByOrderId(orderId)
      .should('exist')
      .check({ force: true });
  }
  getSubmitButton(timeout = 10000) {
    return cy
      .get('.MuiDialog-paper', { timeout })   // scope to dialog
      .should('be.visible')
      .contains('button', /^Submit$/i);
  }

  /* ===============================
     ACTION
  =============================== */

  clickSubmit() {
    this.getSubmitButton()
      .should('be.enabled')
      .click();
  }
  getCloseButton() {
    return this.getDialog()
      .find('button')
      .find('svg[data-testid="CloseIcon"]')
      .closest('button');
  }

  /* ===============================
     ACTION
  =============================== */

  closePopup() {
    this.getCloseButton()
      .should('be.visible')
      .click();

    // Assert popup is closed
    cy.get('.MuiDialog-paper').should('not.exist');
  }
  /* ===============================
     PAYMENT FLOW
  =============================== */

  clickEyeIcon() {
    cy.get('svg.lucide-eye')
      .closest('button')
      .should('be.visible')
      .click();
  }
      getDueToggleButton() {
    return cy
      .contains('p', /^Due$/i)
      .closest('div.flex.w-fit')
      .prev('button');
  }

  clickDue() {
    this.getDueToggleButton()
      .should('be.visible')
      .click();
  }
getGenerateReceiptButton(timeout = 10000) {
    return cy.contains('button', /^Generate\s*Receipt$/i, { timeout })
      .should('be.visible')
      .and('not.be.disabled');
  }

  clickGenerateReceipt() {
    this.clickDue();
    this.getGenerateReceiptButton().click();
  }

  /* ===============================
     FLOW
  =============================== */

  generateDueReceipt() {
    this.selectDue();
    this.clickGenerateReceipt();
  }

  completeCashPaymentFlow() {
    this.clickEyeIcon();
    this.selectFirstRequestedMedicine();
    this.submitRequestedMedicines();
    this.closeRequestedDialog();

    cy.contains('button', /^Pay\s*Now$/i).click();
    cy.contains('button', /^Cash$/i).click();
    cy.contains('button', /^Generate\s*Receipt$/i)
      .should('be.enabled')
      .click();
  }
  getIndentModule() {
    return cy.contains('a, div', /^Indent$/i)
    
  }

  clickIndentModule() {
    this.getIndentModule()
      .click({ force: true });
  }
   getPatientRowById(patientId, timeout = 10000) {
    return cy.get('tbody, .MuiTableBody-root, [class*="TableBody"]', { timeout })
      .contains('tr', patientId);
  }

  getBuyButtonFromRow(patientId) {
    return this.getPatientRowById(patientId)
      .contains('button', /^Buy$/i);
  }

  // ---------- Action ----------

  clickBuyButtonByPatientId(patientId) {
    this.getBuyButtonFromRow(patientId)
      .should('be.visible')
      .and('not.be.disabled')
      .click();
    
    // Wait for dialog to load with data
    cy.wait(1500);
  }
   getAccountButton(timeout = 10000) {
    // Account circle icon button
    return cy.get('button[aria-label*="account"]', { timeout })
      .filter(':visible');
  }

  getAccountMenu(timeout = 10000) {
    // MUI menu / popover
    return cy.get('[role="menu"], .MuiMenu-paper', { timeout })
      .should('be.visible');
  }

  getLogoutOption() {
    return cy.contains('[role="menuitem"], li, button', /^Logout$/i);
  }

  /* ===============================
     ACTIONS
  =============================== */

  openAccountMenu() {
    this.getAccountButton()
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    this.getAccountMenu();
  }

  clickLogout() {
    this.openAccountMenu();

    this.getLogoutOption()
      .should('be.visible')
      .click();
  }
parseAmount(text) {
    return Number(text.replace(/[₹,\s]/g, ''));
  }

  // Scope everything to Billing Summary
  getBillingSummary() {
    return cy.contains('Billing Summary')
      .closest('div')
      .parent();
  }

  getDepositedAmount() {
    return this.getBillingSummary()
      .contains(/DEPOSITED/i)
      .next()
      .invoke('text')
      .then(t => this.parseAmount(t));
  }

  getMedicationCharges() {
    return cy.contains('Medication Charges')
      .next()
      .invoke('text')
      .then(t => this.parseAmount(t));
  }

  getBalanceDue() {
    return this.getBillingSummary()
      .contains(/BALANCE DUE/i)
      .next()
      .invoke('text')
      .then(t => this.parseAmount(t));
  }

  validateBalanceDue() {
    cy.wait(2000); // Wait for data to load
    
    this.getDepositedAmount().then(deposited => {
      this.getMedicationCharges().then(medCharges => {
        this.getBalanceDue().then(balanceDue => {

          const expected = medCharges - deposited;

          cy.log(`Deposited: ${deposited}`);
          cy.log(`Medication Charges: ${medCharges}`);
          cy.log(`Expected Balance Due: ${expected}`);
          cy.log(`Actual Balance Due: ${balanceDue}`);

          expect(balanceDue).to.eq(expected);
        });
      });
    });
  }
  getDepositedAmount() {
    return cy.contains('p', 'DEPOSITED')
      .next()
      .invoke('text');
  }

  getTotalCharges() {
    return cy.contains('p', 'TOTAL CHARGES')
      .next()
      .invoke('text');
  }

  getDiscount() {
    return cy.contains('p', 'DISCOUNT')
      .next()
      .invoke('text');
  }

  getBalanceDue() {
    return cy.contains('p', 'BALANCE DUE')
      .next()
      .invoke('text');
  }

  getBalanceAmount() {
    return cy.contains('p', 'BALANCE AMOUNT')
      .next()
      .invoke('text');
  }

  /* ---------- CHARGE BREAKDOWN ---------- */
  getChargeByLabel(label) {
    return cy.contains('p', label)
      .parent()
      .find('p')
      .last()
      .invoke('text');
  }

  /* ---------- UTILITY ---------- */
  parseAmount(amountText) {
    return parseFloat(
      amountText.replace(/[₹,]/g, '').trim()
    );
  }






}

export default IndentPage;
