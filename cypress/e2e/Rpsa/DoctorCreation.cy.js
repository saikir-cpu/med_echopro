const UserControlPage = require('../../pages/userControl.page');
const DoctorFormPage = require('../../pages/doctorForm.page');

describe('doctor creation', () => {
  it('visits the website and creates a doctor', () => {
    cy.loginAsAdmin();

    UserControlPage
      .openMenu()
      .openUserControl()
      .clickNewDoctor()
      .selectRole('doctor')
      .selectDepartment('8');

    DoctorFormPage
      .selectDoctorType('Consultant')
      .selectQualification('13')
      .fillNames('franz', 'kafka', 'kafka94')
      .fillPersonal({ dob: '12-12-1961', email: 'franzkafka94@example.com', phone: '9876543210', gender: 'M', password: 'franzkafka@70' })
      .fillProfessional({ experience: 25, op_fee: 500, license: 'MEDIG42364', op_validity_days: 30 })
      .uploadProfile('6658266.png')
      .setSchedule()
      .submit();
  });
});