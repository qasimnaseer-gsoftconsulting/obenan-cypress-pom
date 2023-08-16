
import { commonObjects,reviewRequests } from "../../../../../support/pageObjects";

describe('[TC3001]',()=>{
    let tcCommonData;
    let tc3001Data;
    beforeEach(() => {
        cy.loginForDesktop();
        // Runs before each test in the describe block
        cy.fixture('desktop/review_management/review_request').then((data) => {
          tc3001Data = data.smoke[0].desktop[0].TC3001[0];
        });
        cy.fixture('desktop/common-data').then((data)=>{
          tcCommonData = data;
        });
      });
    it('Verify Campaign is created successfully',()=>{
        cy.visit(Cypress.env('baseURL'));
        let ImagesPath = tcCommonData.ImagesPath;
        //Pre-Condition : Location must be added and subscribed to review source google
        //Step 1 : visit the login page
        //Step 2 : type email 
        //Step 3 : type password
        //Step 4 : Click sign in 
        //Step 5 : click on reveiw managment
        reviewRequests.sidebarLinkReviewManagment().click();
        //Step 6 : click on review requests
        reviewRequests.sidebarChildLinkReviewRequest().click();
        //Step 7 : click on create new compaigns
        reviewRequests.createNewCompaignButton().click();
        //Step 8 : select location
        reviewRequests.locationFieldAtCampaignsetup().click().type(tcCommonData.locationExactMatch);
        reviewRequests.locationFieldOptionAtCampaignsetup().click();
        //Step 9 : click on checkbox send to review plateform
        reviewRequests.reviewTypeCheckboxSendToReviewPlateform().click();
        //Step 10 : click on next button
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 11 : click on upload images
        reviewRequests.browseImageAtCampaignsetup().click();
        //Step 12 : click on Drag & Drop Image(s) here 
        reviewRequests.imageUploadAtCampaignsetup(ImagesPath+tcCommonData.accurateSpecsImage);
        //Step 13 : click on ok button
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click();
        //Step 14 : Click on pencil/Edit icon
        reviewRequests.editHeadingAndDiscriptionButton().click({force : true});
        //Step 15 : type text in heading
        reviewRequests.emailHeadingFieldAtCampaignsetup().click().type(tc3001Data.heading);
        //Step 16 : type discription in heading
        reviewRequests.discriptionFieldAtCampaignSetup().click().type(tc3001Data.discription);
        //Step 17 : click on save button
        reviewRequests.saveButtonAtCampaignSetup().click().wait(5000);
        //Step 18 : click on next button
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 19 : type email in email field
        reviewRequests.emailFieldForSendingReviewRequest().click().type(tcCommonData.email);
        //Step 20 : click on next button
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 21 : Click on Start Campaign
        reviewRequests.startCampaignButton().click()
        //Step 22 : click on confirm button on popup
        reviewRequests.startCampaignPopupConfirmButton().click();
        //Step 23 : Verify toast messeage
        reviewRequests.compaignCreatedSuccessToast().should('be.visible');

    });
});