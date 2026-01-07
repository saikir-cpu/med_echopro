import PatientCreationPage from '../../support/pages/patientcreationPage';
import IndentPage from '../../support/pages/indent.Page';

describe('In-Patient Creation Flow', () => {

  const patient = new PatientCreationPage();
  const indent = new IndentPage();

  it('should create an inpatient successfully', () => {
     cy.clearCookies();
    cy.clearLocalStorage();

    // Login (replace with your actual custom command)
    cy.loginAsAdmin();

    cy.viewport(1400, 900);
    cy.url().should('include', '/dashboard');

    // Step 1: Open Patient Creation
    patient.clickPatientsMenu()
    patient.createInPatient();

    // Step 2: Basic Patient Details
    patient.enterPatientName('anita', 'desai');
    patient.enterDOB('01/01/1990');
    patient.enterPhone('+916281335792');

    patient.selectGender('Male');
    patient.selectPatientType('Cash');
    patient.selectTariffType('Self');

    patient.clickNext();

    // Step 3: Admission Details
    patient.selectAdmissionType('casuality');
    patient.selectDoctor('avinash kumar pss');
    patient.enterDoctorFeePerDay(1500);

    patient.selectTodayAdmissionDate();
    patient.selectCurrentTime();

    // Step 4: Bed Allocation
    patient.selectRoom('private/Balconi Special - 007 - 007 - Available');
    patient.selectBed('Bed No: 0068 - Available');

    // Step 5: Payment Details
    patient.enterDeposit(5000);
    patient.selectPaymentMethod('Cash');

    // Step 6: Submit
    patient.submit();

    // Step 7: Success Validation (adjust as per app behavior)
    cy.contains(/patient created successfully|admission successful/i)
      .should('be.visible');
  })


  it('ordering medicines to ip patient', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    // Login (replace with your actual custom command)
    cy.loginAsAdmin();

    cy.viewport(1400, 900);
    cy.url().should('include', '/dashboard');

     patient.clickPatientsMenu()
      indent.clickInPatientById('P018195')
      indent.clickVisitButton() 
      indent.clickMedicationButton()
      indent.clickRequest()
       indent.requestMultipleMedicines([
    { name: 'Levipil 500', qty: 100 },
    { name: 'Nervpace Capsule', qty: 1000 },
    { name: 'Calcigo Max Softgel Capsule', qty: 50}
  ]);

      })

it('validating indent billing through pharmacist', () => {
     cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginAsPharmacist();

    cy.viewport(1400, 900);
    cy.url().should('include', '/dashboard');
    
    indent.clickIndentModule();
    
    // Wait for the indent table to load
    cy.wait(2000);
    
    // Verify patient exists in the table before clicking
    cy.contains('P018195').should('be.visible');
    
    // Click Buy button - this navigates to retail invoice page
    indent.clickBuyButtonByPatientId('P018195');
    indent.clickEyeIcon()
    indent.checkMedicineByOrderId('IP-Med-00001')
    indent.clickSubmit()
    indent.closePopup()
    indent.clickGenerateReceipt()
    
})
it.only('should create an inpatient successfully', () => {
     cy.clearCookies();
    cy.clearLocalStorage();

    // Login (replace with your actual custom command)
    cy.loginAsAdmin();

    cy.viewport(1400, 900);
    cy.url().should('include', '/dashboard');

    // Step 1: Open Patient Creation
    patient.clickPatientsMenu()
     indent.clickInPatientById('P018195')
      indent.clickVisitButton()
      indent.validateBalanceDue()



})







})
