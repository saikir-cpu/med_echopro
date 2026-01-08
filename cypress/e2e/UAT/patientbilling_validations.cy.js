import PatientCreationPage from '../../support/pages/patientcreationPage';
import IndentPage from '../../support/pages/indent.Page';
import BillingSummaryPage from '../../support/pages/BillingSummary.page';
const patient = new PatientCreationPage();
  const indent = new IndentPage();
const billing = new BillingSummaryPage();

describe('Validate patient billing summary calculations', () => {

  it('should validate billing calculations dynamically from UI', () => {

    cy.clearCookies();
    cy.clearLocalStorage();

    cy.loginAsAdmin();
    cy.viewport(1400, 900);

    cy.url().should('include', '/dashboard');

    // Navigate to patient
    patient.clickPatientsMenu();
  indent.clickInPatientById('P018220');
  indent.clickVisitButton();

    cy.wait(2000); // allow billing APIs to settle

    // 🔹 Read summary values first
    billing.getDepositedAmount().then(deposited => {

      billing.getTotalCharges().then(totalCharges => {

        billing.getBalanceDue().then(balanceDue => {

          billing.getBalanceAmount().then(balanceAmount => {

            // 🔹 Read charge breakdown
            billing.getChargeBreakdownAmount('Admission & Operation Charges').then(admission => {
              billing.getChargeBreakdownAmount('Room & Bed Charges').then(roomBed => {
                billing.getChargeBreakdownAmount('Doctor & ICU Charges').then(doctorICU => {
                  billing.getChargeBreakdownAmount('Medication Charges').then(medication => {
                    billing.getChargeBreakdownAmount('Services & Procedure Charges').then(services => {
                      billing.getChargeBreakdownAmount('Pathology Charges').then(pathology => {

                        // ---------- Calculations ----------
                        const breakdownSum =
                          admission +
                          roomBed +
                          doctorICU +
                          medication +
                          services +
                          pathology;

                        const expectedBalanceDue =
                          Number((totalCharges - deposited).toFixed(2));

                        const expectedBalanceAmount =
                          Math.max(0, Number((deposited - totalCharges).toFixed(2)));

                        // ---------- Logs ----------
                        cy.log(`Deposited: ${deposited}`);
                        cy.log(`Total Charges: ${totalCharges}`);
                        cy.log(`Breakdown Sum: ${breakdownSum}`);
                        cy.log(`Balance Due UI: ${balanceDue}`);
                        cy.log(`Expected Balance Due: ${expectedBalanceDue}`);
                        cy.log(`Balance Amount UI: ${balanceAmount}`);
                        cy.log(`Expected Balance Amount: ${expectedBalanceAmount}`);

                        // ---------- VALIDATIONS ----------

                        // 1️⃣ Total Charges should be >= visible breakdown
                        expect(
                          totalCharges,
                          'Total Charges must be >= breakdown sum'
                        ).to.be.at.least(breakdownSum);

                        // 2️⃣ Balance Due = Total Charges - Deposited
                        expect(
                          balanceDue,
                          'Balance Due calculation mismatch'
                        ).to.eq(expectedBalanceDue);

                        // 3️⃣ Balance Amount logic
                        expect(
                          balanceAmount,
                          'Balance Amount calculation mismatch'
                        ).to.eq(expectedBalanceAmount);

                      });
                    });
                  });
                });
              });
            });

          });
        });
      });
    });

  });

});
