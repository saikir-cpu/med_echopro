class BillingSummaryPage {

  // ---------- Utils ----------
  parseAmount(text) {
    return Number(text.replace(/[₹,\s]/g, ''));
  }

  // ---------- Billing Summary Scope ----------
  getBillingSummary() {
    return cy.contains('Billing Summary')
      .closest('div')
      .parent();
  }

  // ---------- Summary Cards ----------
  getDepositedAmount() {
    return this.getBillingSummary()
      .contains(/DEPOSITED/i)
      .next()
      .invoke('text')
      .then(t => this.parseAmount(t));
  }

  getTotalCharges() {
    return this.getBillingSummary()
      .contains(/TOTAL CHARGES/i)
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

  getBalanceAmount() {
    return this.getBillingSummary()
      .contains(/BALANCE AMOUNT/i)
      .next()
      .invoke('text')
      .then(t => this.parseAmount(t));
  }

  // ---------- Charge Breakdown ----------
  getChargeBreakdownAmount(label) {
    return cy.contains(label)
      .siblings('p')
      .invoke('text')
      .then(t => this.parseAmount(t));
  }

}

export default BillingSummaryPage;
