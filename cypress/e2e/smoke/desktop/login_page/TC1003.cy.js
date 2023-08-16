import { desktopLoginPageObjects } from "../../../../support/pageObjects";

describe('[TC1003]', () => {

  let tcCommonData ;

  beforeEach(() => {
    // Runs before each test in the describe block
    cy.fixture('desktop/common-data').then((data)=>{
      tcCommonData = data;
    });
  });

  it('Title : Login to Obenan with correct credentials', () => {

    desktopLoginPageObjects.setViewPortForDesktop();

    //Step 1: Visit login page
    desktopLoginPageObjects.visitLoginPage();

    //Step 2 : Type username 
    desktopLoginPageObjects.setEmailAddress();

    //Step 3 : Type password
    desktopLoginPageObjects.setPasswrod();

    //Step 4 : Click on remember me checkbox
    desktopLoginPageObjects.rememberMeCheckbox().check('remember');

    //Step 5 : Cick on Sign in button
    desktopLoginPageObjects.signInButton().click();
    desktopLoginPageObjects.verifyDashboard(tcCommonData.dashboardCheck);//Assertion

  });
});