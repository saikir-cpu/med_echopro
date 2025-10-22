class DoctorFormPage {
  selectDoctorType(type = 'Consultant') {
    cy.contains('label', 'Doctor Type').parent().find('div[role="combobox"]').click({ force: true });
    cy.get('li').contains(type).click({ force: true });
    return this;
  }

  selectQualification(value = '13') {
    cy.contains('label', 'Qualification').parent().find('div[role="combobox"]').click({ force: true });
    cy.get(`[data-value="${value}"]`, { timeout: 5000 }).click({ force: true });
    return this;
  }

  fillNames(first, last, username) {
    if (first) cy.get('input[name="first_name"]').clear().type(first);
    if (last) cy.get('input[name="last_name"]').clear().type(last);
    if (username) cy.get('[name="username"]').clear().type(username);
    return this;
  }

  fillPersonal({ dob, email, phone, gender, password } = {}) {
    if (dob) cy.get('input[placeholder="DD-MM-YYYY"]').clear().type(dob);
    if (email) cy.get('[name="email"]').clear().type(email);
    if (phone) cy.get('input[value="+91"]').clear().type(phone);
    if (gender) {
      cy.contains('label', 'Gender').parent().find('div[role="combobox"]').click({ force: true });
      cy.get('li').contains(gender).click({ force: true });
    }
    if (password) cy.get('input[name="password"]').clear().type(password);
    return this;
  }

  fillProfessional({ experience, op_fee, license, op_validity_days } = {}) {
    if (experience) cy.get('[name="experience"]').clear().type(String(experience));
    if (op_fee) cy.get('input[name="op_fee"]').clear().type(String(op_fee));
    if (license) cy.get('[name="license"]').clear().type(license);
    if (op_validity_days) cy.get('[name="op_validity_days"]').clear().type(String(op_validity_days));
    return this;
  }

  uploadProfile(fileName) {
    if (!fileName) return this;
    cy.get('button[variant="filled"]', { timeout: 10000 }).click({ force: true });
    cy.get('.mt-4').contains('Browse File').click({ force: true });
    cy.get('input[type="file"]', { timeout: 10000 }).attachFile(fileName);
    cy.get('.flex > .bg-blue-600').click({ force: true });
    return this;
  }

  setSchedule(days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']) {
    days.forEach(day => {
      cy.get(`input[type="checkbox"][name="${day}"]`, { timeout: 5000 }).check({ force: true });
      cy.get(`input[name="${day}"]`).eq(1).clear().type('09:00').should('have.value', '09:00');
      cy.get(`input[name="${day}"]`).eq(2).clear().type('17:00').should('have.value', '17:00');
    });
    return this;
  }

  submit() {
    cy.get('button[type="submit"]').contains('Create', { timeout: 10000 }).click({ force: true });
    return this;
  }
}

module.exports = new DoctorFormPage();