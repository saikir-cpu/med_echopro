import PatientCreationPage from '../../support/pages/patientcreationPage';
import IndentPage from '../../support/pages/indent.Page';

describe('In-Patient Creation Flow', () => {

  const patient = new PatientCreationPage();
  const indent = new IndentPage();

  it.skip('should create an inpatient successfully', () => {
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
    patient.enterPatientName('anita', 'desaii');
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
    patient.selectBed('Bed No: 0065 - Available');

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
      indent.clickInPatientById('P018206')
      indent.clickVisitButton() 
      indent.clickMedicationButton()
      indent.clickRequest()
       indent.requestMultipleMedicines([
    { name: 'Cal D 250mg Tablet', qty: 90 },
    { name: 'Oxetol 300 Tablet', qty: 90},
    { name: 'LACOSET 100MG', qty: 200}
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
    indent.clickBuyButtonByPatientId('P018206');
    indent.clickEyeIcon()
    indent.checkMedicineByOrderId('IP-Med-00001')
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
     indent.clickInPatientById('P018206')
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
     cy.clearCookies();
    cy.clearLocalStorage();

    // Login (replace with your actual custom command)
    cy.loginAsAdmin();

    cy.viewport(1400, 900);
    cy.url().should('include', '/dashboard');

    // Step 1: Open Patient Creation
    patient.clickPatientsMenu()
     indent.clickInPatientById('P018206')
      indent.clickVisitButton()
      cy.wrap({}).then(async () => {

    const deposited = indent.parseAmount(await indent.getDepositedAmount());
    const totalChargesUI = indent.parseAmount(await indent.getTotalCharges());
    const discount = indent.parseAmount(await indent.getDiscount());
    const balanceDueUI = indent.parseAmount(await indent.getBalanceDue());
    const balanceAmountUI = indent.parseAmount(await indent.getBalanceAmount());

    const admission = indent.parseAmount(
      await indent.getChargeByLabel('Admission & Operation Charges')
    );
    const doctorICU = indent.parseAmount(
      await indent.getChargeByLabel('Doctor & ICU Charges')
    );
    const roomBed = indent.parseAmount(
      await indent.getChargeByLabel('Room & Bed Charges')
    );
    const services = indent.parseAmount(
      await indent.getChargeByLabel('Services & Procedure Charges')
    );
    const pathology = indent.parseAmount(
      await indent.getChargeByLabel('Pathology Charges')
    );
    const medication = indent.parseAmount(
      await indent.getChargeByLabel('Medication Charges')
    );

    /* ---------- BUSINESS CALCULATIONS ---------- */
    const calculatedTotalCharges =
      admission +
      doctorICU +
      roomBed +
      services +
      pathology +
      medication;

    const calculatedBalanceDue =
      calculatedTotalCharges - deposited - discount;

    const calculatedBalanceAmount =
      deposited > calculatedTotalCharges
        ? deposited - calculatedTotalCharges
        : 0;

    /* ---------- ASSERTIONS ---------- */
    expect(calculatedTotalCharges).to.eq(totalChargesUI);
    expect(calculatedBalanceDue).to.eq(balanceDueUI);
    expect(calculatedBalanceAmount).to.eq(balanceAmountUI);

  });







})








})
