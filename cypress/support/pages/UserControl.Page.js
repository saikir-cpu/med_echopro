class UserControlPage {
  openMenu() {
    cy.get(':nth-child(2) > .css-70qvj9', { timeout: 10000 }).click({ force: true });
    return this;
  }

  openUserControl() {
    cy.contains('User Control', { timeout: 10000 }).scrollIntoView().click({ force: true });
    return this;
  }

  clickNewDoctor() {
    cy.get('.justify-between > .px-4', { timeout: 10000 }).click({ force: true });
    return this;
  }

  selectRole(roleValue = 'doctor') {
    cy.contains('label', 'Role').parent().find('div[role="combobox"]').click({ force: true });
    cy.get(`[data-value="${roleValue}"] > .table-cell`, { timeout: 5000 }).click({ force: true });
    return this;
  }

  selectDepartment(value = '8') {
    cy.contains('label', 'Department').parent().find('div[role="combobox"]').click({ force: true });
    cy.get(`[data-value="${value}"]`, { timeout: 5000 }).click({ force: true });
    return this;
  }
}

module.exports = new UserControlPage();