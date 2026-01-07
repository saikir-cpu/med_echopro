class MedicationPage {

  // Exact match for the Request button
  getRequestButton() {
    return cy.contains('button', /^Request$/);
  }

  clickRequestButton() {
    this.getRequestButton().should('be.visible').click();
  } // <-- fixed: added missing closing brace

  getMedicineInput(timeout = 10000) {
    return cy
      .get('input[role="combobox"], input[placeholder*="Search"], input[id^="r"]', { timeout })
      .filter(':visible')
      .first();
  }

  getSuggestionList(timeout = 8000) {
    return cy.get('ul[role="listbox"], .MuiAutocomplete-popper, .MuiAutocomplete-listbox', { timeout }).first();
  }

  getQtyInput(timeout = 8000) {
    return cy.contains('label', /Qty|Q?ty|Quantity/i, { timeout })
      .then($lbl => {
        const forId = $lbl.attr('for');
        if (forId) {
          return cy.get(`#${forId}`, { timeout });
        }
        return cy.wrap($lbl).parent().find('input').first();
      }, () => {
        return cy.get('input[type="number"], input.input-number', { timeout }).filter(':visible').first();
      });
  }

  getSendRequestButton() {
    return cy.contains('button', /^Send Request$/);
  }

  /**
   * Select a medicine from the autocomplete.
   * - name: string to type (e.g. 'INSULIN SYR BD')
   * After selection we assert the input has the expected value (exact) by default.
   */
  selectMedicine(name, opts = {}) {
    const timeout = opts.timeoutSelect ?? 10000;

    // focus & type
    this.getMedicineInput().should('be.visible').click({ force: true }).clear().type(name, { delay: 50 });

    // tiny wait for suggestions to render (if needed)
    cy.wait(300);

    // Try to get suggestion list; handle success and failure via then(success, failure)
    this.getSuggestionList(timeout).then(
      $list => {
        const $items = $list.find('li');
        const exact = $items.filter((_, el) => (el.innerText || '').trim() === name);
        if (exact.length) {
          cy.wrap(exact.first()).click({ force: true });
        } else {
          // fallback: click first item that contains the name (case-insensitive)
          cy.wrap($list).contains(new RegExp(name, 'i')).click({ force: true });
        }
      },
      () => {
        // suggestion list didn't appear: press enter to accept highlighted suggestion
        this.getMedicineInput().type('{enter}');
      }
    );

    // === FIXED ASSERTION ===
    // Option A (recommended): assert exact value
    this.getMedicineInput().should('have.value', name);

    // Option B (alternative): partial/regex match if UI modifies value formatting
    // this.getMedicineInput().invoke('val').should('match', new RegExp(name.split(' ').slice(0,2).join(' '), 'i'));
  }

  enterQty(qty) {
    this.getQtyInput().should('be.visible').clear().type(`${qty}`, { delay: 20 });
  }

  clickSendRequest(opts = {}) {
    if (opts.waitForAlias) {
      this.getSendRequestButton().should('be.visible').click();
      cy.wait(opts.waitForAlias);
    } else {
      this.getSendRequestButton().should('be.visible').click();
    }
  }

  fillMedicineAndSend(medicineName = 'INSULIN SYR BD', qty = 1, opts = {}) {
    this.selectMedicine(medicineName, opts);
    this.enterQty(qty);
    this.clickSendRequest(opts);
  }
}

module.exports = new MedicationPage();
