import { desktopCommonObjects, reviewRequests } from "../../../../../support/pageObjects";

describe('[TC3003]',()=>{


    let tcCommonData;
    let tc3003Data;
    beforeEach(() => {
        cy.loginForDesktop();
        // Runs before each test in the describe block
        cy.fixture('desktop/review_management/review_request').then((data) => {
          tc3003Data = data.regression[0].desktop[0].TC3003[0];
        });
        cy.fixture('desktop/common-data').then((data)=>{
          tcCommonData = data;
        });
    });

    it('Verify QR code is working correctly',()=>{
        let ImagesPath = tcCommonData.ImagesPath;
        //Step 1 : Visit the login page of obenan
        //Step 2 : Type correct email 
        //Step 3 : Type password
        //Step 4 : Type correct password
        //Step 5 : Click Remember me check box 
        //Step 6 : Click sign in
        cy.visit(Cypress.env('baseURL'));
        //Step 7 : Click on Review managment 
        reviewRequests.sidebarLinkReviewManagment().click();
        //Step 8 : Click on "Review Request"
        reviewRequests.sidebarChildLinkReviewRequest().click();
        //Step 9 : Verify page heading and create compaign button
        //Step 10 : Click "Create new Campaign"
        cy.contains(tc3003Data.review_request_heading).should('exist').and('be.visible');
        reviewRequests.createNewCompaignButton().should('be.visible').click();
        //Step 11 : Click on the dropdown menu to select location
        desktopCommonObjects.locationSelectField(tcCommonData.param_review_request_campaign).click().type(tcCommonData.locationExactMatch);
        //Step 12 : Click on a location
        desktopCommonObjects.locationSelectFieldFirstOption(tcCommonData.param_review_request_campaign).click(); 
        //Step 13 : 1- Select "Review Platform" if unchecked
        //alread checked
        //Step 14 : 2 - Click on Check box Send to Review Platform
        reviewRequests.reviewTypeCheckboxSendToReviewPlateform().click().then(()=>{
            desktopCommonObjects.checkboxCheckedState(tcCommonData.param_review_request_campaign).eq(1).should('exist');
        });
        //Step 15 : Click Next Button
        reviewRequests.nextButtonAtCampaignsetup().should('be.visible').click();
        //Step 16 : 1- Click upload image/ Edit email campaign
        reviewRequests.browseImageAtCampaignsetup().click();
        //Step 17 : 2 - Click camera icon to select image
        //Step 18 : 3 - Select single image
        reviewRequests.imageUploadAtCampaignsetup(ImagesPath + tcCommonData.accurateSpecsImage);
        //Step 19 : 4 - Click "Open"
        //Step 20 : 5 - Click "Ok"
        reviewRequests.imageUploadOkButtonAtCampaignsetup().click().wait(2000);
        //Step 21 : Type anything in heading or description
        reviewRequests.editHeadingAndDiscriptionButton().click();
        reviewRequests.emailHeadingFieldAtCampaignsetup().click().type(tc3003Data.heading);
        reviewRequests.discriptionFieldAtCampaignSetup().click().type(tc3003Data.discription);
        //Step 22 : Click save
        reviewRequests.saveButtonAtCampaignSetup().click();
        //Step 23 : Click Next
        reviewRequests.nextButtonAtCampaignsetup().click({force : true});
        //Step 24 : 1 - Click Generate QR Code check box
        reviewRequests.generateQrCodeCheckbox().should('be.visible').click().then(()=>{
            cy.contains(tc3003Data.generateQrCodeCheckboxToastText).should('be.visible');
        });
        //Step 25 : Choose language //by default selected
        //Step 26 : Click Next
        reviewRequests.nextButtonAtCampaignsetup().click({force : true}); 
        //Step 27 : 1 - Click Get QR Code
        reviewRequests.getQrCodeButton().click();
        //Step 28 : 2 - Click confirm to start campaign
        desktopCommonObjects.popupConfirmButton().click();
        //Step 29 : Verify Toast message "Campaign Created successfully"
        reviewRequests.compaignCreatedSuccessToast().should('exist').and('be.visible');
        //Step 30 : Verify QR Code Image Dialog Box
        reviewRequests.qrCode().should('exist').and('be.visible').then(()=>{
            cy.contains('Copy QR link').should('be.visible');
        });

    });

});