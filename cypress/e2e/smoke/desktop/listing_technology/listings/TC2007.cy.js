import { listings } from "../../../../../support/pageObjects";

describe('[TC2007]',()=>{

    let tcCommonData;

    beforeEach(() => {
      // Runs before each test in the describe block
      cy.loginForDesktop();
      cy.fixture('desktop/common-data').then((data)=>{
        tcCommonData = data;
      });
    })

    it('Verify "Listing functionality" is working correctly or not',()=>{
        
        cy.visit(Cypress.env('baseURL'));
        //Step 1 : Visit login page
        //Step 2 : Type email 
        //Step 3 : Type password
        //Step 4 : click on remeber me checkbox 
        //Step 5 : Click on sign in button
        //Step 6 : Verify Title as View Listing of the Page
        //Step 7 : Click 3 dots in front of listing 
        listings.clickOnMoreButtonForFethcingData();
        cy.wait(1000);
        //Step 8 : Click "fetch data from social accounts"
        listings.fetchDataFromSocialAccontsButton().click();
        //Step 9 : Click confirm
        listings.fetchDataConfirmButtonOnPopup().click().wait(3000);
        
        //Step 10 : Verify Toast message "Successfully synced with google"
        listings.fetchDataSuccessToast();
        //Step 11 : Click "edit" button in front of company details
        listings.editCompanyDetails().eq(0).click({force : true}).wait(2000);
        //Step 12 : Now type something in location name like "Test" at the end of location name
        listings.companyDetailsLocationNameField().type('Test');
        //Step 13 : Click save button
        listings.listingsDetailFormSaveButton().click();
        //Step 14 : Verify Toast message "Updated Successfully"
        listings.listingEditFormSaveToastMessage();
        //Step 15 : Now click cross or close button
        listings.listingsDetailFormCloseButton().click();
        //Step 16 : Click to enable auto sync button
        listings.autoSyncCheckboxClick().click();
        //Step 17 : Check sync now button is available
        listings.verifySyncNowButton();


        //=============================== Post Condition ==========================//
        listings.autoSyncCheckboxClick().click().wait(5000);
        listings.editCompanyDetails().eq(0).click({force : true});
        listings.companyDetailsLocationNameField().type('{backspace}'+'{backspace}'+'{backspace}'+'{backspace}');
        listings.listingsDetailFormSaveButton().click();
        listings.listingEditFormSaveToastMessage();
        cy.wait(2000);
        listings.listingsDetailFormCloseButton().click();
    });
});