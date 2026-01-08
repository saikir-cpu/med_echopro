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
    patient.enterPatientName('puri','jagan');
    patient.enterDOB('01/01/1990');
    patient.enterPhone('+916281335793');

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
    patient.selectBed('Bed No: 0061 - Available');

    // Step 5: Payment Details
    patient.enterDeposit(20000);
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
      indent.clickInPatientById('P018220')
      indent.clickVisitButton() 
      indent.clickMedicationButton()
      indent.clickRequest()
       indent.requestMultipleMedicines([
    { name: 'Dan 100mg Tablet SR', qty: 70 },
    { name: 'Dan 50mg Injection', qty:90 },
    { name: 'Dan Shine Lotion', qty:90 }
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
    cy.contains('P018220').should('be.visible');
    
    // Click Buy button - this navigates to retail invoice page
    indent.clickBuyButtonByPatientId('P018220');
    indent.clickEyeIcon()
    indent.checkMedicineByOrderId('IP-Med-00007')
    indent.clickSubmit()
    indent.closePopup()
    indent.clickGenerateReceipt()
    
})
it('should create an inpatient successfully', () => {
     cy.clearCookies();
    cy.clearLocalStorage();

    // Login (replace with your actual custom command)
    cy.loginAsAdmin();

    cy.viewport(1400, 900);
    cy.url().should('include', '/dashboard');

    // Step 1: Open Patient Creation
    patient.clickPatientsMenu()
     indent.clickInPatientById('P018220')
      indent.clickVisitButton()
      patient.clickConsultantTab()
      patient.clickMoreVertIcon()
      patient.clickUpdateOption() 
      patient.enterDurationInDays('5')
      patient.clickUpdateButton()
      patient.clickRoomsBedsTab()
      patient.clickMoreVertIcon()
      patient.clickUpdateOption()
      patient.enterRoomBedsNoOfDays('5')
      patient.enterDmoDays('5')
      patient.enterNursingDays('5') 
      patient.clickUpdateButton()
      



})

it.only('Validate patient billing summary calculations', () => {

  cy.loginAsAdmin();
  cy.viewport(1400, 900);

  patient.clickPatientsMenu();
  indent.clickInPatientById('P018220');
  indent.clickVisitButton();

  const v = {};

  cy.wrap(null)
    .then(() => indent.getBreakdownAmount('Admission & Operation Charges'))
    .then(x => v.admission = x)

    .then(() => indent.getBreakdownAmount('Room & Bed Charges'))
    .then(x => v.roomBed = x)

    .then(() => indent.getBreakdownAmount('Doctor & ICU Charges'))
    .then(x => v.doctorICU = x)

    .then(() => indent.getBreakdownAmount('Medication Charges'))
    .then(x => v.medication = x)

    .then(() => indent.getBreakdownAmount('Services & Procedure Charges'))
    .then(x => v.services = x)

    .then(() => indent.getBreakdownAmount('Pathology Charges'))
    .then(x => v.pathology = x)

    .then(() => indent.getSummaryAmount('TOTAL CHARGES'))
    .then(x => v.totalChargesUI = x)

    .then(() => indent.getSummaryAmount('DEPOSITED'))
    .then(x => v.deposited = x)

    .then(() => indent.getSummaryAmount('BALANCE DUE'))
    .then(x => v.balanceDueUI = x)

    .then(() => indent.getSummaryAmount('BALANCE AMOUNT'))
    .then(x => v.balanceAmountUI = x)

    // ✅ ASSERTIONS — GUARANTEED DATA
    .then(() => {

      const breakdownSum =
        v.admission +
        v.roomBed +
        v.doctorICU +
        v.medication +
        v.services +
        v.pathology;

      const expectedBalanceDue =
        Number((v.totalChargesUI - v.deposited).toFixed(2));

      const expectedBalanceAmount =
        Math.max(0, Number((v.deposited - v.totalChargesUI).toFixed(2)));

      cy.log(JSON.stringify(v));

      // ✅ CORRECT VALIDATIONS
      expect(v.totalChargesUI).to.be.at.least(breakdownSum);
      expect(v.balanceDueUI).to.eq(expectedBalanceDue);
      expect(v.balanceAmountUI).to.eq(expectedBalanceAmount);
    });
});










})
