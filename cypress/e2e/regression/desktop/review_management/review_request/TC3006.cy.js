import { desktopCommonObjects, reviewRequests } from "../../../../../support/pageObjects";

describe('[TC3006]',()=>{
    let tcCommonData;
    beforeEach(() => {
        cy.loginForDesktop();
        cy.fixture('desktop/common-data').then((data)=>{
            tcCommonData = data;
        });
    });

    it('Verify language conversion is working correctly',()=>{
        //Step 1 : Visit the login page of obenan
        //Step 2 : Type correct email 
        //Step 3 : Type correct password
        //Stpe 4 : Click Remember me check box 
        //Step 5 : Click sign in
        cy.visit(Cypress.env('baseURL'));
        //Step 6 : Click on Review managment
        reviewRequests.sidebarLinkReviewManagment().click();
        //Step 7 : Click on "Review Request"
        reviewRequests.sidebarChildLinkReviewRequest().click();
        //Step 8 : Verify dropdown 
        desktopCommonObjects.locationSelectField(tcCommonData.param_review_request_campaign).click();
        desktopCommonObjects.locationSelectFieldFirstOption(tcCommonData.param_review_request_campaign).should('be.visible');
        //Step 9 : Verify Campaigns
        desktopCommonObjects.tableFirstRow(tcCommonData.param_review_request).should('be.visible').click({force : true});
        //Step 10 : Verify buttons
        reviewRequests.editReviewRequestButton().should('exist').and('be.visible');
        reviewRequests.reviewRequestMoreButton().should('exist').and('be.visible');
        //Step 11 : Click "Create new Campaign"
        reviewRequests.createNewCompaignButton().click();
        //Step 12 : Click on the dropdown menu to select location
        desktopCommonObjects.locationSelectField(tcCommonData.param_review_request_campaign).click().type(tcCommonData.locationExactMatch);
        //Step 13 : Click on a location 
        desktopCommonObjects.locationSelectFieldFirstOption(tcCommonData.param_review_request_campaign).click(); 
        //Step 14 : 1- Select "Review Platform" if unchecked //google is selected
        //Step 15 : 2 - Click on Check box Send to Review Platform
        reviewRequests.reviewTypeCheckboxSendToReviewPlateform().click();
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 16 : 1- Click upload image/ Edit email campaign
        reviewRequests.browseImageAtCampaignsetup().click();
        //Step 17 : 2 - Click camera icon to select image
        //Step 18 : 3 - Select single image
        //Step 19 : 4 - Click "Open"
        reviewRequests.imageUploadAtCampaignsetup(tcCommonData.imagesPath + tcCommonData.accurateSpecsImage);
        //Step 20 : 5 - Click "Ok"
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click().wait(3000);
        //Step 21 : Image uploaded
        desktopCommonObjects.verifyImageUploaded(tcCommonData.param_review_request_campaign).should('exist').and('be.visible');
        //Stpe 22 : Type anything in heading or description
        reviewRequests.editHeadingAndDiscriptionButton().click();
        reviewRequests.emailHeadingFieldAtCampaignsetup().click().type(tcCommonData.heading);
        reviewRequests.discriptionFieldAtCampaignSetup().click().type(tcCommonData.discription);
        //STep 23 : Click save
        reviewRequests.saveButtonAtCampaignSetup().click();
        //Step 24 : Click Next
        reviewRequests.nextButtonAtCampaignsetup().click();
        //Step 25 : 1 - Click Import your own email addresses //already checked
        //Step 26 : 2 - Click Direct Import check box //alrady checked
        reviewRequests.emailFieldForSendingReviewRequest().click().type(tcCommonData.email).then(()=>{
            cy.contains('1 valid emails entered').should('exist').and('be.visible');
            cy.contains('Review requests will be sent to 1 email addresses').should('exist').and('be.visible');
        });
        //Step 27 : Choose language
        desktopCommonObjects.chooseLanguage(tcCommonData.newLanguage);
        //Step 28 : Click Next
        reviewRequests.nextButtonAtCampaignsetup().click();
        reviewRequests.checkLanguageDuringCompaignSetup().contains('de');
        //Step 29 : 1 - Click start campaign;
        reviewRequests.startCampaignButton().click();
        //Step 30 : 2 - Click confirm to start campaign
        desktopCommonObjects.popupConfirmButton().click();
        //Step 31 : Verify Toast message "Campaign Created successfully"
        reviewRequests.compaignCreatedSuccessToast().should('be.visible');
        //Step 32 : Verify the email you received is converted in that language //not yet
    });


});