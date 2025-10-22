import 'cypress-file-upload';

describe('Doctor Creation Flow', () => {

  const doctorData = {
    firstName: 'Fyodor',
    lastName: 'Dostoevsky',
    username: 'fyodor90',
    dob: '12-12-1961',
    email: 'fyodor.psyche@gmail.com',
    phone: '9876543219',
    password: 'fyodorqq@70',
    experience: '25',
    fee: '500',
    license: 'MEDIG23456',
    validity: '30',
    fileName: '6658266.png',
  };

  before(() => {
    // Visit Login Page
    cy.visit('https://uat.medimind.in/');
    cy.url().should('include', 'medimind');
  });

  it('should login with valid credentials', () => {
    cy.get('[name="username"]').should('be.visible').type('admin');
    cy.get('[name="password"]').should('be.visible').type('admin@789');
    cy.get('.mt-4 > .MuiButtonBase-root').should('be.enabled').click();

    // Assert successful login
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('exist');
  });

  it('should navigate to Doctor Creation page', () => {
    // Wait for Drawer
cy.get('.MuiDrawer-root', { timeout: 10000 }).should('be.visible');
cy.contains('Doctors').scrollIntoView().should('be.visible').click();


    cy.get('[href="#/admin"] .MuiButtonBase-root').click({ force: true });
    cy.get('.justify-between > .MuiButtonBase-root').click();

    // Assert page loaded
    cy.contains('Add Doctor').should('be.visible');
  });

  it('should fill Doctor details and save', () => {
    // Role
    cy.contains('label', 'Role').parent().find('div[role="combobox"]').click();
    cy.get('[data-value="doctor"]').click();
    cy.get('[data-value="doctor"]').should('exist');

    // Department
    cy.contains('label', 'Department').parent().find('div[role="combobox"]').click({ force: true });
    cy.get('[data-value="104"]').click({ force: true });

    // Doctor Type
    cy.contains('label', 'Doctor Type').parent().find('div[role="combobox"]').click({ force: true });
    cy.get('li[data-value="Consultant"]').click({ force: true });

    // Qualification
    cy.contains('label', 'Qualification').parent().find('div[role="combobox"]').click({ force: true });
    cy.get('li[data-value="46"]').click({ force: true });

    // Personal Info
    cy.get('input[name="first_name"]').type(doctorData.firstName);
    cy.get('input[name="last_name"]').type(doctorData.lastName);
    cy.get('input[name="username"]').type(doctorData.username);
    cy.get('input[placeholder="DD-MM-YYYY"]').type(doctorData.dob);
    cy.get('[name="email"]').type(doctorData.email);
    cy.get('input[value="+91"]').clear().type(doctorData.phone);

    // Gender
    cy.contains('label','Gender').parent().find('div[role="combobox"]').click({ force: true });
    cy.get('li[data-value="M"]').click({ force: true });

    // Credentials & Experience
    cy.get('input[name="password"]').type(doctorData.password);
    cy.get('[name="experience"]').type(doctorData.experience);
    cy.get('input[name="op_fee"]').type(doctorData.fee);
    cy.get('[name="license"]').type(doctorData.license);
    cy.get('[name="op_validity_days"]').type(doctorData.validity);

    // Save
    cy.get('button[variant="contained"]').should('be.enabled').click();

    // Assert file upload section appears
    cy.get('.mt-4').contains('Browse File').should('be.visible').click({ force: true });

    // Upload File
    cy.get('input[type="file"]').attachFile(doctorData.fileName);
    cy.get('.flex > .bg-blue-600').should('be.visible').click();

    // Assert file uploaded successfully
    cy.contains('Upload successful').should('be.visible');
  });

  it('should configure Doctor availability schedule', () => {
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    days.forEach(day => {
      cy.get(`input[type="checkbox"][name="${day}"]`).check({ force: true });

      // From Time
      cy.get(`input[name="${day}"]`).eq(1)
        .clear()
        .type('09:00')
        .should('have.value', '09:00');

      // To Time
      cy.get(`input[name="${day}"]`).eq(2)
        .clear()
        .type('17:00')
        .should('have.value', '17:00');
    });

    cy.get('.MuiDialogActions-root > .flex > .MuiButton-contained')
      .should('be.enabled')
      .click();

    // Final Assertion - doctor created
    cy.contains('Doctor created successfully').should('be.visible');
  });

});
