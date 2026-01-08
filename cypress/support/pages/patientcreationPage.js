class PatientCreationPage {

  /* ================== GENERIC HELPERS ================== */

  getInputByLabel(labelText, timeout = 8000) {
    return cy.contains('label', new RegExp(`^${labelText}\\s*\\*?$`, 'i'), { timeout })
      .then($label => {
        const forId = $label.attr('for');
        if (forId) {
          // Escape special characters in ID for CSS selector
          const escapedId = CSS.escape(forId);
          return cy.get(`#${escapedId}`, { timeout });
        } else {
          return cy.wrap($label).parent().find('input').first();
        }
      });
  }

  getMuiSelectByLabel(labelText, timeout = 8000) {
    return cy.contains('label', new RegExp(`^${labelText}\\s*\\*?$`, 'i'), { timeout })
      .then($label => {
        // Try to find combobox in parent container
        const $parent = $label.closest('.MuiFormControl-root, .css-1te4hen, div');
        if ($parent && $parent.length) {
          const $combobox = $parent.find('[role="combobox"]');
          if ($combobox.length) {
            return cy.wrap($combobox.first());
          }
        }
        // Fallback: find by aria-labelledby
        const id = $label.attr('id');
        if (id) {
          return cy.get(`[aria-labelledby="${id}"]`, { timeout });
        }
        // Last resort: any visible combobox
        return cy.get('[role="combobox"]').filter(':visible').first();
      });
  }

  getListbox(timeout = 8000) {
    return cy.get('[role="listbox"]', { timeout });
  }

  selectFromMuiDropdown(label, option) {
    this.getMuiSelectByLabel(label)
      .click({ force: true });

    // Wait for dropdown to open
    cy.wait(500);
    
    cy.contains('[role="option"]', new RegExp(`^${option}$`, 'i'), { timeout: 10000 })
      .click({ force: true });
  }

  /* ================== BASIC ACTIONS ================== */

  clickPatientsMenu() {
    cy.get('a[href="#/patients"]')
      .first()
      .click({force: true});
  }

  clickButton(text) {
    cy.contains('button', new RegExp(`^${text}$`, 'i'))
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  typeInput(label, value) {
    this.getInputByLabel(label)
      .should('be.visible')
      .clear()
      .type(value);
  }

  /* ================== FORM ACTIONS ================== */
  getCreatePatientButton() {
    return cy.contains('button', /^Create Patient$/i)
      .filter(':visible');
  }

  // ---------- Action ----------

  clickCreatePatient() {
    this.getCreatePatientButton()
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  clickInPatientTab() {
    cy.get('button')
      .filter(':contains("In patient")')
      .not(':contains("Out")')
      .click({ force: true });
    // Wait for the form to load
    cy.contains('label', /First Name/i, { timeout: 10000 }).should('exist');
  }

  createInPatient() {
    this.clickCreatePatient();
    this.clickInPatientTab();
  }

  enterPatientName(firstName, lastName) {
    this.typeInput('First Name', firstName);
    this.typeInput('Last Name', lastName);
  }

  enterDOB(dob) {
    this.typeInput('Date of Birth', dob);
  }

  enterPhone(mobile) {
    cy.get('input[placeholder="Enter phone number"]')
      .clear()
      .type(mobile);
  }

  selectGender(gender) {
    this.selectFromMuiDropdown('Gender', gender);
  }

  selectPatientType(type) {
    this.selectFromMuiDropdown('Patient Type', type);
  }

  selectTariffType(type) {
    this.selectFromMuiDropdown('Tariff Type', type);
  }

  clickNext() {
    this.clickButton('Next');
  }

  selectAdmissionType(type) {
    this.selectFromMuiDropdown('Admission Type', type);
  }

  selectDoctor(name) {
    this.selectFromMuiDropdown('Doctors', name);
  }

  enterDoctorFeePerDay(amount) {
    cy.get('input[name="cost_per_day"]')
      .clear()
      .type(amount.toString());
  }

  selectTodayAdmissionDate() {
    cy.get('button[aria-label="Choose date"]').click();
    cy.get('[aria-current="date"]').click();
  }

  selectCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeStr = `${hours}:${minutes}`;
    cy.get('input[name="time"]').clear().type(timeStr).blur();
  }

  selectRoom(room) {
    this.selectFromMuiDropdown('Rooms', room);
  }

  selectBed(bed) {
    this.selectFromMuiDropdown('Beds', bed);
  }

  enterDeposit(amount) {
    cy.get('input[name="deposit_amount"]')
      .clear()
      .type(amount.toString());
  }

  selectPaymentMethod(method) {
    cy.contains('label', 'Payment Method')
      .parent()
      .find('select')
      .select(method);
  }

  submit() {
    this.clickButton('Submit');
  }
  getConsultantTab() {
    // Button that contains visible text "Consultant"
    return cy.contains('button', 'Consultant');
  }

  clickConsultantTab() {
    this.getConsultantTab()
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }
  getMoreVertIcon() {
    // MUI icon has data-testid
    return cy.get('[data-testid="MoreVertIcon"]');
  }

  clickMoreVertIcon() {
    this.getMoreVertIcon()
      .should('be.visible')
      .click();
  }

  /* ---------- UPDATE OPTION FROM POPUP ---------- */
  getUpdateOption() {
    // MUI menu item text
    return cy.contains('li', 'Update');
  }

  clickUpdateOption() {
    this.getUpdateOption()
      .should('be.visible')
      .click();
  }
   getDurationInput() {
    return cy.get('input[name="duration_in_days"]');
  }

  enterDurationInDays(days) {
    this.getDurationInput()
      .should('be.visible')
      .clear()
      .type(days);
  }

  /* ---------- UPDATE BUTTON ---------- */
  getUpdateButton() {
    return cy.contains('button', /^Update$/);
  }

  clickUpdateButton() {
    this.getUpdateButton()
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }
  getRoomsBedsTab() {
    return cy.contains('button', 'Rooms & Beds');
  }

  clickRoomsBedsTab() {
    this.getRoomsBedsTab()
      .should('be.visible')
      .click();
  }

  /* ---------- MORE VERT ICON ---------- */
  getMoreVertIcon() {
    return cy.get('[data-testid="MoreVertIcon"]').first();
  }

  clickMoreVertIcon() {
    this.getMoreVertIcon()
      .should('be.visible')
      .click();
  }

  /* ---------- UPDATE OPTION ---------- */
  getUpdateOption() {
    return cy.contains('li', 'Update');
  }

  clickUpdateOption() {
    this.getUpdateOption()
      .should('be.visible')
      .click();
  }
  getRoomBedsDaysInput() {
    return cy.get('input[name="nursing_no_days"], input[id^="r2k"]')
             .first();
  }

  enterRoomBedsDays(days) {
    this.getRoomBedsDaysInput()
      .should('be.visible')
      .clear()
      .type(days);
  }
  getRoomBedsNoOfDaysInput() {
    // First "No. of Days" field inside Update Room And Beds modal
    return cy.contains('label', 'No.of Days')
      .first()
      .parent()
      .find('input[type="number"]');
  }

  enterRoomBedsNoOfDays(days) {
    this.getRoomBedsNoOfDaysInput()
      .should('be.visible')
      .clear()
      .type(days);
  }

  /* ---------- DMO CHARGES - NO OF DAYS ---------- */
  getDmoDaysInput() {
    return cy.get('input[name="dmo_no_days"]');
  }

  enterDmoDays(days) {
    this.getDmoDaysInput()
      .should('be.visible')
      .clear()
      .type(days);
  }

  /* ---------- NURSING CHARGES - NO OF DAYS ---------- */
  getNursingDaysInput() {
    return cy.get('input[name="nursing_no_days"]').last();
  }

  enterNursingDays(days) {
    this.getNursingDaysInput()
      .should('be.visible')
      .clear()
      .type(days);
  }

  /* ---------- UPDATE BUTTON ---------- */
  getUpdateButton() {
    return cy.contains('button', /^Update$/);
  }

  clickUpdateButton() {
    this.getUpdateButton()
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }
  
 








  









}

export default PatientCreationPage;
